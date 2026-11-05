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

Tried and then removed: the 3D. Byholm's whole site is one scroll-driven WebGL
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

## 4. Palette (updated Nov 2026, from Yehor's pricing reference)

Dark only. Near-black with cool greys and three accents, one per pricing tier:

| Token | Hex | Use |
|---|---|---|
| `--ink` / `--paper` | `#0b0b0d` / `#0e0e10` | Background |
| `--paper-2` | `#141416` | Cards |
| `--line` | `#26262b` | Borders |
| `--text` / `--muted` | `#f4f4f5` / `#a1a1aa` | Text |
| `--lime` | `#c3e15a` | Main accent: italic words, numbers, primary (WhatsApp) glass button |
| `--blue` | `#8ea2ff` | "Web" tier, text-loop gradient |
| `--violet` | `#c49be0` | "A medida" tier, text-loop gradient |

Tinted glows (`--tint-*`) sit behind the hero, the contact section and the top of
each pricing card, so the liquid-glass buttons have something to refract.

**Buttons:** every button is liquid glass (translucent, blurred, top highlight, a
sheen that follows the pointer). Primary = lime-tinted glass, secondary = clear glass.

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

## 7. Signature details (motion budget: two, both cheap)

1. **The Y draws itself** once in the hero (SVG stroke, CSS only, ~1 KB). The 3D
   version (Three.js) was tried and removed at Yehor's request.
2. **Flowing lines behind "Hablemos."** (contact): a vanilla port of
   `components/ui/background-paths.tsx` (shadcn/framer-motion). Same 72 curves,
   drawn on one `<canvas>` at ~30 fps only while the section is on screen,
   clay on ink. The title rises letter by letter once. The original React files
   are kept in `components/ui/` for a future migration but are not deployed.

`prefers-reduced-motion`: the Y appears drawn, the lines are static, the title
appears without motion. No custom cursor, no scroll-jacking.

## Page order, and why (researched Nov 2026)

1. **Hero:** what you do in one line (understood in ~5 s), price line on top,
   **one** action (WhatsApp), and **proof right under the button**: a cut of the
   real review plus a thumbnail of the real site. A widely cited A/B test
   (Michael Aagaard) moved testimonials next to the button and reported a big lift;
   treat the exact number as anecdotal.
2. **Real work first** (Nude Beauty: before/after + full review). Clients look at
   visuals first and dig deeper only if they like them.
3. **Demos** grouped by kind of business (owners look for their own sector), then a
   repeated CTA: "¿Quieres una así para tu negocio?"
4. **Process → Prices → FAQ.** Visible prices: usability studies see people leave
   for competitors when prices are hidden. FAQ answers the doubts that stop a
   message (time, payment, domain, ownership, photos, "I know nothing about webs").
5. **Studio → Contact.** Who you are, then every way to reach you.

The WhatsApp action appears 4 times (header pill, hero, after demos, after
prices) plus the contact section. It's always the same action, never a competing one.

**Best image:** eye-tracking studies (Djamasbi et al. 2010) find pages with faces
more appealing. The single best upgrade is still a real portrait of Yehor; until
then, the strongest image is the real client site (used in the hero proof card).



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
