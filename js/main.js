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

  function waLink(t) {
    return "https://wa.me/" + S.contact.whatsapp + "?text=" + encodeURIComponent(t.whatsappMessage);
  }

  function external(href, t, cls, children) {
    return h("a", { href: href, class: cls, target: "_blank", rel: "noopener" },
      children, h("span", { class: "sr-only" }, " " + t.opensNew));
  }

  function sectionHead(eyebrow, title, id) {
    return h("div", { class: "head" },
      h("p", { class: "eyebrow" }, eyebrow),
      h("h2", { id: id }, title));
  }

  /* ── Secciones ─────────────────────────────────────────── */

  function hero(t) {
    // Foto opcional: si "photo" está vacío en content.js, el hero va solo con texto.
    var photo = null;
    if (filled(S.photo)) {
      photo = h("div", { class: "hero__photo" });
      var img = h("img", { src: S.photo, alt: t.hero.photoAlt, width: 480, height: 600, fetchpriority: "high", decoding: "async" });
      img.addEventListener("error", function () { photo.remove(); });
      photo.appendChild(img);
    }

    return h("section", { class: "hero wrap" + (photo ? "" : " hero--text"), id: "top", "aria-labelledby": "hero-title" },
      photo,
      h("div", { class: "hero__text" },
        h("p", { class: "eyebrow" }, t.hero.kicker),
        h("h1", { id: "hero-title" }, t.hero.title),
        h("p", { class: "hero__line" }, t.hero.line),
        h("div", { class: "hero__actions" },
          h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), t.hero.whatsapp),
          h("p", { class: "hero__email" }, t.hero.emailLabel + " ",
            h("a", { href: "mailto:" + S.contact.email }, S.contact.email)))));
  }

  function work(t, lang) {
    var c = S.caseStudy, w = t.work;

    var review = null;
    var rText = pick(c.review && c.review.text, lang);
    if (filled(rText)) {
      review = h("figure", { class: "review" },
        h("p", { class: "review__label" }, w.reviewTitle),
        h("blockquote", {}, h("p", {}, "“" + rText + "”")),
        filled(c.review.author) ? h("figcaption", {}, "— " + c.review.author) : null);
    }

    var results = null;
    var list = (c.results || []).filter(function (r) { return filled(r.value) && filled(pick(r.label, lang)); });
    if (list.length) {
      results = h("div", { class: "results" },
        h("h3", { class: "results__title" }, w.resultsTitle),
        h("dl", {}, list.map(function (r) {
          return h("div", {}, h("dt", {}, pick(r.label, lang)), h("dd", {}, r.value));
        })));
    }

    return h("section", { class: "section", id: "trabajo", "aria-labelledby": "work-title" },
      h("div", { class: "wrap" },
        sectionHead(w.eyebrow, w.title, "work-title"),
        h("p", { class: "lead" }, w.intro),
        h("div", { class: "case" },
          h("div", { class: "case__shots" },
            h("img", { class: "shot shot--desktop", src: c.imageDesktop, alt: w.altDesktop, width: 1200, height: 750, loading: "lazy", decoding: "async" }),
            h("img", { class: "shot shot--mobile", src: c.imageMobile, alt: w.altMobile, width: 600, height: 1298, loading: "lazy", decoding: "async" })),
          h("div", { class: "case__body" },
            h("dl", { class: "ba" },
              h("div", { class: "ba__item" }, h("dt", {}, w.beforeLabel), h("dd", {}, w.before)),
              h("div", { class: "ba__item ba__item--after" }, h("dt", {}, w.afterLabel), h("dd", {}, w.after))),
            external(c.url, t, "link-arrow", [w.visit + " · " + c.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), icon("i-arrow")]),
            review,
            results))));
  }

  function demos(t, lang) {
    if (!filled(S.projects)) return null;
    var d = t.demos;
    return h("section", { class: "section section--alt", id: "demos", "aria-labelledby": "demos-title" },
      h("div", { class: "wrap" },
        sectionHead(d.eyebrow, d.title, "demos-title"),
        h("p", { class: "lead" }, d.note),
        h("ul", { class: "grid", role: "list" }, S.projects.map(function (p) {
          return h("li", { class: "card" },
            h("div", { class: "card__img" },
              h("img", { src: p.image, alt: d.altPrefix + " " + p.name, width: 800, height: 500, loading: "lazy", decoding: "async" }),
              h("span", { class: "badge" }, d.badge)),
            h("div", { class: "card__body" },
              h("h3", {}, p.name),
              h("p", {}, pick(p.line, lang)),
              filled(pick(p.tags, lang)) ? h("ul", { class: "tags", role: "list" }, pick(p.tags, lang).map(function (x) { return h("li", {}, x); })) : null,
              external(p.demo, t, "link-arrow", [d.cta, h("span", { class: "sr-only" }, ": " + p.name), icon("i-arrow")])));
        }))));
  }

  function process(t) {
    var p = t.process;
    return h("section", { class: "section", id: "como-trabajo", "aria-labelledby": "process-title" },
      h("div", { class: "wrap" },
        sectionHead(p.eyebrow, p.title, "process-title"),
        h("ol", { class: "steps", role: "list" }, p.steps.map(function (s, i) {
          return h("li", { class: "step" },
            h("span", { class: "step__n", "aria-hidden": "true" }, String(i + 1)),
            h("div", {}, h("h3", {}, s.title), h("p", {}, s.text)));
        })),
        h("p", { class: "note" }, p.google)));
  }

  function prices(t) {
    var p = t.prices;
    function plan(label, price, note, items, cls, extra) {
      return h("div", { class: "plan " + (cls || "") },
        h("h3", { class: "plan__label" }, label),
        h("p", { class: "plan__price" }, price),
        h("p", { class: "plan__note" }, note),
        filled(items) ? h("ul", { role: "list" }, items.map(function (i) { return h("li", {}, i); })) : null,
        filled(extra) ? h("p", { class: "plan__extra" }, extra) : null);
    }
    return h("section", { class: "section section--alt", id: "precios", "aria-labelledby": "prices-title" },
      h("div", { class: "wrap" },
        sectionHead(p.eyebrow, p.title, "prices-title"),
        h("div", { class: "plans" },
          plan(p.mainLabel, p.mainPrice, p.mainNote, p.mainItems, "plan--main", p.mainExtra),
          plan(p.careLabel, p.carePrice, p.careNote, p.careItems)),
        h("p", { class: "guarantee" }, p.guarantee)));
  }

  function about(t) {
    var a = t.about;
    if (!filled(a.paragraphs)) return null;
    return h("section", { class: "section", id: "sobre-mi", "aria-labelledby": "about-title" },
      h("div", { class: "wrap wrap--narrow" },
        sectionHead(a.eyebrow, a.title, "about-title"),
        a.paragraphs.map(function (p) { return h("p", { class: "about__p" }, p); })));
  }

  function contact(t) {
    var c = t.contact;
    return h("section", { class: "section contact", id: "contacto", "aria-labelledby": "contact-title" },
      h("div", { class: "wrap wrap--narrow" },
        sectionHead(c.eyebrow, c.title, "contact-title"),
        h("p", { class: "lead" }, c.text),
        h("div", { class: "contact__actions" },
          h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), c.whatsapp),
          h("a", { class: "btn btn--ghost", href: "tel:" + S.contact.phone }, icon("i-phone"),
            h("span", {}, c.call + " · ", h("span", { class: "nowrap" }, S.contact.phoneDisplay)))),
        h("p", { class: "contact__email" }, icon("i-mail"),
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

    var sticky = document.getElementById("sticky-wa");
    sticky.href = waLink(t);
    sticky.setAttribute("aria-label", t.contact.whatsapp);

    // Secciones
    [].slice.call(main.children).forEach(function (n) { if (n.tagName !== "NOSCRIPT") n.remove(); });
    [hero(t), work(t, lang), demos(t, lang), process(t), prices(t), about(t), contact(t)]
      .forEach(function (s) { if (s) main.appendChild(s); });
  }

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
      window.scrollTo(0, y);
      observeHero();
    });
  });

  /* ── Botón flotante de WhatsApp (solo cuando el del hero ya no se ve) ── */

  var io = null;
  function observeHero() {
    var sticky = document.getElementById("sticky-wa");
    var heroBtn = main.querySelector(".hero .btn--wa");
    var contactSec = document.getElementById("contacto");
    if (!("IntersectionObserver" in window) || !heroBtn) return;
    if (io) io.disconnect();
    var state = { hero: true, contact: false };
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.target === heroBtn) state.hero = e.isIntersecting;
        else state.contact = e.isIntersecting;
      });
      var show = !state.hero && !state.contact;
      sticky.hidden = false;
      sticky.classList.toggle("is-on", show);
      sticky.setAttribute("tabindex", show ? "0" : "-1");
      sticky.setAttribute("aria-hidden", String(!show));
    });
    io.observe(heroBtn);
    if (contactSec) io.observe(contactSec);
  }

  render(initialLang());
  observeHero();
})();
