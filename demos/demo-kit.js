/*
 * demo-kit.js — shared by the demo sites in /demos/.
 * - Adds a thin "demo · fictional business" bar at the top.
 * - Stops calls, WhatsApp, maps, social and booking-platform links from
 *   reaching real numbers or accounts; explains what would happen instead.
 * - For WhatsApp links with a pre-written message, shows that message, so the
 *   visitor sees exactly what the business would receive.
 * Usage: <script src="/demos/demo-kit.js" data-name="Nombre" data-credits="…" defer></script>
 */
(function () {
  "use strict";
  var me = document.currentScript;
  var NAME = (me && me.dataset.name) || "Este negocio";
  var CREDITS = (me && me.dataset.credits) || "";

  var css = document.createElement("style");
  css.textContent =
    ".dk-bar{position:fixed;left:12px;bottom:12px;z-index:60;max-width:min(330px,calc(100% - 96px));background:rgba(20,20,20,.92);color:#eee;font:500 12px/1.4 system-ui,-apple-system,sans-serif;padding:8px 12px;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,.25)}" +
    ".dk-bar.mini{padding:6px 10px;cursor:pointer}.dk-bar.mini .dk-full{display:none}.dk-bar:not(.mini) .dk-chip{display:none}" +
    ".dk-bar button{background:none;border:0;color:#aaa;font:inherit;cursor:pointer;margin-left:6px;padding:0 2px}" +
    ".dk-bar a{color:#ffd27a;font-weight:600}" +
    ".dk-toast{position:fixed;left:50%;bottom:70px;transform:translate(-50%,16px);opacity:0;pointer-events:none;z-index:2147483001;background:#141414;color:#fff;font:500 15px/1.45 system-ui,sans-serif;padding:12px 18px;border-radius:12px;max-width:calc(100% - 32px);box-shadow:0 10px 30px rgba(0,0,0,.3);transition:.25s}" +
    ".dk-toast.on{opacity:1;transform:translate(-50%,0)}" +
    ".dk-modal{position:fixed;inset:0;z-index:2147483002;background:rgba(0,0,0,.55);display:grid;place-items:center;padding:16px}" +
    ".dk-card{background:#fff;color:#1b1b1b;border-radius:16px;max-width:440px;width:100%;padding:20px;font:400 15px/1.5 system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.35)}" +
    ".dk-card h2{font:700 18px/1.3 system-ui,sans-serif;margin:0 0 6px}" +
    ".dk-card p{margin:0 0 12px;color:#555}" +
    ".dk-msg{white-space:pre-wrap;background:#e7f8dd;border-radius:12px 12px 12px 4px;padding:12px 14px;max-height:50vh;overflow:auto;font-size:14px;color:#1b1b1b}" +
    ".dk-card button{margin-top:14px;width:100%;min-height:46px;border:0;border-radius:10px;background:#1f7a4d;color:#fff;font:600 15px system-ui,sans-serif;cursor:pointer}" +
    ".dk-credits{font:400 12px/1.5 system-ui,sans-serif;color:inherit;opacity:.75;text-align:center;padding:14px 16px 90px}" +
    ".dk-credits a{color:inherit}" +
    "@media (prefers-reduced-motion:reduce){.dk-toast{transition:none}}";
  document.head.appendChild(css);

  function ready(fn) { if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  ready(function () {
    var bar = document.createElement("div");
    bar.className = "dk-bar";
    bar.setAttribute("role", "note");
    bar.innerHTML = '<span class="dk-full">Demo de <a href="/">Yehor · Webs para negocios</a>. ' + NAME.replace(/</g, "&lt;") + ' es un negocio ficticio.<button type="button" aria-label="Minimizar aviso">✕</button></span><span class="dk-chip">Demo · negocio ficticio</span>';
    bar.querySelector("button").addEventListener("click", function (e) { e.stopPropagation(); bar.classList.add("mini"); });
    bar.addEventListener("click", function () { if (bar.classList.contains("mini")) bar.classList.remove("mini"); });
    setTimeout(function () { bar.classList.add("mini"); }, 8000);
    document.body.appendChild(bar);
    if (CREDITS) {
      var c = document.createElement("div");
      c.className = "dk-credits";
      c.innerHTML = CREDITS;
      document.body.appendChild(c);
    }
  });

  var toastEl, tt;
  function toast(text) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "dk-toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = text;
    toastEl.classList.add("on");
    clearTimeout(tt);
    tt = setTimeout(function () { toastEl.classList.remove("on"); }, 3600);
  }

  function showWhatsApp(text) {
    var m = document.createElement("div");
    m.className = "dk-modal";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="dk-card"><h2>Así llegaría el mensaje</h2><p>Esto es una demo: no se ha enviado nada. En la web real se abre WhatsApp con este texto ya escrito.</p><div class="dk-msg"></div><button type="button">Entendido</button></div>';
    m.querySelector(".dk-msg").textContent = text;
    function close() { m.remove(); document.removeEventListener("keydown", esc); }
    function esc(e) { if (e.key === "Escape") close(); }
    m.addEventListener("click", function (e) { if (e.target === m) close(); });
    m.querySelector("button").addEventListener("click", close);
    document.addEventListener("keydown", esc);
    document.body.appendChild(m);
    m.querySelector("button").focus();
  }

  // Returns true if the URL was handled (i.e. must not open).
  function intercept(url) {
    if (!url) return false;
    var u = String(url);
    if (/^tel:/i.test(u)) { toast("Demo: en la web real, este botón llama directamente a " + NAME + "."); return true; }
    if (/^mailto:/i.test(u)) { toast("Demo: en la web real, se abre el email para escribir a " + NAME + "."); return true; }
    if (/wa\.me\/|api\.whatsapp\.com|whatsapp:\/\//i.test(u)) {
      var text = "";
      try { text = new URL(u, location.href).searchParams.get("text") || ""; } catch (e) {}
      if (text.length > 60) showWhatsApp(text);
      else toast("Demo: en la web real, se abre WhatsApp para escribir a " + NAME + ".");
      return true;
    }
    if (/google\.[a-z.]+\/maps|maps\.app\.goo\.gl|maps\.google\./i.test(u)) { toast("Demo: en la web real, se abre Google Maps con la ruta hasta el local."); return true; }
    if (/instagram\.com|facebook\.com|tiktok\.com/i.test(u)) { toast("Demo: en la web real, este enlace lleva a las redes sociales del negocio."); return true; }
    if (/fresha\.com|treatwell\.|booksy\.com|thefork\.|eltenedor\./i.test(u)) { toast("Demo: en la web real, se abre la agenda de reservas online del negocio."); return true; }
    if (/google\.[a-z.]+\/search|g\.page|search\.google/i.test(u)) { toast("Demo: en la web real, este enlace lleva a las reseñas de Google del negocio."); return true; }
    return false;
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (intercept(a.getAttribute("href"))) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  var nativeOpen = window.open;
  window.open = function (url) {
    if (intercept(url)) return null;
    return nativeOpen.apply(window, arguments);
  };

  window.DemoKit = { toast: toast, showWhatsApp: showWhatsApp, demo: true };
})();
