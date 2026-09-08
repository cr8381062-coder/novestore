// NOVE STOR - Secure Gemini AI proxy (Edge Function)
// GEMINI_API_KEY is stored as a Supabase secret, never exposed to visitors.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") || "";
const MODEL = "gemma-4-26b-a4b-it";

const IP_WINDOW_MS = 60_000;
const IP_LIMIT = 30;
const hits = new Map<string, number[]>();

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

  const catalog = products.length
    ? products
        .map((p: any) => `- ${p.name} ($${p.price})` + (p.category ? ` [${p.category}]` : ""))
        .join("\n")
    : "- (no products loaded)";

  const system = `You are "NOVE AI", the smart assistant of NOVE STOR, a digital products store selling FiveM scripts, Discord bots and gaming resources.
Available products right now:
${catalog}
Rules:
- If the customer greets (السلام عليكم, وعليكم السلام, سلام, مرحبا, هلا, hello, hi), ALWAYS start your answer by returning the greeting: for "السلام عليكم"/"سلام" reply "وعليكم السلام ورحمة الله وبركاته", for others reply "أهلاً وسهلاً"/"Hello". Then briefly offer help.
- Answer ONLY in ${lang === "en" ? "English" : "Arabic"} unless the customer writes in another language.
- Keep the answer short (1-4 lines), friendly, with no markdown, no emojis, no analysis or reasoning.
- Reply ONLY with a JSON object like: {"answer":"your answer here"} and nothing else.
- Payment: PayPal only and secure. Delivery: instant after payment. Support and installation help: discord.gg/nove.
- If you don't know, politely point to discord.gg/nove.`;

  const payload = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text: message }] }],
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 220,
      responseMimeType: "application/json",
      responseSchema: { type: "OBJECT", properties: { answer: { type: "STRING" } } },
    },
  };

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!upstream.ok) {
      const err = await upstream.text();
      console.error("gemini upstream error", upstream.status, err.slice(0, 300));
      return json(502, { error: "upstream_error" });
    }
    const data = await upstream.json();
    const raw = (data?.candidates?.[0]?.content?.parts || [])
      .map((p: any) => String(p.text || ""))
      .join("")
      .trim();
    let text = raw;
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.answer === "string" && parsed.answer.trim()) {
          text = parsed.answer.trim();
        }
      } catch {
        /* keep raw */
      }
    }
    if (!text) return json(502, { error: "empty_upstream" });
    return json(200, { text });
  } catch (e) {
    console.error("gemini fetch failed", String(e));
    return json(502, { error: "upstream_error" });
  }
});