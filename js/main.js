(function () {
  "use strict";

  var S = window.SITE;
  var LANGS = ["es", "en"];
  var main = document.getElementById("main");

  /* ── Utilidades ─────────────────────────────────────────── */

  // Crea un elemento: h("p", { class: "x" }, "texto", otroNodo)
  function h(tag, attrs) {
    var el = document.createElement(tag);
    for (var k in attrs || {}) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "html") el.innerHTML = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      [].concat(c).forEach(function (n) {
        if (n === null || n === undefined || n === false) return;
        el.appendChild(typeof n === "string" ? document.createTextNode(n) : n);
      });
    }
    return el;
  }

  function icon(id, cls) {
    return h("span", { class: "icon " + (cls || ""), "aria-hidden": "true", html: '<svg viewBox="0 0 24 24"><use href="#' + id + '"/></svg>' });
  }

  function pick(v, lang) {
    if (v && typeof v === "object" && !Array.isArray(v)) return v[lang] || "";
    return v || "";
  }

  function filled(v) {
    if (Array.isArray(v)) return v.length > 0;
    return typeof v === "string" ? v.trim() !== "" : !!v;
  }

  // "Texto con *énfasis*" → HTML seguro con <em>
  function em(text) {
    var safe = String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return safe.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function waLink(t) {
    return "https://wa.me/" + S.contact.whatsapp + "?text=" + encodeURIComponent(t.whatsappMessage);
  }

  function external(href, t, cls, children) {
    return h("a", { href: href, class: cls, target: "_blank", rel: "noopener" },
      children, h("span", { class: "sr-only" }, " " + t.opensNew));
  }

  // Cabecera de sección: número en mono + etiqueta + título grande
  function head(num, eyebrow, title, id) {
    return h("div", { class: "head" },
      h("p", { class: "label" }, h("span", { class: "label__num" }, num), eyebrow),
      h("h2", { id: id, html: em(title) }));
  }

  function count(i, total) {
    return String(i).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  }

  /* ── Secciones ─────────────────────────────────────────── */

  function hero(t, lang) {
    var x = t.hero;
    var photo = null;
    if (filled(S.photo)) {
      photo = h("figure", { class: "hero__photo" },
        h("img", { src: S.photo, alt: x.photoAlt, width: 480, height: 600, fetchpriority: "high", decoding: "async" }));
    }
    // Detalle de firma: la "Y" se dibuja sola, una vez (ver DESIGN.md §7)
    var mark = h("div", { class: "sig", "aria-hidden": "true", html:
      '<svg viewBox="0 0 120 120"><circle class="sig__ring" cx="60" cy="60" r="56" pathLength="1"/>' +
      '<path class="sig__y" d="M36 30 60 64 84 30M60 64v28" pathLength="1"/></svg>' });

    return h("section", { class: "hero band band--ink", id: "top", "aria-labelledby": "hero-title" },
      h("div", { class: "wrap hero__grid" + (photo ? " has-photo" : "") },
        h("p", { class: "hero__top mono" }, x.topline),
        mark,
        h("div", { class: "stage" }),
        h("div", { class: "hero__text" },
          h("p", { class: "hero__hello" }, x.hello),
          h("h1", { id: "hero-title", html: em(x.line) }),
          h("p", { class: "hero__sub" }, x.sub),
          h("div", { class: "hero__actions" },
            h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), x.whatsapp)),
          proof(t, lang),
          h("p", { class: "hero__email" }, x.emailLabel + " ",
            h("a", { href: "mailto:" + S.contact.email }, S.contact.email))),
        photo,
        h("div", { class: "hero__meta mono" }, h("span", {}, x.place), h("span", {}, x.langs))));
  }

  // Prueba social junto al botón: recorte real de la reseña + miniatura de la web real
  function proof(t, lang) {
    var r = S.caseStudy.review || {};
    var quote = pick(r.short, lang);
    if (!filled(quote)) return null;
    return h("a", { class: "proof", href: "#trabajo" },
      filled(r.thumb) ? h("img", { class: "proof__thumb", src: r.thumb, alt: "", width: 600, height: 1298, decoding: "async" }) : null,
      h("span", { class: "proof__body" },
        h("span", { class: "proof__quote" }, "“" + quote + "”"),
        h("span", { class: "proof__who mono" }, pick(r.author, lang))));
  }

  function work(t, lang) {
    var c = S.caseStudy, w = t.work;

    var review = null;
    var rText = pick(c.review && c.review.text, lang);
    if (filled(rText)) {
      review = h("figure", { class: "review" },
        h("p", { class: "label" }, w.reviewTitle),
        h("blockquote", {}, h("p", {}, "“" + rText + "”")),
        filled(pick(c.review.author, lang)) ? h("figcaption", { class: "mono" }, "— " + pick(c.review.author, lang)) : null);
    }

    var results = null;
    var list = (c.results || []).filter(function (r) { return filled(r.value) && filled(pick(r.label, lang)); });
    if (list.length) {
      results = h("dl", { class: "results" }, list.map(function (r) {
        return h("div", {}, h("dd", {}, r.value), h("dt", {}, pick(r.label, lang)));
      }));
    }

    return h("section", { class: "band band--paper", id: "trabajo", "aria-labelledby": "work-title" },
      h("div", { class: "wrap" },
        head("01", w.eyebrow, w.title, "work-title"),
        h("div", { class: "case" },
          h("div", { class: "case__shots" },
            h("img", { class: "shot shot--desktop", src: c.imageDesktop, alt: w.altDesktop, width: 1200, height: 750, loading: "lazy", decoding: "async" }),
            h("img", { class: "shot shot--mobile", src: c.imageMobile, alt: w.altMobile, width: 600, height: 1298, loading: "lazy", decoding: "async" })),
          h("div", { class: "case__body" },
            h("p", { class: "lead" }, w.intro),
            h("dl", { class: "ba" },
              h("div", {}, h("dt", { class: "mono" }, w.beforeLabel), h("dd", {}, w.before)),
              h("div", { class: "ba__after" }, h("dt", { class: "mono" }, w.afterLabel), h("dd", {}, w.after))),
            external(c.url, t, "link", [w.visit + " — " + c.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), icon("i-arrow")]),
            review,
            results))));
  }

  function demos(t, lang) {
    if (!filled(S.projects)) return null;
    var d = t.demos, n = S.projects.length;
    return h("section", { class: "band band--paper band--tight", id: "demos", "aria-labelledby": "demos-title" },
      h("div", { class: "wrap" },
        head("01b", d.eyebrow, d.title, "demos-title"),
        h("p", { class: "lead lead--wide" }, d.note),
        h("ol", { class: "works", role: "list" }, S.projects.map(function (p, i) {
          return h("li", { class: "work" },
            h("a", { class: "work__img", href: p.demo, target: "_blank", rel: "noopener", tabindex: "-1", "aria-hidden": "true" },
              h("img", { src: p.image, alt: "", width: 800, height: 500, loading: "lazy", decoding: "async" })),
            h("div", { class: "work__body" },
              h("p", { class: "work__count mono" }, count(i + 1, n) + " · " + d.badge),
              h("h3", {}, p.name),
              h("p", { class: "work__line" }, pick(p.line, lang)),
              filled(pick(p.tags, lang)) ? h("ul", { class: "tags", role: "list" }, pick(p.tags, lang).map(function (x) { return h("li", {}, x); })) : null,
              external(p.demo, t, "link", [d.cta, h("span", { class: "sr-only" }, ": " + p.name), icon("i-arrow")])));
        })),
        filled(d.ask) ? h("div", { class: "ask" },
          h("p", { class: "ask__q" }, d.ask),
          h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), d.askBtn)) : null));
  }

  function statement(t) {
    if (!filled(t.statement)) return null;
    return h("section", { class: "band band--ink statement", "aria-label": t.about.eyebrow },
      h("div", { class: "wrap" }, h("p", { html: em(t.statement) })));
  }

  function process(t) {
    var p = t.process, n = p.steps.length;
    return h("section", { class: "band band--paper", id: "proceso", "aria-labelledby": "process-title" },
      h("div", { class: "wrap" },
        head("02", p.eyebrow, p.title, "process-title"),
        h("ol", { class: "steps", role: "list" }, p.steps.map(function (s, i) {
          return h("li", { class: "step" },
            h("p", { class: "step__count mono" }, count(i + 1, n) + " · " + s.stage),
            h("h3", {}, s.title),
            h("p", {}, s.text));
        })),
        h("p", { class: "note" }, icon("i-pin"), h("span", {}, p.google))));
  }

  function prices(t) {
    var p = t.prices;
    function plan(label, from, price, unit, note, items, extra, cls) {
      return h("article", { class: "plan " + (cls || "") },
        h("h3", { class: "label" }, label),
        h("p", { class: "plan__price" }, h("span", { class: "plan__from mono" }, from), price, unit ? h("small", {}, unit) : null),
        h("p", { class: "plan__note" }, note),
        filled(items) ? h("ul", { role: "list" }, items.map(function (i) { return h("li", {}, i); })) : null,
        filled(extra) ? h("p", { class: "plan__extra" }, extra) : null);
    }
    return h("section", { class: "band band--paper", id: "precios", "aria-labelledby": "prices-title" },
      h("div", { class: "wrap" },
        head("03", p.eyebrow, p.title, "prices-title"),
        h("div", { class: "plans" },
          plan(p.mainLabel, p.from, p.mainPrice, "", p.mainNote, p.mainItems, p.mainExtra, "plan--main"),
          plan(p.careLabel, p.from, p.carePrice, p.careUnit, p.careNote, p.careItems, p.careExtra)),
        filled(p.guarantee) ? h("p", { class: "guarantee" }, p.guarantee) : null,
        filled(p.askBtn) ? h("a", { class: "btn btn--wa guarantee__btn", href: waLink(t) }, icon("i-wa"), p.askBtn) : null));
  }

  function faq(t) {
    var f = t.faq;
    if (!f || !filled(f.items)) return null;
    return h("section", { class: "band band--paper", id: "preguntas", "aria-labelledby": "faq-title" },
      h("div", { class: "wrap faq" },
        head("04", f.eyebrow, f.title, "faq-title"),
        h("div", { class: "faq__list" }, f.items.map(function (it, i) {
          return h("details", { class: "faq__item" },
            h("summary", {}, h("span", { class: "mono faq__n" }, String(i + 1).padStart(2, "0")), h("span", { class: "faq__q" }, it.q), h("span", { class: "faq__plus", "aria-hidden": "true" })),
            h("p", {}, it.a));
        }))));
  }

  function about(t) {
    var a = t.about;
    if (!filled(a.paragraphs)) return null;
    return h("section", { class: "band band--paper", id: "estudio", "aria-labelledby": "about-title" },
      h("div", { class: "wrap about" },
        head("05", a.eyebrow, a.title, "about-title"),
        h("div", { class: "about__text" }, a.paragraphs.map(function (p) { return h("p", {}, p); }))));
  }

  function contact(t) {
    var c = t.contact;
    return h("section", { class: "band band--ink contact", id: "contacto", "aria-labelledby": "contact-title" },
      h("div", { class: "wrap" },
        h("p", { class: "label" }, h("span", { class: "label__num" }, "06"), c.eyebrow),
        h("h2", { id: "contact-title", html: em(c.title) }),
        h("p", { class: "lead" }, c.text),
        h("div", { class: "contact__actions" },
          h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), c.whatsapp),
          h("a", { class: "btn btn--line", href: "tel:" + S.contact.phone }, icon("i-phone"),
            h("span", {}, c.call + " · ", h("span", { class: "nowrap" }, S.contact.phoneDisplay)))),
        h("p", { class: "contact__email" },
          h("span", { class: "sr-only" }, c.email + ": "),
          h("a", { href: "mailto:" + S.contact.email }, S.contact.email))));
  }

  /* ── Render e idioma ───────────────────────────────────── */

  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o && o[k]; }, obj);
  }

  function render(lang) {
    var t = S.text[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);

    // Textos fijos del HTML (cabecera, pie)
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = get(t, el.dataset.t); });
    document.querySelectorAll("[data-t-label]").forEach(function (el) { el.setAttribute("aria-label", get(t, el.dataset.tLabel)); });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.getElementById("pill").href = waLink(t);
    document.getElementById("nav-wa").href = waLink(t);

    // Secciones
    [].slice.call(main.children).forEach(function (n) { if (n.tagName !== "NOSCRIPT") n.remove(); });
    [hero(t, lang), work(t, lang), demos(t, lang), statement(t), process(t), prices(t), faq(t), about(t), contact(t)]
      .forEach(function (s) { if (s) main.appendChild(s); });
    attachStage();
  }

  /* ── 3D (Y de cristal): se carga después, nunca bloquea la primera pantalla ── */

  var three = null;
  function attachStage() {
    var stage = main.querySelector(".stage");
    if (!three || !stage) return;
    three.attach(stage);
    main.querySelector(".hero").classList.add("has-3d");
  }
  function canWebGL() {
    try { var c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); }
    catch (e) { return false; }
  }
  function load3D() {
    var conn = navigator.connection;
    if ((conn && conn.saveData) || !canWebGL() || !("IntersectionObserver" in window) || !("ResizeObserver" in window)) return;
    import("/js/hero3d.js?v=" + (document.documentElement.dataset.v || "1"))
      .then(function (m) { three = m.mount(); attachStage(); })
      .catch(function () { /* sin 3D: se queda la Y dibujada */ });
  }
  window.addEventListener("load", function () {
    var later = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };
    later(load3D, { timeout: 2500 });
  });

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try {
      var saved = localStorage.getItem("lang");
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) {}
    return "es";
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      var y = window.scrollY;
      render(lang);
      document.documentElement.classList.add("drawn");
      window.scrollTo(0, y);
    });
  });

  /* ── Menú en móvil ─────────────────────────────────────── */

  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    var t = S.text[document.documentElement.lang] || S.text.es;
    btn.querySelector(".sr-only").textContent = open ? t.nav.close : t.nav.menu;
    if (open) { var first = nav.querySelector("a"); if (first) first.focus(); }
  }
  btn.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); btn.focus(); }
  });

  render(initialLang());
})();
