/*
 * ─────────────────────────────────────────────────────────────
 *  TODO EL TEXTO DE LA WEB ESTÁ AQUÍ.
 *  Edita este archivo para cambiar textos, precios o proyectos.
 *  - Si dejas un campo vacío ("" o []), ese bloque se oculta solo.
 *  - Cada texto tiene versión "es" y "en".
 * ─────────────────────────────────────────────────────────────
 */
window.SITE = {
  contact: {
    whatsapp: "34654269467",          // solo números, con prefijo de país
    phone: "+34654269467",            // para el enlace "Llamar"
    phoneDisplay: "+34 654 269 467",  // como se ve en pantalla
    email: "yehorwebs@gmail.com",
  },

  // Tu foto. Mientras no exista el archivo se muestra un monograma "Y".
  photo: "img/yehor.jpg",

  // ── Caso real ────────────────────────────────────────────────
  caseStudy: {
    name: "Nude Beauty Studio",
    url: "https://nudebeautybcn.com/",
    imageDesktop: "img/work/nude-beauty-desktop.webp",
    imageMobile: "img/work/nude-beauty-mobile.webp",

    // ▼▼▼ RESEÑA DE LA DUEÑA — pega aquí su texto real. Vacío = no se muestra.
    review: {
      text: { es: "", en: "" },
      author: "",                     // p. ej. "Nombre, dueña de Nude Beauty Studio"
    },

    // ▼▼▼ RESULTADOS REALES — solo datos que puedas demostrar. Vacío = no se muestra.
    // Ejemplo: { value: "+30", label: { es: "reservas por WhatsApp al mes", en: "WhatsApp bookings a month" } }
    results: [],
  },

  // ── Proyectos de demostración ────────────────────────────────
  // Para añadir uno: copia un bloque { ... } y cambia los datos.
  // Las capturas van en img/work/ (800×500 px, formato .webp).
  projects: [
    {
      name: "Monalisa Organic Beauty",
      demo: "https://ggvs228-cmd.github.io/pelumonalisa/",
      repo: "https://github.com/ggvs228-cmd/pelumonalisa",
      image: "img/work/pelumonalisa.webp",
      line: { es: "Peluquería orgánica en Gràcia, con servicios y cita online.", en: "Organic hair salon in Gràcia, with services and online booking." },
    },
    {
      name: "Anukis Lounge",
      demo: "https://ggvs228-cmd.github.io/anukislounge/",
      repo: "https://github.com/ggvs228-cmd/anukislounge",
      image: "img/work/anukislounge.webp",
      line: { es: "Barbería y masajes: dos espacios, dos formas de reservar.", en: "Barber and massage lounge: two spaces, two ways to book." },
    },
    {
      name: "MDQ",
      demo: "https://ggvs228-cmd.github.io/mdq/",
      repo: "https://github.com/ggvs228-cmd/mdq",
      image: "img/work/mdq.webp",
      line: { es: "Parrilla argentina en Sant Andreu, con carta y menú del día.", en: "Argentinian grill in Sant Andreu, with menu and lunch deal." },
    },
    {
      name: "Rodríguez Barbershop",
      demo: "https://ggvs228-cmd.github.io/rodriguezbarbershop/",
      repo: "https://github.com/ggvs228-cmd/rodriguezbarbershop",
      image: "img/work/rodriguezbarbershop.webp",
      line: { es: "Barbería de barrio en el Raval, reservas por WhatsApp.", en: "Neighbourhood barbershop in El Raval, bookings via WhatsApp." },
    },
    {
      name: "Meet Flowers",
      demo: "https://ggvs228-cmd.github.io/meetflowers/",
      repo: "https://github.com/ggvs228-cmd/meetflowers",
      image: "img/work/meetflowers.webp",
      line: { es: "Floristería en Gràcia, con pedidos por WhatsApp.", en: "Flower shop in Gràcia, with orders via WhatsApp." },
    },
    {
      name: "Cloud Gelato",
      demo: "https://ggvs228-cmd.github.io/cloud-gelato/",
      repo: "https://github.com/ggvs228-cmd/cloud-gelato",
      image: "img/work/cloud-gelato.webp",
      line: { es: "Heladería artesana en Gràcia: sabores, horario y cómo llegar.", en: "Artisan gelato shop in Gràcia: flavours, hours and directions." },
    },
  ],

  // ── Textos por idioma ────────────────────────────────────────
  text: {
    es: {
      meta: {
        title: "Yehor · Webs para estudios de belleza y negocios en Barcelona",
        description: "Hago webs sencillas para estudios de belleza y pequeños negocios de Barcelona. Reservas por WhatsApp y ficha de Google incluidas. Desde 400 €.",
      },
      nav: { work: "Trabajo", process: "Cómo trabajo", prices: "Precios", contact: "Contacto" },
      skip: "Saltar al contenido",
      whatsappMessage: "Hola Yehor, he visto tu web y me gustaría hablar sobre una web para mi negocio.",
      hero: {
        kicker: "Yehor · Webs para negocios",
        title: "Hola, soy Yehor.",
        line: "Hago webs para estudios de belleza y pequeños negocios de Barcelona.",
        whatsapp: "Escríbeme por WhatsApp",
        emailLabel: "o por email:",
        photoAlt: "Retrato de Yehor",
      },
      work: {
        eyebrow: "Trabajo real",
        title: "Nude Beauty Studio",
        intro: "Estudio de estética en el Eixample: uñas, cejas, pestañas y faciales.",
        beforeLabel: "Antes",
        before: "No tenía web, solo Instagram.",
        afterLabel: "Después",
        after: "Una web en español, catalán e inglés, con sus servicios, reservas por WhatsApp y optimizada para Google.",
        visit: "Ver la web",
        reviewTitle: "Lo que dice la dueña",
        resultsTitle: "Resultados",
        altDesktop: "Captura de la web de Nude Beauty Studio en ordenador",
        altMobile: "Captura de la web de Nude Beauty Studio en el móvil",
      },
      demos: {
        eyebrow: "Proyectos de demostración",
        title: "Otras webs que he diseñado",
        note: "Son demos que he hecho por mi cuenta para enseñar mi trabajo. No son encargos de esos negocios.",
        badge: "Demo",
        cta: "Ver demo",
        altPrefix: "Captura de la demo de",
      },
      process: {
        eyebrow: "Cómo trabajo",
        title: "Tres pasos, sin complicaciones",
        steps: [
          { title: "Hablamos 15 minutos", text: "Por WhatsApp, llamada o en tu local. Me cuentas qué haces y qué necesitas." },
          { title: "Te preparo una primera versión", text: "En pocos días ves tu web de verdad, en tu móvil. Me dices qué cambiar." },
          { title: "La publicamos y la ajustamos", text: "La ponemos en marcha y la retocamos hasta que te guste cómo queda." },
        ],
        google: "También me encargo de tu ficha de Google (Google Business Profile), para que te encuentren cuando buscan cerca.",
      },
      prices: {
        eyebrow: "Precios",
        title: "Claro desde el principio",
        mainLabel: "Tu web",
        mainPrice: "Desde 400 €",
        mainNote: "Pago único",
        mainItems: ["Pensada para el móvil", "Botón de reserva por WhatsApp", "Tu ficha de Google, configurada"],
        mainExtra: "¿Necesitas más? También puedo añadir reservas online con calendario, pagos, varios idiomas o lo que tu negocio necesite. Te digo el precio antes de empezar.",
        careLabel: "Mantenimiento (opcional)",
        carePrice: "60 €/mes",
        careNote: "Mantenimiento, cambios y Google",
        careItems: ["Cambios de precios, fotos y horarios", "Revisión de tu ficha de Google", "Me escribes y lo cambio yo"],
        guarantee: "Si en 30 días no te convence, no pagas.",
      },
      about: {
        eyebrow: "Sobre mí",
        title: "Quién hay detrás",
        // ▼▼▼ Reescribe con tus datos reales (de dónde eres, por qué haces esto, algo personal).
        paragraphs: [
          "Soy Yehor y vivo en Barcelona.",
          "Hago webs para negocios pequeños porque muchos trabajan muy bien pero no se les encuentra en internet.",
          "Trabajo solo, así que hablas siempre conmigo, desde el primer mensaje hasta después de publicar.",
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Llámame o escríbeme",
        text: "Sin formularios. Escríbeme por WhatsApp, llámame o mándame un email, lo que te sea más cómodo. Te respondo yo.",
        whatsapp: "Escríbeme por WhatsApp",
        call: "Llámame",
        email: "Email",
      },
      sticky: "WhatsApp",
      footer: "Yehor · Webs para negocios · Barcelona",
      legal: "Aviso legal y privacidad",
      langLabel: "Idioma",
      opensNew: "(se abre en otra pestaña)",
    },

    en: {
      meta: {
        title: "Yehor · Websites for beauty studios and small businesses in Barcelona",
        description: "I make simple websites for beauty studios and small businesses in Barcelona. WhatsApp booking and Google profile included. From €400.",
      },
      nav: { work: "Work", process: "How I work", prices: "Prices", contact: "Contact" },
      skip: "Skip to content",
      whatsappMessage: "Hi Yehor, I saw your website and I'd like to talk about a website for my business.",
      hero: {
        kicker: "Yehor · Websites for businesses",
        title: "Hi, I'm Yehor.",
        line: "I make websites for beauty studios and small businesses in Barcelona.",
        whatsapp: "Message me on WhatsApp",
        emailLabel: "or by email:",
        photoAlt: "Portrait of Yehor",
      },
      work: {
        eyebrow: "Real work",
        title: "Nude Beauty Studio",
        intro: "A beauty studio in the Eixample: nails, brows, lashes and facials.",
        beforeLabel: "Before",
        before: "No website, only Instagram.",
        afterLabel: "After",
        after: "A website in Spanish, Catalan and English, with her services, WhatsApp booking and Google optimisation.",
        visit: "Visit the site",
        reviewTitle: "What the owner says",
        resultsTitle: "Results",
        altDesktop: "Screenshot of the Nude Beauty Studio website on desktop",
        altMobile: "Screenshot of the Nude Beauty Studio website on mobile",
      },
      demos: {
        eyebrow: "Demo projects",
        title: "Other websites I've designed",
        note: "These are demos I made on my own to show my work. They were not commissioned by these businesses.",
        badge: "Demo",
        cta: "View demo",
        altPrefix: "Screenshot of the demo for",
      },
      process: {
        eyebrow: "How I work",
        title: "Three steps, no fuss",
        steps: [
          { title: "We talk for 15 minutes", text: "On WhatsApp, a call or at your place. Tell me what you do and what you need." },
          { title: "I make a first version", text: "In a few days you see your real website, on your phone. Tell me what to change." },
          { title: "We publish it and fine-tune it", text: "We put it live and adjust it until you're happy with it." },
        ],
        google: "I also take care of your Google Business Profile, so people nearby can find you.",
      },
      prices: {
        eyebrow: "Prices",
        title: "Clear from the start",
        mainLabel: "Your website",
        mainPrice: "From €400",
        mainNote: "One-off payment",
        mainItems: ["Designed for mobile", "WhatsApp booking button", "Your Google profile, set up"],
        mainExtra: "Need more? I can also add online booking with a calendar, payments, extra languages or whatever your business needs. I'll tell you the price before we start.",
        careLabel: "Care plan (optional)",
        carePrice: "€60/month",
        careNote: "Maintenance, changes and Google",
        careItems: ["Price, photo and opening-hour changes", "Google profile check-ups", "Message me and I'll change it"],
        guarantee: "If you're not convinced within 30 days, you don't pay.",
      },
      about: {
        eyebrow: "About me",
        title: "Who's behind this",
        paragraphs: [
          "I'm Yehor and I live in Barcelona.",
          "I make websites for small businesses because many of them do great work but are hard to find online.",
          "I work alone, so you always talk to me, from the first message until after launch.",
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Call me or text me",
        text: "No forms. Message me on WhatsApp, call me or send an email, whatever is easiest. I'll answer myself.",
        whatsapp: "Message me on WhatsApp",
        call: "Call me",
        email: "Email",
      },
      sticky: "WhatsApp",
      footer: "Yehor · Websites for businesses · Barcelona",
      legal: "Legal notice and privacy (Spanish)",
      langLabel: "Language",
      opensNew: "(opens in a new tab)",
    },
  },
};
