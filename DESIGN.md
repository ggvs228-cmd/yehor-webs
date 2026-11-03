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

Not taken from it, on purpose: the WebGL 3D scene. It is ~MBs of code and GPU
work. The visitors here are on mid-range phones with mobile data, and the
brief asks for under one second on 4G. The signature detail (see 7) keeps the
*idea* (a mark that draws itself) at ~1 KB.

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

**The Y draws itself.** On load, the "Y" monogram is drawn as a single clay
line (SVG stroke animation, CSS only, ~1 KB), echoing HOLM's "everything starts
as a single line". It does not move again. It respects
`prefers-reduced-motion`. No custom cursor, no scroll-jacking, no parallax.

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

1. A real portrait (see 5): when can a friend take it?
2. Did the Nude Beauty owner agree to a short review? One sentence is enough.
3. Any real number from Nude Beauty you can prove (bookings by WhatsApp per month, Google views)?
4. What street or neighbourhood do you walk most when looking for clients? It could be the "local" detail in the hero.
5. Do you want "Escríbeme" (WhatsApp) or "Llámame" as the single persistent button? WhatsApp is the current choice.
