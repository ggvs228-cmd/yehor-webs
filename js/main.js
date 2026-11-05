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

  /* ── Fondo de líneas (versión sin React de components/ui/background-paths.tsx) ── */

  // Mismas curvas que el componente original (36 por lado, posición 1 y -1), pintadas en un <canvas>:
  // 72 líneas SVG animadas obligan a repintar toda la sección en cada fotograma; el canvas no.
  function pathPoints(i, position) {
    var a = 380 - i * 5 * position, b = 189 + i * 6, c = 312 - i * 5 * position, d = 216 - i * 6,
        e = 152 - i * 5 * position, f = 343 - i * 6, g = 616 - i * 5 * position, k = 470 - i * 6,
        m = 684 - i * 5 * position, n = 875 - i * 6;
    var segs = [[[-a, -b], [-a, -b], [-c, d], [e, f]], [[e, f], [g, k], [m, n], [m, n]]];
    var pts = [], len = [0];
    segs.forEach(function (sg, si) {
      for (var j = si ? 1 : 0; j <= 60; j++) {
        var t = j / 60, u = 1 - t;
        var x = u * u * u * sg[0][0] + 3 * u * u * t * sg[1][0] + 3 * u * t * t * sg[2][0] + t * t * t * sg[3][0];
        var y = u * u * u * sg[0][1] + 3 * u * u * t * sg[1][1] + 3 * u * t * t * sg[2][1] + t * t * t * sg[3][1];
        if (pts.length) { var p = pts[pts.length - 1]; len.push(len[len.length - 1] + Math.hypot(x - p[0], y - p[1])); }
        pts.push([x, y]);
      }
    });
    var total = len[len.length - 1];
    return { pts: pts, len: len.map(function (l) { return l / total; }) };
  }

  var PATHS = null;
  function mountPaths(host) {
    if (!PATHS) {
      PATHS = [];
      [1, -1].forEach(function (pos) {
        for (var i = 0; i < 36; i++) {
          var dur = 20 + Math.random() * 10;
          var g = pathPoints(i, pos);
          PATHS.push({ pts: g.pts, len: g.len, w: 0.5 + i * 0.03, a: Math.min(0.1 + i * 0.03, 1), dur: dur, phase: Math.random() });
        }
      });
    }
    var canvas = document.createElement("canvas");
    host.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var color = getComputedStyle(host).color;
    var W = 0, H = 0, scale = 1, ox = 0, oy = 0, raf = 0, last = 0, on = false;

    function size() {
      var r = host.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = Math.max(W / 696, H / 316); ox = (W - 696 * scale) / 2; oy = (H - 316 * scale) / 2; // "cover", como slice
      draw(performance.now());
    }
    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = color; ctx.lineCap = "round";
      for (var i = 0; i < PATHS.length; i++) {
        var P = PATHS[i], from = 0, to = 1, pulse = 1;
        if (!reduced) {
          var u = ((now / 1000) / P.dur + P.phase) % 1 * 1.55; // tramo de 0,55 que recorre la línea
          from = u - 0.55; to = u;
          pulse = 0.75 + 0.25 * Math.sin((now / 1000) / P.dur * Math.PI * 2 + P.phase * 6.28);
        }
        if (to <= 0 || from >= 1) continue;
        ctx.globalAlpha = P.a * pulse;
        ctx.lineWidth = P.w * scale;
        ctx.beginPath();
        var started = false;
        for (var j = 0; j < P.pts.length; j++) {
          var l = P.len[j];
          if (l < from) continue;
          if (l > to) break;
          var x = ox + P.pts[j][0] * scale, y = oy + P.pts[j][1] * scale;
          if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    function loop(now) {
      if (!on) return;
      if (now - last > 33) { last = now; draw(now); } // ~30 fps es suficiente para líneas lentas
      raf = requestAnimationFrame(loop);
    }
    var ro = "ResizeObserver" in window ? new ResizeObserver(size) : null;
    if (ro) ro.observe(host); else size();
    return {
      play: function (yes) {
        if (reduced) return;
        yes = yes && !document.hidden;
        if (yes && !on) { on = true; raf = requestAnimationFrame(loop); }
        if (!yes) { on = false; cancelAnimationFrame(raf); }
      },
    };
  }

  // Título que sube letra a letra (como el componente). El texto real queda para lectores de pantalla.
  function riseTitle(text) {
    var html = "", n = 0;
    String(text).split(/(\*[^*]+\*)/).forEach(function (seg) {
      if (!seg) return;
      var italic = /^\*.*\*$/.test(seg);
      var words = (italic ? seg.slice(1, -1) : seg).split(/(\s+)/).map(function (w) {
        if (/^\s+$/.test(w)) return " ";
        return '<span class="rise__w">' + w.split("").map(function (ch) {
          var safe = ch.replace(/&/g, "&amp;").replace(/</g, "&lt;");
          return '<span class="rise__l" style="--i:' + (n++) + '">' + safe + "</span>";
        }).join("") + "</span>";
      }).join("");
      html += italic ? "<em>" + words + "</em>" : words;
    });
    return '<span aria-hidden="true">' + html + '</span><span class="sr-only">' + String(text).replace(/\*/g, "").replace(/</g, "&lt;") + "</span>";
  }

  function contact(t) {
    var c = t.contact;
    return h("section", { class: "band band--ink contact", id: "contacto", "aria-labelledby": "contact-title" },
      h("div", { class: "paths", "aria-hidden": "true" }),
      h("div", { class: "wrap" },
        h("p", { class: "label" }, h("span", { class: "label__num" }, "06"), c.eyebrow),
        h("h2", { id: "contact-title", class: "rise", html: riseTitle(c.title) }),
        h("p", { class: "lead" }, c.text),
        h("div", { class: "contact__actions" },
          h("span", { class: "glass" },
            h("a", { class: "btn btn--wa", href: waLink(t) }, icon("i-wa"), c.whatsapp, h("span", { class: "btn__arrow", "aria-hidden": "true" }, "→"))),
          h("a", { class: "btn btn--line", href: "tel:" + S.contact.phone }, icon("i-phone"),
            h("span", {}, c.call + " · ", h("span", { class: "nowrap" }, S.contact.phoneDisplay)))),
        h("p", { class: "contact__email" },
          h("span", { class: "sr-only" }, c.email + ": "),
          h("a", { href: "mailto:" + S.contact.email }, S.contact.email))));
  }

  // Las letras suben una vez al entrar; las líneas solo se animan mientras se ven
  var contactIO = null, pathsCtl = null;
  function watchContact() {
    var sec = main.querySelector(".contact");
    if (!sec) return;
    var host = sec.querySelector(".paths");
    if (pathsCtl) pathsCtl.play(false); // al cambiar de idioma se rehace la sección: para el bucle anterior
    pathsCtl = host ? mountPaths(host) : null;
    if (!("IntersectionObserver" in window)) { sec.classList.add("is-in"); if (pathsCtl) pathsCtl.play(true); return; }
    if (contactIO) contactIO.disconnect();
    contactIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (pathsCtl) pathsCtl.play(en.isIntersecting);
        if (en.intersectionRatio > 0.2) sec.classList.add("is-in");
      });
    }, { threshold: [0, 0.2] });
    contactIO.observe(sec);
  }
  document.addEventListener("visibilitychange", function () {
    var sec = main.querySelector(".contact.is-in");
    if (pathsCtl) pathsCtl.play(!document.hidden && !!sec && sec.getBoundingClientRect().top < window.innerHeight);
  });

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
    watchContact();
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
