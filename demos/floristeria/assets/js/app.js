/* Floreta — app.js
 * Catalogue rendering, cart, i18n, WhatsApp checkout and Stripe checkout. */

(function () {
  'use strict';

  /* ========================================================================
   * CONFIG — the only settings you are likely to change.
   * ======================================================================*/
  const CONFIG = {
    // WhatsApp number in international format, digits only, no + and no spaces.
    // 600 000 000 (Spain, +34) -> 34600000000
    whatsapp: '34600000000',
    // Shop phone shown under "Contacto" (same number as WhatsApp).
    phone: '+34600000000',
    // Orders placed after this hour can no longer go out the same day.
    sameDayCutoffHour: 17,
  };

  const LOCALES = { es: 'es-ES', ca: 'ca-ES', en: 'en-IE' };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* ========================================================================
   * Language
   * ======================================================================*/
  const SUPPORTED = ['es', 'ca', 'en'];

  function detectLang() {
    const saved = safeGet('fl_lang');
    if (SUPPORTED.includes(saved)) return saved;
    for (const l of navigator.languages || [navigator.language || '']) {
      const two = String(l).slice(0, 2).toLowerCase();
      if (SUPPORTED.includes(two)) return two;
    }
    return 'es';
  }

  let lang = detectLang();
  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.es && I18N.es[key]) || key;

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('.lang button').forEach((b) => {
      b.setAttribute('aria-current', String(b.dataset.lang === lang));
    });
    document.title = lang === 'en'
      ? 'Floreta — Flower shop in Poblenou, Barcelona'
      : lang === 'ca'
        ? 'Floreta — Floristeria al Poblenou, Barcelona'
        : 'Floreta — Floristería en Poblenou, Barcelona';
    renderGrid();
    renderCart();
    renderOpenState();
    refreshWaLinks();
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    safeSet('fl_lang', next);
    applyLang();
  }

  /* ========================================================================
   * Money
   * ======================================================================*/
  function money(cents) {
    return new Intl.NumberFormat(LOCALES[lang] || 'es-ES', {
      style: 'currency', currency: 'EUR', minimumFractionDigits: 2,
    }).format(cents / 100);
  }

  /* ========================================================================
   * Storage — never let a private-mode browser break the page.
   * ======================================================================*/
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ========================================================================
   * Cart  — [{ id, size, qty }]
   * ======================================================================*/
  let cart = loadCart();

  function loadCart() {
    try {
      const raw = JSON.parse(safeGet('fl_cart') || '[]');
      if (!Array.isArray(raw)) return [];
      // Drop anything that no longer exists in the catalogue.
      return raw
        .filter((l) => l && CATALOG_API.priceOf(l.id, l.size) !== null)
        .map((l) => ({ id: l.id, size: l.size, qty: Math.max(1, Math.min(99, parseInt(l.qty, 10) || 1)) }));
    } catch (e) { return []; }
  }

  function saveCart() { safeSet('fl_cart', JSON.stringify(cart)); }

  function addToCart(id, size) {
    if (CATALOG_API.priceOf(id, size) === null) return;
    const line = cart.find((l) => l.id === id && l.size === size);
    if (line) line.qty = Math.min(99, line.qty + 1);
    else cart.push({ id, size, qty: 1 });
    saveCart();
    renderCart();
  }

  function setQty(i, delta) {
    const line = cart[i];
    if (!line) return;
    line.qty += delta;
    if (line.qty < 1) cart.splice(i, 1);
    saveCart();
    renderCart();
  }

  function removeLine(i) { cart.splice(i, 1); saveCart(); renderCart(); }

  const cartCount = () => cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = () => cart.reduce((n, l) => n + CATALOG_API.priceOf(l.id, l.size) * l.qty, 0);

  function currentZone() {
    const mode = $('input[name="mode"]:checked');
    if (mode && mode.value === 'pickup') return 'pickup';
    return $('#zone') ? $('#zone').value : 'gracia';
  }

  const deliveryCost = () => CATALOG_API.deliveryCost(currentZone(), subtotal()) || 0;

  /* ========================================================================
   * Product grid
   * ======================================================================*/
  const selectedSize = {}; // { productId: size }

  function sizesOf(p) { return Object.keys(p.prices); }

  function renderGrid() {
    const grid = $('#grid');
    if (!grid) return;
    grid.innerHTML = '';

    CATALOG_API.CATALOG.filter((p) => !p.hidden).forEach((p) => {
      const sizes = sizesOf(p);
      if (!selectedSize[p.id] || !sizes.includes(selectedSize[p.id])) {
        // Default to the middle size when there is one, else the first.
        selectedSize[p.id] = sizes.includes('m') ? 'm' : sizes[0];
      }

      const card = document.createElement('article');
      card.className = 'card';

      const media = document.createElement('div');
      media.className = 'card-media';
      const img = document.createElement('img');
      img.src = 'assets/img/' + p.img;
      img.alt = p.name[lang] || p.name.es;
      img.loading = 'lazy';
      img.width = 1000; img.height = 1250;
      media.appendChild(img);
      card.appendChild(media);

      const h3 = document.createElement('h3');
      h3.className = 'card-name';
      h3.textContent = p.name[lang] || p.name.es;
      card.appendChild(h3);

      // Size pills — hidden when the product only has one size.
      if (sizes.length > 1) {
        const row = document.createElement('div');
        row.className = 'sizes';
        sizes.forEach((s) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'size';
          b.textContent = t('shop.size.' + s);
          b.setAttribute('aria-pressed', String(selectedSize[p.id] === s));
          b.addEventListener('click', () => {
            selectedSize[p.id] = s;
            $$('.size', row).forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
            price.textContent = money(p.prices[s]);
          });
          row.appendChild(b);
        });
        card.appendChild(row);
      }

      const buy = document.createElement('div');
      buy.className = 'card-buy';
      const price = document.createElement('span');
      price.className = 'card-price';
      price.textContent = money(p.prices[selectedSize[p.id]]);
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'add';
      add.textContent = t('shop.add');
      add.addEventListener('click', () => {
        addToCart(p.id, selectedSize[p.id]);
        add.textContent = t('shop.added');
        add.classList.add('done');
        toast(t('shop.added') + ' · ' + (p.name[lang] || p.name.es));
        setTimeout(() => { add.textContent = t('shop.add'); add.classList.remove('done'); }, 1400);
      });
      buy.append(price, add);
      card.appendChild(buy);

      grid.appendChild(card);
    });
  }

  /* ========================================================================
   * Reviews — real quotes from the Google listing, rendered once.
   * They are not translated, so this does not re-run on a language switch.
   * ======================================================================*/
  function renderReviews() {
    const box = $('#revList');
    if (!box || typeof REVIEWS === 'undefined') return;
    box.innerHTML = '';
    REVIEWS.forEach((r) => {
      const fig = document.createElement('figure');
      fig.className = 'quote';
      const q = document.createElement('blockquote');
      q.textContent = r.text;
      const c = document.createElement('figcaption');
      c.textContent = r.author;
      fig.append(q, c);
      box.appendChild(fig);
    });
  }

  /* ========================================================================
   * Cart drawer
   * ======================================================================*/
  function renderCart() {
    const n = cartCount();
    const badge = $('#cartCount');
    badge.textContent = String(n);
    badge.hidden = n === 0;

    const body = $('#cartBody');
    const foot = $('#cartFoot');
    body.innerHTML = '';

    if (!cart.length) {
      foot.hidden = true;
      const box = document.createElement('div');
      box.className = 'empty';
      const p = document.createElement('p');
      p.textContent = t('cart.empty');
      const a = document.createElement('button');
      a.type = 'button';
      a.className = 'btn btn-solid';
      a.textContent = t('cart.empty.cta');
      a.addEventListener('click', () => { closeCart(); location.hash = '#shop'; });
      box.append(p, a);
      body.appendChild(box);
      return;
    }

    foot.hidden = false;

    cart.forEach((line, i) => {
      const p = CATALOG_API.find(line.id);
      const cents = CATALOG_API.priceOf(line.id, line.size);
      const el = document.createElement('div');
      el.className = 'line';

      const img = document.createElement('img');
      img.className = 'line-img';
      img.src = 'assets/img/' + p.img;
      img.alt = '';
      img.loading = 'lazy';

      const mid = document.createElement('div');
      const nm = document.createElement('p');
      nm.className = 'line-n';
      nm.textContent = p.name[lang] || p.name.es;
      const sz = document.createElement('p');
      sz.className = 'line-s';
      sz.textContent = t('shop.size.' + line.size) + ' · ' + money(cents);
      const qty = document.createElement('div');
      qty.className = 'qty';
      const minus = document.createElement('button');
      minus.type = 'button'; minus.textContent = '−';
      minus.setAttribute('aria-label', '−');
      minus.addEventListener('click', () => setQty(i, -1));
      const num = document.createElement('span');
      num.textContent = String(line.qty);
      const plus = document.createElement('button');
      plus.type = 'button'; plus.textContent = '+';
      plus.setAttribute('aria-label', '+');
      plus.addEventListener('click', () => setQty(i, 1));
      qty.append(minus, num, plus);
      mid.append(nm, sz, qty);

      const right = document.createElement('div');
      right.className = 'line-r';
      const lp = document.createElement('p');
      lp.className = 'line-p';
      lp.textContent = money(cents * line.qty);
      const rm = document.createElement('button');
      rm.type = 'button'; rm.className = 'rm';
      rm.textContent = t('cart.remove');
      rm.addEventListener('click', () => removeLine(i));
      right.append(lp, rm);

      el.append(img, mid, right);
      body.appendChild(el);
    });

    $('#tSub').textContent = money(subtotal());
    $('#tTot').textContent = money(subtotal());
    renderTotals();
  }

  function renderTotals() {
    if (!$('#coSub')) return;
    const sub = subtotal();
    const del = deliveryCost();
    const isPickup = currentZone() === 'pickup';
    $('#coSub').textContent = money(sub);
    $('#coDelRow').hidden = isPickup;
    $('#coDel').textContent = del === 0 ? t('cart.free') : money(del);
    $('#coTot').textContent = money(sub + del);
  }

  function openCart() {
    $('#drawer').classList.add('open');
    $('#drawer').setAttribute('aria-hidden', 'false');
    $('#scrim').hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    $('#drawer').classList.remove('open');
    $('#drawer').setAttribute('aria-hidden', 'true');
    if ($('#modal').getAttribute('aria-hidden') === 'true') {
      $('#scrim').hidden = true;
      document.body.style.overflow = '';
    }
  }

  /* ========================================================================
   * Checkout modal
   * ======================================================================*/
  function openCheckout() {
    if (!cart.length) return;
    closeCart();
    $('#modal').setAttribute('aria-hidden', 'false');
    $('#scrim').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#coErr').hidden = true;

    // Earliest deliverable day: today, or tomorrow once the cutoff has passed.
    const d = new Date();
    if (d.getHours() >= CONFIG.sameDayCutoffHour) d.setDate(d.getDate() + 1);
    const iso = toISODate(d);
    const dateInput = $('#cDate');
    dateInput.min = toISODate(new Date());
    if (!dateInput.value || dateInput.value < iso) dateInput.value = iso;

    renderTotals();
    setTimeout(() => $('#cName').focus(), 60);
  }

  function closeCheckout() {
    $('#modal').setAttribute('aria-hidden', 'true');
    $('#scrim').hidden = true;
    document.body.style.overflow = '';
  }

  function toISODate(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /** Returns the form data, or null when something required is missing. */
  function readForm() {
    const isPickup = currentZone() === 'pickup';
    const fields = [
      ['#cName', true],
      ['#cPhone', true],
      ['#cEmail', true],
      ['#cAddr', !isPickup],
      ['#cDate', true],
    ];

    let bad = null;
    fields.forEach(([sel, required]) => {
      const el = $(sel);
      const empty = required && !el.value.trim();
      const badEmail = sel === '#cEmail' && el.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
      const invalid = empty || badEmail;
      el.classList.toggle('bad', !!invalid);
      if (invalid && !bad) bad = el;
    });

    if (bad) {
      $('#coErr').textContent = t('co.required');
      $('#coErr').hidden = false;
      bad.focus();
      return null;
    }
    $('#coErr').hidden = true;

    return {
      name: $('#cName').value.trim(),
      phone: $('#cPhone').value.trim(),
      email: $('#cEmail').value.trim(),
      address: isPickup ? '' : $('#cAddr').value.trim(),
      date: $('#cDate').value,
      slot: $('#cTime').value,
      cardmsg: $('#cCard').value.trim(),
      notes: $('#cNotes').value.trim(),
      mode: isPickup ? 'pickup' : 'delivery',
      zone: currentZone(),
    };
  }

  /* ========================================================================
   * WhatsApp order
   * ======================================================================*/
  function slotLabel(slot) { return t('co.time.' + slot); }

  function buildWaMessage(f) {
    const L = [];
    L.push(t('wa.greeting'));
    L.push('');
    L.push('*' + t('wa.order') + '*');
    cart.forEach((line) => {
      const p = CATALOG_API.find(line.id);
      const cents = CATALOG_API.priceOf(line.id, line.size);
      const sizeTxt = Object.keys(p.prices).length > 1 ? ' (' + t('shop.size.' + line.size) + ')' : '';
      L.push('• ' + line.qty + '× ' + (p.name[lang] || p.name.es) + sizeTxt + ' — ' + money(cents * line.qty));
    });
    L.push('');
    const sub = subtotal();
    const del = deliveryCost();
    L.push(t('wa.subtotal') + ': ' + money(sub));
    if (f.mode === 'delivery') L.push(t('wa.delivery') + ': ' + (del === 0 ? t('cart.free') : money(del)));
    L.push('*' + t('wa.total') + ': ' + money(sub + del) + '*');
    L.push('');
    L.push(t('wa.for') + ': ' + f.name + ' — ' + f.phone);
    L.push(f.mode === 'pickup' ? t('wa.pickupAt') : t('wa.deliverTo') + ': ' + f.address);
    L.push(t('wa.date') + ': ' + f.date + ' · ' + slotLabel(f.slot));
    if (f.cardmsg) L.push(t('wa.cardMsg') + ': "' + f.cardmsg + '"');
    if (f.notes) L.push(t('wa.notes') + ': ' + f.notes);
    return L.join('\n');
  }

  const waUrl = (text) =>
    'https://wa.me/' + CONFIG.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');

  function refreshWaLinks() {
    const hello = {
      es: '¡Hola! Me gustaría preguntar por unas flores.',
      ca: 'Hola! M’agradaria preguntar per unes flors.',
      en: 'Hi! I would like to ask about some flowers.',
    }[lang];
    ['#heroWa', '#waLink', '#waFoot', '#fabWa'].forEach((sel) => {
      const el = $(sel);
      if (el) el.href = waUrl(hello);
    });
  }

  /* ========================================================================
   * Stripe (only active when the /api backend is deployed and configured)
   * ======================================================================*/
  let stripeEnabled = false;

  async function probeStripe() {
    if (window.DemoKit) { stripeEnabled = true; $('#payCard').hidden = false; $('#orRow').hidden = false; return; }
    try {
      const r = await fetch('api/config', { headers: { accept: 'application/json' } });
      if (!r.ok) return;
      const j = await r.json();
      stripeEnabled = !!j.stripeEnabled;
    } catch (e) {
      stripeEnabled = false; // static hosting (e.g. GitHub Pages) — WhatsApp only
    }
    $('#payCard').hidden = !stripeEnabled;
    $('#orRow').hidden = !stripeEnabled;
  }

  async function payByCard() {
    const f = readForm();
    if (!f) return;
    if (window.DemoKit) { window.DemoKit.toast('Demo: en la web real, aquí se abre el pago seguro con tarjeta, Apple Pay o Google Pay (Stripe).'); return; }
    const btn = $('#payCard');
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = t('co.paying');
    try {
      const r = await fetch('api/create-checkout-session', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((l) => ({ id: l.id, size: l.size, qty: l.qty })),
          mode: f.mode,
          zone: f.zone,
          locale: lang,
          customer: f,
        }),
      });
      const j = await r.json();
      if (!r.ok || !j.url) throw new Error(j.error || 'no url');
      safeSet('fl_pending', '1');
      window.location.assign(j.url);
    } catch (e) {
      btn.disabled = false;
      btn.textContent = label;
      $('#coErr').textContent = t('co.err');
      $('#coErr').hidden = false;
    }
  }

  /* ========================================================================
   * Open / closed  (Mon–Sat 12:00–21:00, Europe/Madrid)
   * ======================================================================*/
  function renderOpenState() {
    const dot = $('#openDot');
    const txt = $('#openTxt');
    if (!dot || !txt) return;
    let open = false;
    try {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', hour12: false,
      }).formatToParts(new Date());
      const wd = parts.find((p) => p.type === 'weekday').value;
      const hr = parseInt(parts.find((p) => p.type === 'hour').value, 10);
      open = wd !== 'Sun' && hr >= 12 && hr < 21;
    } catch (e) { open = false; }
    dot.className = 'dot ' + (open ? 'on' : 'off');
    txt.textContent = open ? t('hero.open') : t('hero.closed');
  }

  /* ========================================================================
   * Toast
   * ======================================================================*/
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ========================================================================
   * Wire everything up
   * ======================================================================*/
  function init() {
    $$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

    $('#cartBtn').addEventListener('click', openCart);
    $('#closeCart').addEventListener('click', closeCart);
    $('#scrim').addEventListener('click', () => { closeCheckout(); closeCart(); });
    $('#toCheckout').addEventListener('click', openCheckout);
    $('#closeCo').addEventListener('click', closeCheckout);
    $('#payWa').addEventListener('click', () => {
      const f = readForm();
      if (!f) return;
      window.open(waUrl(buildWaMessage(f)), '_blank', 'noopener');
    });
    $('#payCard').addEventListener('click', payByCard);

    // Clear the red outline as soon as the customer starts fixing a field.
    ['#cName', '#cPhone', '#cEmail', '#cAddr', '#cDate'].forEach((sel) => {
      const el = $(sel);
      el.addEventListener('input', () => {
        el.classList.remove('bad');
        if (!$('.bad')) $('#coErr').hidden = true;
      });
    });

    // Delivery vs pickup toggles the address block and the delivery line.
    $$('input[name="mode"]').forEach((r) => r.addEventListener('change', () => {
      const pickup = currentZone() === 'pickup';
      $('#zoneWrap').hidden = pickup;
      $('#addrFs').hidden = pickup;
      renderTotals();
    }));
    $('#zone').addEventListener('change', renderTotals);

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if ($('#modal').getAttribute('aria-hidden') === 'false') closeCheckout();
      else if ($('#drawer').classList.contains('open')) closeCart();
    });

    // Sticky header hairline
    const hdr = $('#hdr');
    const onScroll = () => hdr.classList.toggle('stuck', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Returning from a successful Stripe payment
    if (new URLSearchParams(location.search).get('paid') === '1') {
      cart = [];
      saveCart();
      history.replaceState(null, '', location.pathname);
    }

    applyLang();
    renderReviews();
    probeStripe();
    setInterval(renderOpenState, 60000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
