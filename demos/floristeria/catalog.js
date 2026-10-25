/* ============================================================================
 * catalog.js — THE ONLY FILE YOU NEED TO EDIT TO CHANGE PRODUCTS OR PRICES
 * ----------------------------------------------------------------------------
 * This one file is read by BOTH the website and the payment server, so prices
 * can never disagree between what a customer sees and what they are charged.
 *
 * PRICES ARE IN CENTS.  4500 = 45,00 EUR.   Never use decimals here.
 *
 * ALL PRICES BELOW ARE PLACEHOLDERS — replace them with the real ones.
 *
 * To change a price ....... edit the number in `prices`
 * To rename a product ..... edit `name.es` / `name.ca` / `name.en`
 * To remove a product ..... delete its whole { ... } block
 * To add a product ........ copy a block, give it a new unique `id`,
 *                           and drop a photo in assets/img/
 * To hide a product ....... add   hidden: true,
 * ==========================================================================*/

const CATALOG = [
  {
    id: 'signature',
    img: 'p-signature.jpg',
    name: { es: 'Ramo Floreta', ca: 'Ram Floreta', en: 'Floreta Signature' },
    prices: { s: 4500, m: 6300, l: 8500 },
  },
  {
    id: 'peonies',
    img: 'p-peonies.jpg',
    name: { es: 'Peonías y rosa de jardín', ca: 'Peònies i rosa de jardí', en: 'Peonies and garden roses' },
    prices: { s: 5500, m: 7500, l: 9800 },
  },
  {
    id: 'red-roses',
    img: 'p-roses-red.jpg',
    name: { es: 'Rosas rojas', ca: 'Roses vermelles', en: 'Red roses' },
    prices: { s: 4900, m: 6900, l: 9500 },
  },
  {
    id: 'daisies',
    img: 'p-white.jpg',
    name: { es: 'Margaritas', ca: 'Margarides', en: 'Daisies' },
    prices: { s: 2800, m: 3800, l: 5200 },
  },
  {
    id: 'dried',
    img: 'p-dried.jpg',
    name: { es: 'Flor seca', ca: 'Flor seca', en: 'Dried flowers' },
    prices: { s: 3500, m: 4800, l: 6500 },
  },
  {
    id: 'garden-roses',
    img: 'p-pink.jpg',
    name: { es: 'Rosa de jardín', ca: 'Rosa de jardí', en: 'Garden roses' },
    prices: { s: 4200, m: 5800, l: 7900 },
  },
  {
    id: 'vase',
    img: 'p-vase.jpg',
    name: { es: 'Composición en jarrón', ca: 'Composició en gerro', en: 'Vase arrangement' },
    prices: { s: 6500, m: 8500, l: 11000 },
  },
  {
    id: 'statement',
    img: 'p-event.jpg',
    name: { es: 'Composición de autor', ca: 'Composició d’autor', en: 'Statement piece' },
    prices: { s: 9500, m: 14000, l: 19000 },
  },
  {
    id: 'pastel',
    img: 'p-neutral.jpg',
    name: { es: 'Ramo pastel', ca: 'Ram pastel', en: 'Pastel bouquet' },
    prices: { s: 3900, m: 5400, l: 7200 },
  },
  {
    id: 'poppies',
    img: 'p-poppies.jpg',
    name: { es: 'Amapolas blancas', ca: 'Roselles blanques', en: 'White poppies' },
    prices: { s: 3200, m: 4400, l: 5900 },
  },
  {
    id: 'plant',
    img: 'p-plants.jpg',
    name: { es: 'Planta de interior', ca: 'Planta d’interior', en: 'Indoor plant' },
    prices: { u: 3400 },
  },
];

/* ----------------------------------------------------------------------------
 * DELIVERY — also placeholders, edit freely. Prices in cents.
 * `freeFrom` = order total (before delivery) above which delivery is free.
 * -------------------------------------------------------------------------*/
const DELIVERY = {
  pickup: { price: 0 },
  gracia: { price: 500, freeFrom: 6000 },
  barcelona: { price: 800, freeFrom: 9000 },
};

/* --------------------------------------------------------------------------*/

const CATALOG_API = {
  CATALOG,
  DELIVERY,

  find(id) {
    return CATALOG.find((p) => p.id === id) || null;
  },

  /** Authoritative price lookup. Returns cents, or null if the pair is invalid. */
  priceOf(id, size) {
    const p = this.find(id);
    if (!p || p.hidden) return null;
    const cents = p.prices[size];
    return typeof cents === 'number' && cents > 0 ? cents : null;
  },

  /** Delivery cost in cents for a zone, given a subtotal in cents. */
  deliveryCost(zone, subtotalCents) {
    const z = DELIVERY[zone];
    if (!z) return null;
    if (z.freeFrom && subtotalCents >= z.freeFrom) return 0;
    return z.price;
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = CATALOG_API;
if (typeof window !== 'undefined') window.CATALOG_API = CATALOG_API;
