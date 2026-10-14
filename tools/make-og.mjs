// Regenera img/og.jpg (vista previa al compartir en WhatsApp/Instagram) desde tools/og.html.
// Uso: sirve la carpeta del proyecto en local (p. ej. `npx serve -l 8765 .`) y ejecuta `node tools/make-og.mjs`.
import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto("http://localhost:8765/tools/og.html", { waitUntil: "networkidle" });
await p.screenshot({ path: "img/og.jpg", type: "jpeg", quality: 85 });
await b.close();
