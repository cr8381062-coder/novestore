// Nova Store - Secure Gemini AI proxy (Edge Function)
// GEMINI_API_KEY is stored as a Supabase secret, never exposed to visitors.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") || "";
// Try the best models the key allows, in priority order.
const MODELS = GEMINI_KEY.startsWith("AIza")
  ? ["gemini-2.5-flash", "gemma-4-26b-a4b-it"]
  : ["gemini-flash-latest", "gemini-pro-latest", "gemma-4-26b-a4b-it"];

const IP_WINDOW_MS = 60_000;
const IP_LIMIT = 60;
const hits = new Map<string, number[]>();

const CACHE_TTL_MS = 10 * 60 * 1000;
const CACHE_MAX = 300;
const CACHE = new Map<string, { t: number; text: string }>();

function cachedGet(key: string): string | null {
  const hit = CACHE.get(key);
  if (hit && Date.now() - hit.t < CACHE_TTL_MS) return hit.text;
  if (hit) CACHE.delete(key);
  return null;
}

function cachedSet(key: string, text: string) {
  if (CACHE.size >= CACHE_MAX) {
    let oldestKey = "";
    let oldestT = Infinity;
    CACHE.forEach((v, k) => {
      if (v.t < oldestT) {
        oldestT = v.t;
        oldestKey = k;
      }
    });
    if (oldestKey) CACHE.delete(oldestKey);
  }
  CACHE.set(key, { t: Date.now(), text });
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, apikey, x-client-info, content-type",
};

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}

function rateOk(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < IP_WINDOW_MS);
  if (arr.length >= IP_LIMIT) {
    hits.set(ip, arr);
    return false;
  }
  arr.push(now);
  hits.set(ip, arr);
  return true;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { status: 200, headers: cors });
  }
  if (req.method !== "POST") {
    return json(405, { error: "method_not_allowed" });
  }

  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (!rateOk(ip)) {
    return json(429, { error: "rate_limited" });
  }

  const message = String(body.message || "").slice(0, 500);
  const lang = String(body.lang || "ar") === "en" ? "en" : "ar";
  const products = Array.isArray(body.products) ? body.products.slice(0, 50) : [];
  if (!message.trim()) {
    return json(400, { error: "empty_message" });
  }

  const cacheKey = lang + ":" + message;
  const cached = cachedGet(cacheKey);
  if (cached) return json(200, { text: cached });

  const catalog = products.length
    ? products
        .map((p: any) => `- ${p.name} ($${p.price})` + (p.category ? ` [${p.category}]` : ""))
        .join("\n")
    : "- (no products loaded)";

  const systemBase = `You are "NOVE AI", the smart assistant of Nova Store, a digital products store selling FiveM scripts, Discord bots and gaming resources.
Available products right now:
${catalog}
Rules:
- If the customer greets (السلام عليكم, وعليكم السلام, سلام, مرحبا, هلا, hello, hi), ALWAYS start your answer by returning the greeting: for "السلام عليكم"/"سلام" reply "وعليكم السلام ورحمة الله وبركاته", for others reply "أهلاً وسهلاً"/"Hello". Then briefly offer help.
- Answer ONLY in ${lang === "en" ? "English" : "Arabic"} unless the customer writes in another language.
- Keep the answer short (1-4 lines), friendly, with no markdown, no emojis, no analysis or reasoning.
- Payment: PayPal only and secure. Delivery: instant after payment. Support and installation help: discord.gg/Jf8MwSvdXV.
- If you don't know, politely point to discord.gg/Jf8MwSvdXV.`;

  let lastErr = "";
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  for (const model of MODELS) {
    const isGemma = model.startsWith("gemma");
    const system = isGemma
      ? systemBase + `\n- Output ONLY a JSON object with the single field "answer" containing your final response. Do not print any other text.`
      : systemBase;
    const payload = {
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: message }] }],
      generationConfig: isGemma
        ? {
            temperature: 0.6,
            maxOutputTokens: 350,
            responseMimeType: "application/json",
            responseSchema: { type: "OBJECT", properties: { answer: { type: "STRING" } } },
          }
        : { temperature: 0.6, maxOutputTokens: 1100 },
    };
    const attempts = 1;
    for (let a = 0; a < attempts; a++) {
      let upstream: Response;
      try {
        upstream = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(13000),
          }
        );
      } catch (e) {
        lastErr = "fetch " + String((e as any).name || e);
        await sleep(1500);
        continue;
      }
      if (upstream.status === 429 || upstream.status === 503) {
        lastErr = "busy " + upstream.status;
        await sleep(1500);
        continue;
      }
      if (!upstream.ok) {
        const err = await upstream.text();
        lastErr = upstream.status + " " + err.slice(0, 200);
        continue;
      }
      const data = await upstream.json();
      const raw = (data?.candidates?.[0]?.content?.parts || [])
        .map((p: any) => String(p.text || ""))
        .join("")
        .trim();
      const text = isGemma
        ? extractAnswer(raw)
        : raw.replace(/\n+/g, "<br>").slice(0, 1200);
      if (text) {
        cachedSet(cacheKey, text);
        return json(200, { text });
      }
      lastErr = "empty candidate";
    }
  }
  console.error("gemini all models failed", lastErr);
  return json(502, { error: "upstream_error" });
});

function extractAnswer(raw: string): string {
  const t = String(raw || "").trim();
  if (!t) return "";
  try {
    const parsed = JSON.parse(t);
    if (parsed && typeof parsed.answer === "string" && parsed.answer.trim()) {
      return parsed.answer.trim();
    }
  } catch {
    /* try slice below */
  }
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start !== -1 && end > start) {
    try {
      const parsed = JSON.parse(t.slice(start, end + 1));
      if (parsed && typeof parsed.answer === "string" && parsed.answer.trim()) {
        return parsed.answer.trim();
      }
    } catch {
      /* use raw below */
    }
  }
  return t.slice(0, 600);
}