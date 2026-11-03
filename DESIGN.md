# Yehor · Webs para negocios — design brief

The art-director decisions for this site. Change copy in `js/content.js`; change
the look by editing the tokens at the top of `css/styles.css`. Anything new must
serve the three words below.

---

## 1. The client: Yehor himself

**Who:** one person, from Ukraine, in Barcelona for 4+ years. Speaks Spanish,
Catalan, English, Ukrainian and Russian. Finds clients by walking a street,
researching shops and sending a WhatsApp. First client: Nude Beauty Studio
(Eixample), which went from Instagram-only to a site in 3 languages.

**Who the site must convince:** the owner of a small beauty studio (nails, lashes,
brows, facials) or another owner-run shop who has just tapped his link on
WhatsApp or Instagram, on her phone, between two clients. Ten seconds to trust.

**What makes him different from an agency or a template:**
- You talk to the person who builds it, start to finish.
- He shows up at the door and on WhatsApp, not with a sales form.
- Multilingual by default, which matters for a city full of tourists and expats.
- Demos that actually work (cart, booking, call buttons), not mock-ups.

**Three words:** **cercano · preciso · de barrio**
(warm · precise · local). Every choice below has to pass this test.

| Word | What it means on the page | What it rules out |
|---|---|---|
| Cercano / warm | First person, short sentences, WhatsApp everywhere, a real phone number | Agency "we", stock photos, contact forms |
| Preciso / precise | Strict grid of numbers and labels, exact prices, nothing vague | "Solutions", "packages", fuzzy "contact us for pricing" |
| De barrio / local | Barcelona street, walked business by business; plain Spanish | Tech jargon, neon, code, 3D for its own sake |

## 2. Moodboard: ideas taken, not layouts

Prime reference: **byholm.co** (HOLM, a one-person studio). Ideas taken from it:
- A one-person studio told as a story: work → process → studio → contact.
- **"Projects start at $2.5K."** as a quiet mono line at the very top. Here: *"Webs desde 600 €."*
- Numbered navigation `01 Home / 02 Work…` and mono counters (`01 / 03`).
- Process named as stages of making an object ("The line, the frame, the material…").
- **"One person, start to finish."** as the studio headline.
- A single persistent pill button ("Book a call"). Here: "Escríbeme" → WhatsApp.
- Dark, cinematic hero; italic serif statements.

Taken in a light form: the 3D. Byholm's whole site is one scroll-driven WebGL
world (several MB). Here only the hero has a real 3D object (see 7), loaded
*after* the page is visible, so the first screen stays instant on a phone.
Decided with Yehor: "3D hero only", not a full 3D world.

Other directions, from print rather than websites, to look at when extending:
Barcelona shop signage and hand-painted "rótulos", the *panot* pavement tile,
1960s Spanish bar menus, editorial magazine contents pages (big numbers + small
labels). Before adding anything new, collect 10–15 references on Awwwards,
Godly, Siteinspire, Land-book and Behance (search "studio portfolio",
"editorial", "restaurant branding") and note *ideas*, not layouts.

## 3. Typography: the biggest lever

| Role | Font | Use |
|---|---|---|
| Display | **Instrument Serif** (regular + italic) | Headlines, prices, statements. Huge. Italic for the one emotional word. |
| Body | **Geist** (300–700) | All reading text, buttons. Quiet. |
| Labels | **IBM Plex Mono** 400 | Numbers, counters, eyebrows, tags. Small, uppercase, tracked. |

All three are self-hosted from `/fonts` (latin subset, ~96 KB total), so
nothing is requested from Google and the page renders fast.

Scale (mobile → desktop, via `clamp`): hero 56 → 132 px, section titles
40 → 88 px, prices 72 → 160 px, body 17 px, labels 12 px. Keep the contrast
dramatic: one giant line next to small text, never three medium sizes.

## 4. Palette: from the place

Barcelona at night and the brick of the Eixample, not a brand-kit:

| Token | Hex | From |
|---|---|---|
| `--ink` | `#0D0C0B` | Street at night, the dark hero |
| `--bone` | `#EFEAE2` | Plaster walls, old paper menus |
| `--clay` | `#C8512B` | Terracotta roof tiles / Eixample brick. **The one accent.** |
| `--stone` | `#8C857C` | *Panot* pavement grey, for secondary text |

One accent, used boldly (prices, the drawn mark, focus rings), not sprinkled.
WhatsApp green appears only on WhatsApp buttons, where it tells people what the
button does.

## 5. Photos are the design

Right now the "photos" are screenshots of real and demo work: always shown
large, cropped from the top, same corner radius, on the same background.

**Your homework (highest-value upgrade):** a real portrait. Shot by someone
else, eye level, chest up, daylight, a slight real smile, plain wall. When it
exists, it goes in `img/yehor.jpg` and `photo` in `content.js`. Then shoot
Nude Beauty properly too (the studio, the chair, the owner if she agrees) for
the case study.

## 6. Breaking the grid

- Hero: headline over the full width, the drawn mark offset to the right.
- Work list: numbered rows that alternate image left/right (asymmetry).
- Prices: oversized numerals, the number *is* the layout.
- One unexpected section: the studio statement in giant italic on dark.

## 7. One signature detail

**A dark-chrome Y inside a clay ring, in real 3D** (`js/hero3d.js`, Three.js r170
self-hosted in `js/vendor/`).

- Drag it with a finger or the mouse to turn it (vertical swipes still scroll the
  page); it tilts a little as you scroll and spins slowly when left alone.
- Lit like a product photo: a dark room with light strips and a warm fill, so
  highlights slide over the chrome as it turns. Dark chrome was chosen over
  see-through glass: glass on a black background reads as flat plastic, and
  it is the most expensive effect for a phone to draw.
- Loads after the page (`requestIdleCallback`), skipped with Data Saver or no
  WebGL, pauses when off-screen or in a background tab. Cost: ~171 KB gzipped.
- While it loads (or if it can't), the flat SVG "Y" draws itself as before.
- `prefers-reduced-motion`: no idle spin or scroll motion; dragging still works.

Nothing else on the page moves. No custom cursor, no scroll-jacking.

## 8. How to keep building with Claude Code

Give decisions, not adjectives. Example prompt:

> Add a "Testimonios" section after "Trabajo real". Use `--ink` background,
> one quote in Instrument Serif italic at `--fs-statement`, the name in Plex
> Mono label style, a `01 / 03` counter top-left. Copy goes in `content.js`
> under `testimonials`; hide the section when the array is empty. Show me a
> 390 px screenshot and critique it against the three words before moving on.

Tokens first (top of `css/styles.css`), then one section at a time, with a
phone-width screenshot and a critique after each.

---

## Open questions for Yehor

Answering these makes the site more *his*:

Answered: launch without a portrait for now · review received and published ·
local detail = Barcelona coordinates · persistent button = WhatsApp.

Still open:
1. The real numbers behind "more visits, new clients, WhatsApp bookings, Google
   views" for Nude Beauty (e.g. "+40 % visitas en Google en 3 meses"). They go in
   `caseStudy.results` in `content.js`; never estimate them.
2. Can the review be signed with the owner's first name? Right now it says
   "Dueña de Nude Beauty Studio".
3. A real portrait, when there's a friend and good daylight.
