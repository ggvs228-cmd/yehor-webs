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
      text: {
        es: "¡Lo recomiendo muchísimo! Me creó una página web impecable, cuidando cada detalle, y durante todo el proceso fue muy atento y resolutivo. Desde que la tengo he notado más visitas; estoy encantada con el resultado y con el servicio.",
        en: "I highly recommend him! He built me a flawless website, taking care of every detail, and throughout the whole process he was attentive and quick to solve things. Since I've had it I've noticed more visits; I'm delighted with the result and the service.",
      },
      author: { es: "Dueña de Nude Beauty Studio", en: "Owner of Nude Beauty Studio (translated from Spanish)" },
      // Fragmento corto para el inicio (recorte honesto de la reseña, con […])
      short: {
        es: "Me creó una página web impecable, cuidando cada detalle […] Desde que la tengo he notado más visitas.",
        en: "He built me a flawless website, taking care of every detail […] Since I've had it I've noticed more visits.",
      },
      thumb: "img/work/nude-beauty-mobile.webp",
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
  // *texto* entre asteriscos = palabra en cursiva (énfasis en titulares).
  text: {
    es: {
      meta: {
        title: "Yehor · Webs para estudios de belleza y negocios en Barcelona",
        description: "Hago webs sencillas para estudios de belleza y pequeños negocios de Barcelona. Reservas por WhatsApp y ficha de Google incluidas. Desde 600 €.",
      },
      nav: { work: "Trabajo", process: "Proceso", prices: "Precios", faq: "Preguntas", studio: "Estudio", contact: "Contacto", menu: "Menú", close: "Cerrar" },
      cta: "Escríbeme",
      skip: "Saltar al contenido",
      whatsappMessage: "Hola Yehor, he visto tu web y me gustaría hablar sobre una web para mi negocio.",
      hero: {
        topline: "Webs desde 600 €.",
        hello: "Hola, soy Yehor.",
        line: "Hago webs para *estudios de belleza* y pequeños negocios de Barcelona.",
        sub: "Una sola persona, de la primera charla a la web publicada. Hablas conmigo y la hago yo.",
        whatsapp: "Escríbeme por WhatsApp",
        emailLabel: "o por email",
        place: "Barcelona · 41,39° N 2,17° E",
        langs: "ES · CA · EN · UK · RU",
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
        title: "Ideas para *tu* negocio",
        note: "Negocios inventados para enseñarte lo que puedo hacer. Cada demo funciona de verdad: pruébala desde el móvil. Lo mismo, con tu nombre y tus datos, para tu negocio.",
        badge: "Demo",
        cta: "Probar la demo",
        altPrefix: "Captura de la demo de",
        ask: "¿Quieres una así para tu negocio?",
        askBtn: "Escríbeme por WhatsApp",
      },
      statement: "Un estudio de una sola persona para negocios que merecen que se les *encuentre*.",
      process: {
        eyebrow: "Proceso",
        title: "Cómo se hace *tu web*",
        steps: [
          { stage: "La charla", title: "Hablamos 15 minutos", text: "Por WhatsApp, llamada o en tu local. Me cuentas qué haces y qué necesitas." },
          { stage: "El borrador", title: "Te preparo una primera versión", text: "En pocos días ves tu web de verdad, en tu móvil. Me dices qué cambiar." },
          { stage: "La publicación", title: "La publicamos y la ajustamos", text: "La ponemos en marcha y la retocamos hasta que te guste cómo queda." },
        ],
        google: "También me encargo de tu ficha de Google (Google Business Profile), para que te encuentren cuando buscan cerca.",
      },
      prices: {
        eyebrow: "Precios",
        title: "Claro desde *el principio*",
        from: "Desde",
        mainLabel: "Tu web",
        mainPrice: "600 €",
        mainNote: "Pago único",
        mainItems: ["Pensada para el móvil", "Botón de reserva por WhatsApp", "Tu ficha de Google, configurada"],
        mainExtra: "¿Necesitas más? También puedo añadir reservas online con calendario, pagos, varios idiomas o lo que tu negocio necesite. Te digo el precio antes de empezar.",
        careLabel: "Mantenimiento (opcional)",
        carePrice: "60 €",
        careUnit: "/mes",
        careNote: "Mantenimiento, cambios y Google",
        careItems: ["Cambios de precios, fotos y horarios", "Revisión de tu ficha de Google", "Me escribes y lo cambio yo"],
        careExtra: "El precio depende de lo que necesites: más cambios, más idiomas o más servicios. Lo hablamos y te lo digo antes.",
        guarantee: "Si en 30 días no te convence, te devuelvo el dinero.",
        askBtn: "Pídeme presupuesto por WhatsApp",
      },
      faq: {
        eyebrow: "Preguntas",
        title: "Antes de *escribirme*",
        items: [
          { q: "¿Cuánto tardas?", a: "En unos días ves la primera versión y, normalmente, en una semana está publicada. Si las fotos o los textos tardan en llegar, tardamos un poco más." },
          { q: "¿Cómo se paga?", a: "La mitad al empezar y la otra mitad cuando la web está publicada. Si en 30 días no te convence, te devuelvo el dinero." },
          { q: "¿Y el dominio y el alojamiento?", a: "El dominio (tunegocio.com) se compra a tu nombre, así que es tuyo: cuesta unos 10–15 € al año y yo me encargo de configurarlo. El alojamiento de la web no tiene coste." },
          { q: "¿De quién es la web?", a: "Tuya, igual que el dominio. Los cambios me los pides por WhatsApp y los hago yo: con el mantenimiento entran en la cuota; si no, te digo el precio antes." },
          { q: "¿Necesito tener fotos y textos?", a: "Con lo que tienes en Instagram ya podemos empezar. Los textos los preparamos juntos a partir de una charla de 15 minutos." },
          { q: "No sé nada de webs. ¿Es un problema?", a: "No hace falta. Me escribes por WhatsApp como a cualquier proveedor y yo me encargo de todo lo técnico, también de tu ficha de Google." },
        ],
      },
      about: {
        eyebrow: "Estudio",
        title: "Una persona, de *principio a fin*.",
        paragraphs: [
          "Soy Yehor, soy de Ucrania y vivo en Barcelona desde hace más de cuatro años.",
          "Hablo español, catalán, inglés, ucraniano y ruso, así que tu web puede estar en varios idiomas.",
          "Mi primer cliente, Nude Beauty Studio, empezó con un mensaje de WhatsApp: les enseñé lo que hacía y les gustó.",
          "Trabajo solo, así que hablas siempre conmigo, desde el primer mensaje hasta después de publicar.",
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "*Hablemos.*",
        text: "Sin formularios. Escríbeme por WhatsApp, llámame o mándame un email, lo que te sea más cómodo. Te respondo yo.",
        whatsapp: "Escríbeme por WhatsApp",
        call: "Llámame",
        email: "Email",
      },
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
      nav: { work: "Work", process: "Process", prices: "Prices", faq: "FAQ", studio: "Studio", contact: "Contact", menu: "Menu", close: "Close" },
      cta: "Message me",
      skip: "Skip to content",
      whatsappMessage: "Hi Yehor, I saw your website and I'd like to talk about a website for my business.",
      hero: {
        topline: "Websites from €600.",
        hello: "Hi, I'm Yehor.",
        line: "I make websites for *beauty studios* and small businesses in Barcelona.",
        sub: "One person, from the first chat to the published site. You talk to me and I build it.",
        whatsapp: "Message me on WhatsApp",
        emailLabel: "or by email",
        place: "Barcelona · 41.39° N 2.17° E",
        langs: "ES · CA · EN · UK · RU",
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
        title: "Ideas for *your* business",
        note: "Made-up businesses to show you what I can build. Every demo really works: try it on your phone. The same, with your name and details, for your business.",
        badge: "Demo",
        cta: "Try the demo",
        altPrefix: "Screenshot of the demo for",
        ask: "Want one like this for your business?",
        askBtn: "Message me on WhatsApp",
      },
      statement: "A one-person studio for businesses that deserve to be *found*.",
      process: {
        eyebrow: "Process",
        title: "How *your website* is made",
        steps: [
          { stage: "The chat", title: "We talk for 15 minutes", text: "On WhatsApp, a call or at your place. Tell me what you do and what you need." },
          { stage: "The draft", title: "I make a first version", text: "In a few days you see your real website, on your phone. Tell me what to change." },
          { stage: "The launch", title: "We publish it and fine-tune it", text: "We put it live and adjust it until you're happy with it." },
        ],
        google: "I also take care of your Google Business Profile, so people nearby can find you.",
      },
      prices: {
        eyebrow: "Prices",
        title: "Clear from *the start*",
        from: "From",
        mainLabel: "Your website",
        mainPrice: "€600",
        mainNote: "One-off payment",
        mainItems: ["Designed for mobile", "WhatsApp booking button", "Your Google profile, set up"],
        mainExtra: "Need more? I can also add online booking with a calendar, payments, extra languages or whatever your business needs. I'll tell you the price before we start.",
        careLabel: "Care plan (optional)",
        carePrice: "€60",
        careUnit: "/month",
        careNote: "Maintenance, changes and Google",
        careItems: ["Price, photo and opening-hour changes", "Google profile check-ups", "Message me and I'll change it"],
        careExtra: "The price depends on what you need: more changes, more languages or more services. We talk it through and I tell you first.",
        guarantee: "If you're not convinced within 30 days, I'll give you your money back.",
        askBtn: "Ask me for a quote on WhatsApp",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Before you *message me*",
        items: [
          { q: "How long does it take?", a: "You see a first version in a few days, and it's usually live within a week. If photos or texts take a while to arrive, it takes a little longer." },
          { q: "How do I pay?", a: "Half to start and half when the website is live. If you're not convinced within 30 days, I'll give you your money back." },
          { q: "What about the domain and hosting?", a: "The domain (yourbusiness.com) is bought in your name, so it's yours: it costs about €10–15 a year and I set it up. Hosting the website costs nothing." },
          { q: "Who owns the website?", a: "You do, like the domain. You ask me for changes on WhatsApp and I make them: on the care plan they're included; otherwise I tell you the price first." },
          { q: "Do I need photos and texts?", a: "What you already have on Instagram is enough to start. We write the texts together after a 15-minute chat." },
          { q: "I know nothing about websites. Is that a problem?", a: "Not at all. You message me on WhatsApp like any other supplier and I handle everything technical, including your Google profile." },
        ],
      },
      about: {
        eyebrow: "Studio",
        title: "One person, *start to finish*.",
        paragraphs: [
          "I'm Yehor. I'm from Ukraine and I've lived in Barcelona for more than four years.",
          "I speak Spanish, Catalan, English, Ukrainian and Russian, so your website can be in several languages.",
          "My first client, Nude Beauty Studio, started with a WhatsApp message: I showed them what I do and they liked it.",
          "I work alone, so you always talk to me, from the first message until after launch.",
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "*Let's talk.*",
        text: "No forms. Message me on WhatsApp, call me or send an email, whatever is easiest. I'll answer myself.",
        whatsapp: "Message me on WhatsApp",
        call: "Call me",
        email: "Email",
      },
      footer: "Yehor · Websites for businesses · Barcelona",
      legal: "Legal notice and privacy (Spanish)",
      langLabel: "Language",
      opensNew: "(opens in a new tab)",
    },
  },
};
