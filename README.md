# Yehor · Webs para negocios

Web personal estática (HTML + CSS + JS, sin frameworks), lista para Vercel.

## Editar textos y proyectos
Todo el contenido está en **`js/content.js`**:
- Textos en español (`text.es`) e inglés (`text.en`).
- `caseStudy.review` y `caseStudy.results`: déjalos vacíos hasta tener datos reales; vacío = no se muestra.
- `projects`: copia un bloque para añadir una demo. Capturas en `img/work/` (800×500, `.webp`).

## Archivos que faltan
- `img/yehor.jpg` — tu retrato (vertical 4:5, ~960×1200, < 150 KB). Mientras no exista se ve un monograma "Y".
- Después de poner la foto, regenera `img/og.jpg` con `tools/make-og.mjs`.

## Publicar en Vercel
1. Importa el repo en Vercel (Framework: *Other*, sin build command).
2. Activa **Analytics** en el panel del proyecto (no usa cookies).
3. Si usas un dominio propio, cambia `https://yehor-webs.vercel.app` en `index.html`, `robots.txt` y `sitemap.xml`.
