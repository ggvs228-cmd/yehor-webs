# Yehor · Webs para negocios

Diseño: decisiones, tipografía, colores y cómo seguir construyendo en [`DESIGN.md`](DESIGN.md).

Web personal estática (HTML + CSS + JS, sin frameworks), lista para Vercel.

## Editar textos y proyectos
Todo el contenido está en **`js/content.js`**:
- Textos en español (`text.es`) e inglés (`text.en`).
- `caseStudy.review` y `caseStudy.results`: déjalos vacíos hasta tener datos reales; vacío = no se muestra.
- `projects`: copia un bloque para añadir una demo. Capturas en `img/work/` (800×500, `.webp`).

## Foto y vista previa
- Foto: ahora no hay. Para ponerla, guarda `img/yehor.jpg` (vertical 4:5, 720×900, < 150 KB) y pon `photo: "img/yehor.jpg"` en `js/content.js`.
- Si cambias la foto, regenera `img/og.jpg` con `tools/make-og.mjs`.

## Publicar en Vercel
1. Importa el repo en Vercel (Framework: *Other*, sin build command).
2. Activa **Analytics** en el panel del proyecto (no usa cookies).
3. Si usas un dominio propio, cambia `https://yehor-webs.vercel.app` en `index.html`, `robots.txt` y `sitemap.xml`.

## Aviso legal
`aviso-legal.html` (enlazado desde el pie). Tiene `noindex` para que tu NIE y dirección no salgan en Google.
Si cambias de domicilio, email o teléfono, actualízalo también ahí.

## Después de editar
Al cambiar `js/content.js`, `js/main.js` o `css/styles.css`, sube el número `?v=` en `index.html` (y en `aviso-legal.html` para el CSS) para que todos los navegadores carguen la versión nueva.

## Componentes React (shadcn) — preparados, no publicados

Esta web es HTML/CSS/JS sin framework (es lo que la hace tan rápida). No tiene React,
TypeScript, Tailwind ni shadcn. El fondo de líneas de "Hablemos." es una versión sin React
de `components/ui/background-paths.tsx`, con los colores de la web.

Los archivos originales están guardados para una futura migración y **no se publican**
(ver `.vercelignore`):

- `components/ui/background-paths.tsx` (el componente)
- `components/ui/button.tsx` (botón de shadcn, del que depende)
- `components/ui/demo.tsx` (ejemplo de uso)
- `lib/utils.ts` (`cn()`, que usa el botón)

**Por qué `components/ui`:** es la carpeta por defecto de shadcn. El CLI instala ahí cada
componente, y los imports del código (`@/components/ui/button`) dan por hecho esa ruta.
Si los componentes viven en otra carpeta, cada `npx shadcn add …` futuro los pondría en un
sitio distinto y los imports se romperían.

**Si algún día quieres migrar a React** (Vite + React + TypeScript + Tailwind + shadcn):

```bash
npm create vite@latest yehor-react -- --template react-ts
cd yehor-react
npm install tailwindcss @tailwindcss/vite
# en vite.config.ts: añadir el plugin tailwindcss() y el alias "@" → "./src"
# en tsconfig.json y tsconfig.app.json: "baseUrl": ".", "paths": { "@/*": ["./src/*"] }
npx shadcn@latest init          # crea components.json, src/lib/utils.ts y las variables de color
npx shadcn@latest add button    # crea src/components/ui/button.tsx
npm install framer-motion @radix-ui/react-slot class-variance-authority
# copiar components/ui/background-paths.tsx a src/components/ui/
```

Ten en cuenta que React + framer-motion añaden unos 150 KB de JavaScript y un paso de
compilación en Vercel. Para esta web no compensa: la versión sin React hace lo mismo.
