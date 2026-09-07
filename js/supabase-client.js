// ============================================================
// NOVE STOR - CloudDB layer (Supabase) with local fallback
// The store keeps working 100% even if the cloud is unreachable.
// ============================================================
(function () {
  const CFG = (typeof NOVE_BACKEND !== 'undefined') ? NOVE_BACKEND : { enabled: false, url: '', anonKey: '' };

  const CloudDB = {
    enabled: !!(CFG.enabled && CFG.url && CFG.anonKey),

    tableName(k) {
      switch (k) {
        case 'products': return 'products';
        case 'orders': return 'orders';
        case 'categories': return 'categories';
        case 'coupons': return 'coupons';
        case 'settings': return 'store_settings';
        case 'users': return 'profiles';
        default: return null;
      }
    },
    isCloudKey(k) {
      return !!this.tableName(k);
    },
    tryInit() {
      try {
        if (this.enabled && typeof createClient === 'function' && !this.client) {
          this.client = createClient(CFG.url, CFG.anonKey);
        }
      } catch (e) {}
    },

    async load(key) {
      return new Promise(async resolve => {
        try {
          this.tryInit();
          if (!this.enabled || !this.client) { resolve(null); return; }
          const t = this.tableName(key);
          if (!t) { resolve(null); return; }
          let q = this.client.from(t).select('*');
          if (key === 'products') q = q.neq('status', '__deleted__');
          const { data, error } = await q.order('created_at', { ascending: true });
          if (error) throw error;
          resolve(data && data.length ? data : null);
        } catch (e) { resolve(null); }
      });
    },

    async save(key, rows) {
      try {
        this.tryInit();
        if (!this.enabled || !this.client || !rows) return;
        const t = this.tableName(key);
        if (!t) return;
        const prep = rows.map(r => {
          const o = Object.assign({}, r);
          if (key === 'products') {
            if (!o.created_at) o.created_at = new Date().toISOString();
          }
          return o;
        });
        if (key === 'products') {
          const { error } = await this.client.from(t).upsert(prep, { onConflict: 'id' });
          if (error) throw error;
        } else if (key === 'orders') {
          const { error } = await this.client.from(t).insert(prep);
          if (error) throw error;
        } else if (key === 'coupons') {
          const { error } = await this.client.from(t).upsert(prep, { onConflict: 'code' });
          if (error) throw error;
        } else if (key === 'categories') {
          const { error } = await this.client.from(t).upsert(prep, { onConflict: 'value' });
          if (error) throw error;
        } else if (key === 'settings') {
          const { error } = await this.client.from(t).upsert(prep, { onConflict: 'id' });
          if (error) throw error;
        }
      } catch (e) {}
    },

    async currentProfile() {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return null;
        const me = await this.client.auth.getUser();
        const uid = me && me.data && me.data.user ? me.data.user.id : null;
        if (!uid) return null;
        const { data } = await this.client.from('profiles').select('*').eq('id', uid).maybeSingle();
        return data || null;
      } catch (e) { return null; }
    },

    // ---- OWNER SIGN-IN (real auth, enforces RLS writes) ----
    async signIn(email, password) {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return { ok: false };
        const { data, error } = await this.client.auth.signInWithPassword({ email: String(email||'').trim().toLowerCase(), password: String(password||'') });
        if (error) return { ok: false, error: error.message };
        return { ok: true };
      } catch (e) { return { ok: false, error: String(e) }; }
    },
    async signOut() {
      try {
        this.tryInit();
        if (this.enabled && this.client) await this.client.auth.signOut();
      } catch (e) {}
    },
    async isAuthed() {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return false;
        const me = await this.client.auth.getUser();
        return !!(me.data && me.data.user);
      } catch (e) { return false; }
    },

    // ---- REAL KICK ----
    async isBlocked(ip) {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return false;
        const { data, error } = await this.client.rpc('is_ip_blocked', { ip_text: ip || '' });
        if (error) return false;
        return !!data;
      } catch (e) { return false; }
    },
    async checkEject() {
      try {
        if (!this.enabled) return;
        const ip = await (window.APP && APP.getClientIP ? APP.getClientIP() : Promise.resolve(''));
        const blocked = await this.isBlocked(ip);
        if (blocked) {
          try {
            localStorage.removeItem('nove_user');
            sessionStorage.removeItem('nove_admin_unlocked');
            if (window.APP) APP.currentUser = null;
          } catch (e) {}
          const content = document.getElementById('admin-content');
          if (content) {
            content.innerHTML = `<div style="min-height:80vh; display:flex; align-items:center; justify-content:center; padding:2rem; text-align:center;">
              <div>
                <h1 style="font-size:4rem;">\u{1F6AB}</h1>
                <h1 style="color:#ff5f57;">${window.APP ? APP.t('intruder_blocked') : 'You are blocked'}</h1>
                <p style="color:#999;">${(window.APP ? APP.t('intruder_blocked_desc') : '')}</p>
              </div>
            </div>`;
            return true;
          }
          return true;
        }
        return false;
      } catch (e) { return false; }
    },
    async blockIP(ip, reason) {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return;
        await this.client.rpc('block_ip', { ip_text: ip || '', reason_text: reason || 'tampering', minutes: 1440 });
      } catch (e) {}
    },
    async unblockIP(ip) {
      try {
        this.tryInit();
        if (!this.enabled || !this.client) return;
        await this.client.rpc('unblock_ip', { ip_text: ip || '' });
      } catch (e) {}
    }
  };

  window.CloudDB = CloudDB;
})();