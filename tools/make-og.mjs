// Regenera img/og.jpg (vista previa al compartir) a partir del hero.
// Uso: sirve la web en local (p. ej. `npx serve -l 8765 .`) y ejecuta `node tools/make-og.mjs`.
import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: "light" });
await p.goto("http://localhost:8765/", { waitUntil: "networkidle" });
await p.addStyleTag({ content: ".hero{padding-top:40px!important;padding-bottom:40px!important}.hero__photo{max-width:300px}" });
await p.screenshot({ path: "img/og.jpg", type: "jpeg", quality: 82 });
await b.close();
