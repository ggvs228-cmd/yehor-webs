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

  // Tu foto (vertical 4:5, p. ej. "img/yehor.jpg"). Vacío = el inicio va solo con texto.
  photo: "",

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
      name: "Floreta",
      demo: "/demos/floristeria/",
      image: "img/work/floreta.webp",
      line: { es: "Floristería con tienda online: carrito, pago con tarjeta y pedidos por WhatsApp.", en: "Flower shop with an online store: cart, card payment and WhatsApp orders." },
      tags: { es: ["Tienda online", "Pago con tarjeta", "Pedidos por WhatsApp", "3 idiomas"], en: ["Online store", "Card payment", "WhatsApp orders", "3 languages"] },
    },
    {
      name: "Raíz Peluquería",
      demo: "/demos/peluqueria/",
      image: "img/work/raiz.webp",
      line: { es: "Peluquería unisex con servicios, precios, galería y reserva online.", en: "Unisex hair salon with services, prices, gallery and online booking." },
      tags: { es: ["Reserva online", "Servicios y precios", "Galería", "3 idiomas"], en: ["Online booking", "Services and prices", "Gallery", "3 languages"] },
    },
    {
      name: "Espacio Brisa",
      demo: "/demos/psicologa/",
      image: "img/work/psicologa.webp",
      line: { es: "Psicóloga en consulta y online, con reserva de citas paso a paso.", en: "Psychologist in person and online, with step-by-step appointment booking." },
      tags: { es: ["Reserva de citas", "Tarifas claras", "Preguntas frecuentes"], en: ["Appointment booking", "Clear prices", "FAQ"] },
    },
    {
      name: "Casa Rufina",
      demo: "/demos/restaurante/",
      image: "img/work/casa-rufina.webp",
      line: { es: "Bar de tapas con carta digital completa y reservas por WhatsApp.", en: "Tapas bar with a full digital menu and WhatsApp reservations." },
      tags: { es: ["Carta digital", "Reservas por WhatsApp", "3 idiomas"], en: ["Digital menu", "WhatsApp bookings", "3 languages"] },
    },
    {
      name: "Volta Reformas",
      demo: "/demos/electricista/",
      image: "img/work/electricista.webp",
      line: { es: "Electricista y fontanero: llamada, WhatsApp y aviso urgente en un toque.", en: "Electrician and plumber: call, WhatsApp and urgent requests in one tap." },
      tags: { es: ["Llamada en un toque", "Aviso urgente", "Precios orientativos"], en: ["One-tap call", "Urgent requests", "Price guide"] },
    },
    {
      name: "Austral Parrilla",
      demo: "/demos/parrilla/",
      image: "img/work/austral.webp",
      line: { es: "Parrilla argentina con menú del día, platos estrella y reseñas.", en: "Argentinian grill with lunch menu, signature dishes and reviews." },
      tags: { es: ["Menú del día", "Platos con foto", "3 idiomas"], en: ["Lunch menu", "Dishes with photos", "3 languages"] },
    },
  ],

  // ── Textos por idioma ────────────────────────────────────────
  text: {
    es: {
      meta: {
        title: "Yehor · Webs para estudios de belleza y negocios en Barcelona",
        description: "Hago webs sencillas para estudios de belleza y pequeños negocios de Barcelona. Reservas por WhatsApp y ficha de Google incluidas. Desde 600 €.",
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
        title: "Ideas para tu negocio",
        note: "Negocios inventados para enseñarte lo que puedo hacer. Cada demo funciona de verdad: pruébala desde el móvil. Lo mismo, con tu nombre y tus datos, para tu negocio.",
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
        mainPrice: "Desde 600 €",
        mainNote: "Pago único",
        mainItems: ["Pensada para el móvil", "Botón de reserva por WhatsApp", "Tu ficha de Google, configurada"],
        mainExtra: "¿Necesitas más? También puedo añadir reservas online con calendario, pagos, varios idiomas o lo que tu negocio necesite. Te digo el precio antes de empezar.",
        careLabel: "Mantenimiento (opcional)",
        carePrice: "Desde 60 €/mes",
        careExtra: "El precio depende de lo que necesites: más cambios, más idiomas o más servicios. Lo hablamos y te lo digo antes.",
        careNote: "Mantenimiento, cambios y Google",
        careItems: ["Cambios de precios, fotos y horarios", "Revisión de tu ficha de Google", "Me escribes y lo cambio yo"],
        guarantee: "Si en 30 días no te convence, no pagas.",
      },
      about: {
        eyebrow: "Sobre mí",
        title: "Quién hay detrás",
        paragraphs: [
          "Soy Yehor, soy de Ucrania y vivo en Barcelona desde hace más de cuatro años.",
          "Hablo español, catalán, inglés, ucraniano y ruso, así que tu web puede estar en varios idiomas.",
          "Mi primer cliente, Nude Beauty Studio, empezó con un mensaje de WhatsApp: les enseñé lo que hacía y les gustó.",
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
        description: "I make simple websites for beauty studios and small businesses in Barcelona. WhatsApp booking and Google profile included. From €600.",
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
        title: "Ideas for your business",
        note: "Made-up businesses to show you what I can build. Every demo really works: try it on your phone. The same, with your name and details, for your business.",
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
        mainPrice: "From €600",
        mainNote: "One-off payment",
        mainItems: ["Designed for mobile", "WhatsApp booking button", "Your Google profile, set up"],
        mainExtra: "Need more? I can also add online booking with a calendar, payments, extra languages or whatever your business needs. I'll tell you the price before we start.",
        careLabel: "Care plan (optional)",
        carePrice: "From €60/month",
        careExtra: "The price depends on what you need: more changes, more languages or more services. We talk it through and I tell you first.",
        careNote: "Maintenance, changes and Google",
        careItems: ["Price, photo and opening-hour changes", "Google profile check-ups", "Message me and I'll change it"],
        guarantee: "If you're not convinced within 30 days, you don't pay.",
      },
      about: {
        eyebrow: "About me",
        title: "Who's behind this",
        paragraphs: [
          "I'm Yehor. I'm from Ukraine and I've lived in Barcelona for more than four years.",
          "I speak Spanish, Catalan, English, Ukrainian and Russian, so your website can be in several languages.",
          "My first client, Nude Beauty Studio, started with a WhatsApp message: I showed them what I do and they liked it.",
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
