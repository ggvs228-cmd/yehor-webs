(function () {
  "use strict";

  /* =========================================================
     i18n dictionary — ES / CA / EN
     ========================================================= */
  var translations = {
    es: {
      "logo.sub": "Hair Studio",
      "nav.about": "Sobre nosotros",
      "nav.services": "Servicios",
      "nav.reviews": "Opiniones",
      "nav.booking": "Reservar",
      "nav.contact": "Contacto",
      "nav.cta": "Reservar cita",
      "hero.badge": "· 310 reseñas en Google",
      "hero.title": "Belleza <em>orgánica</em>, con cita cuando quieras",
      "hero.lede": "Peluquería vegana y orgánica en el corazón de Sant Antoni. Cortes, color, mechas y tratamientos capilares hechos a mano, con cita online inmediata.",
      "hero.cta1": "Reservar cita",
      "hero.cta2": "Ver servicios",
      "about.tag": "Passatge de la Llum, 7",
      "about.eyebrow": "Desde Sant Antoni para Barcelona",
      "about.title": "Peluquería 100% orgánica, pensada para tu pelo y tu piel",
      "about.p1": "Raíz Peluquería nació con una idea sencilla: cuidar tu imagen sin renunciar a ingredientes limpios. Trabajamos con coloración vegana, técnicas de precisión y productos botánicos en un espacio moderno, minimalista y cálido, a un minuto del metro Sant Antoni.",
      "about.p2": "Cortes de mujer, hombre y niño, mechas, alisados, tratamientos capilares y definición de cejas: cada servicio se adapta a ti, con el mismo mimo que si fuera el único cliente del día.",
      "about.director": "Directora · Raíz Peluquería",
      "about.director_role": "Coloración vegana & dirección técnica",
      "about.stat1": "310 reseñas en Google",
      "about.stat2": "95 reseñas en Fresha",
      "about.stat3": "Coloración vegana",
      "services.eyebrow": "Carta de servicios",
      "services.title": "Cada servicio, a tu medida",
      "services.subtitle": "La carta completa, tal como está en Fresha: pulsa una categoría para ver duración y precio de cada servicio.",
      "services.foot": "Precios y duraciones tal como figuran en nuestra ficha de Fresha. La disponibilidad y reserva final se confirman ahí mismo.",
      "services.foot_cta": "Ver y reservar en Fresha",
      "reviews.eyebrow": "Lo que dicen de nosotros",
      "reviews.title": "Lo que dicen nuestros clientes",
      "reviews.subtitle": "Reseñas de ejemplo para esta demo: así se verían las opiniones de tus clientes.",
      "reviews.badge_fresha": "310 reseñas · Google",
      "reviews.badge_treatwell": "95 reseñas · Fresha",
      "reviews.r1": "«Me explicaron cada paso del color y salí con el pelo justo como quería.»",
      "reviews.r2": "«Vine a cortarme el pelo y la barba y salí como nuevo. Muy buen ambiente.»",
      "reviews.r3": "«Sara entendió a la primera lo que quería. Repetiré seguro.»",
      "reviews.r4": "«Llevo a mi hijo desde hace un año: paciencia infinita y un corte perfecto.»",
      "reviews.r5": "«Productos naturales de verdad; noto el pelo mucho más sano.»",
      "reviews.r6": "«Reservé online en un minuto y Leo me atendió a la hora exacta. Muy recomendable.»",
      "booking.eyebrow": "Reserva online",
      "booking.title": "Elige tu cita, sin llamadas",
      "booking.subtitle": "Gestionamos nuestra agenda a través de Fresha: elige servicio, profesional y horario, y recibe la confirmación al instante.",
      "days.mon": "Lunes",
      "days.tue_fri": "Martes – Viernes",
      "days.sat": "Sábado",
      "days.sun": "Domingo",
      "hours.closed": "Cerrado",
      "booking.cta": "Reservar en Fresha ↗",
      "booking.embed_label": "Reserva segura, gestionada por Fresha",
      "booking.embed_cta": "Ver disponibilidad y reservar",
      "booking.embed_point1": "Confirmación instantánea por email y SMS",
      "booking.embed_point2": "Elige profesional, servicio y horario",
      "booking.embed_point3": "Cancela o cambia tu cita cuando quieras",
      "booking.embed_note": "Fresha no permite incrustar su calendario dentro de otras webs; el botón te lleva directamente a nuestra página oficial de reservas.",
      "gallery.eyebrow": "@raiz.peluqueria",
      "gallery.title": "Nuestro trabajo, al detalle",
      "gallery.cta": "Síguenos en Instagram ↗",
      "location.eyebrow": "Encuéntranos",
      "location.title": "A un minuto del Metro Sant Antoni",
      "location.p1": "Estamos en pleno Sant Antoni, a dos calles del mercado.",
      "location.address_k": "Dirección",
      "location.phone_k": "Teléfono",
      "location.hours_k": "Horario",
      "location.hours_v": "Mar–Vie 10:00–19:30 · Sáb 10:00–15:00",
      "location.instagram_k": "Instagram",
      "footer.about": "Peluquería orgánica y vegana en Sant Antoni, Barcelona. Cuidado capilar consciente desde el corazón del barrio.",
      "footer.nav_title": "Navegación",
      "footer.contact_title": "Contacto",
      "footer.hours_title": "Horario",
      "footer.address": "Passatge de la Llum, 7, Barcelona",
      "hours.closed_days": "Lunes y domingo cerrado",
      "footer.rights": "© 2026 Raíz Peluquería. Todos los derechos reservados.",
      "footer.demo": "Sitio de demostración",
      "_title": "Raíz Peluquería — Peluquería Natural en Sant Antoni, Barcelona",
      "_description": "Peluquería orgánica y vegana en Sant Antoni, Barcelona. Cortes, color vegano, mechas, alisados y tratamientos capilares. 4.9★ en Google con más de 700 reseñas."
    },
    ca: {
      "logo.sub": "Hair Studio",
      "nav.about": "Sobre nosaltres",
      "nav.services": "Serveis",
      "nav.reviews": "Opinions",
      "nav.booking": "Reservar",
      "nav.contact": "Contacte",
      "nav.cta": "Reservar cita",
      "hero.badge": "· 310 ressenyes a Google",
      "hero.title": "Bellesa <em>orgànica</em>, amb cita quan vulguis",
      "hero.lede": "Perruqueria vegana i orgànica al cor de Sant Antoni. Talls, color, reflexos i tractaments capil·lars fets a mà, amb cita en línia immediata.",
      "hero.cta1": "Reservar cita",
      "hero.cta2": "Veure serveis",
      "about.tag": "Passatge de la Llum, 7",
      "about.eyebrow": "Des de Sant Antoni per a Barcelona",
      "about.title": "Perruqueria 100% orgànica, pensada per al teu cabell i la teva pell",
      "about.p1": "Raíz Peluquería va néixer amb una idea senzilla: cuidar la teva imatge sense renunciar a ingredients nets. Treballem amb coloració vegana, tècniques de precisió i productes botànics en un espai modern, minimalista i càlid, a un minut del metro Sant Antoni.",
      "about.p2": "Talls de dona, home i infant, reflexos, allisats, tractaments capil·lars i definició de celles: cada servei s'adapta a tu, amb la mateixa cura que si fossis l'única clienta del dia.",
      "about.director": "Directora · Raíz Peluquería",
      "about.director_role": "Coloració vegana i direcció tècnica",
      "about.stat1": "310 ressenyes a Google",
      "about.stat2": "95 ressenyes a Fresha",
      "about.stat3": "Coloració vegana",
      "services.eyebrow": "Carta de serveis",
      "services.title": "Cada servei, a mida",
      "services.subtitle": "La carta completa, tal com és a Fresha: prem una categoria per veure durada i preu de cada servei.",
      "services.foot": "Preus i durades tal com figuren a la nostra fitxa de Fresha. La disponibilitat i reserva final es confirmen allà mateix.",
      "services.foot_cta": "Veure i reservar a Fresha",
      "reviews.eyebrow": "El que diuen de nosaltres",
      "reviews.title": "El que diuen els nostres clients",
      "reviews.subtitle": "Ressenyes d'exemple per a aquesta demo: així es veurien les opinions dels teus clients.",
      "reviews.badge_fresha": "310 ressenyes · Google",
      "reviews.badge_treatwell": "95 ressenyes · Fresha",
      "reviews.r1": "«Em van explicar cada pas del color i vaig sortir amb el cabell tal com el volia.»",
      "reviews.r2": "«Vaig venir a tallar-me el cabell i la barba i vaig sortir com nou. Molt bon ambient.»",
      "reviews.r3": "«La Sara va entendre a la primera el que volia. Hi tornaré segur.»",
      "reviews.r4": "«Hi porto el meu fill des de fa un any: paciència infinita i un tall perfecte.»",
      "reviews.r5": "«Productes naturals de debò; noto el cabell molt més sa.»",
      "reviews.r6": "«Vaig reservar en línia en un minut i en Leo em va atendre a l'hora exacta. Molt recomanable.»",
      "booking.eyebrow": "Reserva en línia",
      "booking.title": "Tria la teva cita, sense trucades",
      "booking.subtitle": "Gestionem la nostra agenda a través de Fresha: tria servei, professional i horari, i rep la confirmació a l'instant.",
      "days.mon": "Dilluns",
      "days.tue_fri": "Dimarts – Divendres",
      "days.sat": "Dissabte",
      "days.sun": "Diumenge",
      "hours.closed": "Tancat",
      "booking.cta": "Reservar a Fresha ↗",
      "booking.embed_label": "Reserva segura, gestionada per Fresha",
      "booking.embed_cta": "Veure disponibilitat i reservar",
      "booking.embed_point1": "Confirmació instantània per correu i SMS",
      "booking.embed_point2": "Tria professional, servei i horari",
      "booking.embed_point3": "Cancel·la o canvia la teva cita quan vulguis",
      "booking.embed_note": "Fresha no permet incrustar el seu calendari dins d'altres webs; el botó et porta directament a la nostra pàgina oficial de reserves.",
      "gallery.eyebrow": "@raiz.peluqueria",
      "gallery.title": "La nostra feina, al detall",
      "gallery.cta": "Segueix-nos a Instagram ↗",
      "location.eyebrow": "Troba'ns",
      "location.title": "A un minut del Metro Sant Antoni",
      "location.p1": "Som al bell mig de Sant Antoni, a dos carrers del mercat.",
      "location.address_k": "Adreça",
      "location.phone_k": "Telèfon",
      "location.hours_k": "Horari",
      "location.hours_v": "Dt–Dv 10:00–19:30 · Ds 10:00–15:00",
      "location.instagram_k": "Instagram",
      "footer.about": "Perruqueria orgànica i vegana a Sant Antoni, Barcelona. Cura capil·lar conscient des del cor del barri.",
      "footer.nav_title": "Navegació",
      "footer.contact_title": "Contacte",
      "footer.hours_title": "Horari",
      "footer.address": "Passatge de la Llum, 7, Barcelona",
      "hours.closed_days": "Dilluns i diumenge tancat",
      "footer.rights": "© 2026 Raíz Peluquería. Tots els drets reservats.",
      "footer.demo": "Lloc de demostració",
      "_title": "Raíz Peluquería — Perruqueria Natural a Sant Antoni, Barcelona",
      "_description": "Perruqueria orgànica i vegana a Sant Antoni, Barcelona. Talls, color vegà, reflexos, allisats i tractaments capil·lars. 4.9★ a Google amb més de 700 ressenyes."
    },
    en: {
      "logo.sub": "Hair Studio",
      "nav.about": "About us",
      "nav.services": "Services",
      "nav.reviews": "Reviews",
      "nav.booking": "Book now",
      "nav.contact": "Contact",
      "nav.cta": "Book appointment",
      "hero.badge": "· 310 reviews on Google",
      "hero.title": "<em>Organic</em> beauty, on your schedule",
      "hero.lede": "Vegan, organic hair salon in the heart of Sant Antoni. Handcrafted cuts, colour, highlights and hair treatments, with instant online booking.",
      "hero.cta1": "Book appointment",
      "hero.cta2": "View services",
      "about.tag": "Passatge de la Llum, 7",
      "about.eyebrow": "From Sant Antoni, for Barcelona",
      "about.title": "A 100% organic salon, made for your hair and skin",
      "about.p1": "Raíz Peluquería was born from a simple idea: care for your image without giving up clean ingredients. We work with vegan colour, precision techniques and botanical products in a modern, minimalist and warm space, one minute from Sant Antoni metro.",
      "about.p2": "Women's, men's and children's cuts, highlights, straightening, hair treatments and brow shaping: every service is tailored to you, with the same care as if you were our only client of the day.",
      "about.director": "Director · Raíz Peluquería",
      "about.director_role": "Vegan colour & technical direction",
      "about.stat1": "310 reviews on Google",
      "about.stat2": "95 reviews on Fresha",
      "about.stat3": "Vegan colour",
      "services.eyebrow": "Service menu",
      "services.title": "Every service, made for you",
      "services.subtitle": "The full menu, exactly as listed on Fresha: tap a category to see the duration and price of each service.",
      "services.foot": "Prices and durations as listed on our Fresha page. Final availability and booking are confirmed there.",
      "services.foot_cta": "View & book on Fresha",
      "reviews.eyebrow": "What people say about us",
      "reviews.title": "What our clients say",
      "reviews.subtitle": "Sample reviews for this demo: this is how your clients' reviews would look.",
      "reviews.badge_fresha": "310 reviews · Google",
      "reviews.badge_treatwell": "95 reviews · Fresha",
      "reviews.r1": "\"They explained every step of the colour and I left with exactly the hair I wanted.\"",
      "reviews.r2": "\"Came in for a haircut and beard trim and left feeling brand new. Great atmosphere.\"",
      "reviews.r3": "\"Sara understood what I wanted straight away. I'll definitely be back.\"",
      "reviews.r4": "\"I've been bringing my son for a year: endless patience and a perfect cut.\"",
      "reviews.r5": "\"Genuinely natural products; my hair feels much healthier.\"",
      "reviews.r6": "\"Booked online in a minute and Leo saw me right on time. Highly recommended.\"",
      "booking.eyebrow": "Online booking",
      "booking.title": "Pick your appointment, no calls needed",
      "booking.subtitle": "We manage our diary through Fresha: choose your service, stylist and time, and get instant confirmation.",
      "days.mon": "Monday",
      "days.tue_fri": "Tuesday – Friday",
      "days.sat": "Saturday",
      "days.sun": "Sunday",
      "hours.closed": "Closed",
      "booking.cta": "Book on Fresha ↗",
      "booking.embed_label": "Secure booking, powered by Fresha",
      "booking.embed_cta": "Check availability and book",
      "booking.embed_point1": "Instant confirmation by email and SMS",
      "booking.embed_point2": "Choose your stylist, service and time",
      "booking.embed_point3": "Cancel or reschedule whenever you need",
      "booking.embed_note": "Fresha doesn't allow its calendar to be embedded inside other websites; the button takes you straight to our official booking page.",
      "gallery.eyebrow": "@raiz.peluqueria",
      "gallery.title": "Our work, up close",
      "gallery.cta": "Follow us on Instagram ↗",
      "location.eyebrow": "Find us",
      "location.title": "One minute from Sant Antoni metro",
      "location.p1": "We're right in the heart of Sant Antoni, two streets from the market.",
      "location.address_k": "Address",
      "location.phone_k": "Phone",
      "location.hours_k": "Hours",
      "location.hours_v": "Tue–Fri 10:00–19:30 · Sat 10:00–15:00",
      "location.instagram_k": "Instagram",
      "footer.about": "Organic, vegan hair salon in Sant Antoni, Barcelona. Conscious hair care from the heart of the neighbourhood.",
      "footer.nav_title": "Navigation",
      "footer.contact_title": "Contact",
      "footer.hours_title": "Hours",
      "footer.address": "Passatge de la Llum, 7, Barcelona",
      "hours.closed_days": "Closed Mondays and Sundays",
      "footer.rights": "© 2026 Raíz Peluquería. All rights reserved.",
      "footer.demo": "Demo website",
      "_title": "Raíz Peluquería — Natural Hair Salon in Sant Antoni, Barcelona",
      "_description": "Organic, vegan hair salon in Sant Antoni, Barcelona. Cuts, vegan colour, highlights, straightening and hair treatments. 4.9★ on Google with 700+ reviews."
    }
  };

  /* =========================================================
     Service menu — full real Fresha catalogue, by category
     ========================================================= */
  var UI_WORDS = {
    es: { from: "Desde", free: "Gratis" },
    ca: { from: "Des de", free: "Gratuït" },
    en: { from: "From", free: "Free" }
  };

  var servicesData = [
    {
      key: "cortes",
      title: { es: "Cortes", ca: "Talls", en: "Haircuts" },
      items: [
        { name: { es: "Corte Mujer", ca: "Tall Dona", en: "Women's Haircut" }, duration: "45 min", price: "29,90 €" },
        { name: { es: "Corte de Flequillo", ca: "Tall de Serrell", en: "Fringe Trim" }, duration: "15 min", price: "8,90 €" },
        { name: { es: "Corte Cambio de Look", ca: "Tall Canvi de Look", en: "Change-Your-Look Cut" }, duration: "1h 15 min", price: "41,90 €" },
        { name: { es: "Retirada de Extensiones", ca: "Retirada d'Extensions", en: "Extension Removal" }, duration: "1h", price: "53 €" }
      ]
    },
    {
      key: "corte_hombres",
      title: { es: "Corte Hombres", ca: "Tall Home", en: "Men's Haircuts" },
      items: [
        { name: { es: "Corte Hombre", ca: "Tall Home", en: "Men's Haircut" }, duration: "45 min", price: "21,90 €" }
      ]
    },
    {
      key: "corte_ninos",
      title: { es: "Corte Niños y Adolescentes", ca: "Tall Infantil i Adolescents", en: "Kids' & Teens' Haircuts" },
      items: [
        { name: { es: "Corte Niño (hasta 10 años)", ca: "Tall Nen (fins a 10 anys)", en: "Boy's Haircut (up to 10 years)" }, duration: "30 min", price: "20,90 €" },
        { name: { es: "Corte Niña (hasta 10 años)", ca: "Tall Nena (fins a 10 anys)", en: "Girl's Haircut (up to 10 years)" }, duration: "30 min", price: "25,90 €" }
      ]
    },
    {
      key: "color",
      title: { es: "Color", ca: "Color", en: "Colour" },
      items: [
        { name: { es: "Color Vegano Raíz", ca: "Color Vegà d'Arrel", en: "Vegan Root Colour" }, duration: "1h 15 min", price: "35,90 €" },
        { name: { es: "Color Vegano Pelo Extracorto", ca: "Color Vegà Cabell Extracurt", en: "Vegan Colour — Extra-Short Hair" }, duration: "1h 30 min", price: "51,90 €" },
        { name: { es: "Color Vegano Media Melena", ca: "Color Vegà Melena Mitjana", en: "Vegan Colour — Medium Hair" }, duration: "1h 30 min", price: "61,90 €" },
        { name: { es: "Color Vegano Pelo Largo", ca: "Color Vegà Cabell Llarg", en: "Vegan Colour — Long Hair" }, duration: "2h", price: "73,90 €" },
        { name: { es: "Color Vegano XXL", ca: "Color Vegà XXL", en: "Vegan Colour XXL" }, duration: "1h", price: "84,90 €" },
        { name: { es: "Matiz Pelo Extracorto", ca: "Matís Cabell Extracurt", en: "Toner — Extra-Short Hair" }, duration: "15 min", price: "25,90 €" },
        { name: { es: "Matiz Pelo Corto", ca: "Matís Cabell Curt", en: "Toner — Short Hair" }, duration: "15 min", price: "28,90 €" },
        { name: { es: "Matiz Media Melena", ca: "Matís Melena Mitjana", en: "Toner — Medium Hair" }, duration: "30 min", price: "31,90 €" },
        { name: { es: "Matiz Pelo Largo", ca: "Matís Cabell Llarg", en: "Toner — Long Hair" }, duration: "30 min", price: "37,90 €" },
        { name: { es: "Matiz Pelo Extra Largo", ca: "Matís Cabell Extra Llarg", en: "Toner — Extra-Long Hair" }, duration: "1h 15 min", price: "41,90 €" }
      ]
    },
    {
      key: "mechas",
      title: { es: "Mechas y Decoloración", ca: "Reflexos i Decoloració", en: "Highlights & Bleaching" },
      items: [
        { name: { es: "Mechas Zona T", ca: "Reflexos Zona T", en: "T-Zone Highlights" }, duration: "1h 30 min", price: "52,90 €" },
        { name: { es: "Mechas Pelo Corto", ca: "Reflexos Cabell Curt", en: "Highlights — Short Hair" }, duration: "1h 45 min", price: "61,90 €" },
        { name: { es: "Mechas Media Melena", ca: "Reflexos Melena Mitjana", en: "Highlights — Medium Hair" }, duration: "1h 45 min", price: "65,90 €" },
        { name: { es: "Mechas Pelo Largo", ca: "Reflexos Cabell Llarg", en: "Highlights — Long Hair" }, duration: "1h 45 min", price: "97,00 €" },
        { name: { es: "Mechas Pelo XXL", ca: "Reflexos Cabell XXL", en: "Highlights XXL" }, duration: "2h", price: "127,90 €" }
      ]
    },
    {
      key: "alisados",
      title: { es: "Alisados", ca: "Allisats", en: "Straightening" },
      items: [
        { name: { es: "Alisado Vegano Pelo Corto", ca: "Allisat Vegà Cabell Curt", en: "Vegan Straightening — Short Hair" }, duration: "3h", price: "154 €" },
        { name: { es: "Alisado Vegano Media Melena", ca: "Allisat Vegà Melena Mitjana", en: "Vegan Straightening — Medium Hair" }, duration: "3h", price: "179 €" },
        { name: { es: "Alisado Vegano Pelo Largo", ca: "Allisat Vegà Cabell Llarg", en: "Vegan Straightening — Long Hair" }, duration: "3h 30 min", price: "260 €" },
        { name: { es: "Alisado Vegano Extra Largo (XXL)", ca: "Allisat Vegà Extra Llarg (XXL)", en: "Vegan Straightening — Extra-Long (XXL)" }, duration: "4h 30 min", price: "296 €" }
      ]
    },
    {
      key: "peinados",
      title: { es: "Peinados", ca: "Pentinats", en: "Styling" },
      items: [
        { name: { es: "Express Corto", ca: "Express Curt", en: "Express — Short Hair" }, duration: "25 min", price: "13,90 €" },
        { name: { es: "Express Medio (solo mujeres)", ca: "Express Mitjà (només dones)", en: "Express — Medium (women only)" }, duration: "30 min", price: "16,90 €" },
        { name: { es: "Express Largo (solo mujeres)", ca: "Express Llarg (només dones)", en: "Express — Long (women only)" }, duration: "45 min", price: "25,90 €" },
        { name: { es: "Secado Pelo Extracorto", ca: "Assecat Cabell Extracurt", en: "Blow-Dry — Extra-Short Hair" }, duration: "30 min", price: "19,90 €" },
        { name: { es: "Secado Pelo Corto", ca: "Assecat Cabell Curt", en: "Blow-Dry — Short Hair" }, duration: "45 min", price: "21,90 €" },
        { name: { es: "Secado Media Melena", ca: "Assecat Melena Mitjana", en: "Blow-Dry — Medium Hair" }, duration: "45 min", price: "29,90 €" },
        { name: { es: "Secado Pelo Largo", ca: "Assecat Cabell Llarg", en: "Blow-Dry — Long Hair" }, duration: "1h", price: "38,90 €" },
        { name: { es: "Secado Pelo Extra Largo", ca: "Assecat Cabell Extra Llarg", en: "Blow-Dry — Extra-Long Hair" }, duration: "1h 30 min", price: "44,90 €" },
        { name: { es: "Ondas / Bucles / Rizos", ca: "Onades / Rínxols", en: "Waves & Curls" }, duration: "45 min", price: "42,90 €" },
        { name: { es: "Suplemento Plancha", ca: "Suplement Planxa", en: "Flat-Iron Add-On" }, duration: "20 min", price: "16 €" }
      ]
    },
    {
      key: "tratamientos",
      title: { es: "Tratamientos Capilares", ca: "Tractaments Capil·lars", en: "Hair Treatments" },
      items: [
        { name: { es: "Tratamiento Hidratación Capilar", ca: "Tractament Hidratació Capil·lar", en: "Hair Hydration Treatment" }, duration: "30 min", price: "16 €" },
        { name: { es: "Tratamiento Nova Fibra + KB3", ca: "Tractament Nova Fibra + KB3", en: "Nova Fibra + KB3 Treatment" }, duration: "25 min", price: "26 €" },
        { name: { es: "Tratamiento Shine Smooth + Pack Regalo", ca: "Tractament Shine Smooth + Pack Regal", en: "Shine Smooth Treatment + Gift Pack" }, duration: "1h 15 min", price: "94,90 €" },
        { name: { es: "Tratamiento Leaving Anti-Frizz — Corto", ca: "Tractament Leaving Antifrizz — Curt", en: "Leave-In Anti-Frizz Treatment — Short" }, duration: "1h 40 min", price: "95,90 €" },
        { name: { es: "Reconstrucción Profunda Nova Fibra", ca: "Reconstrucció Profunda Nova Fibra", en: "Nova Fibra Deep Reconstruction" }, duration: "2h", price: "105,90 €" },
        { name: { es: "Artic Nutry — Tratamiento Tridimensional Capilar", ca: "Artic Nutry — Tractament Tridimensional Capil·lar", en: "Artic Nutry — 3D Hair Treatment" }, duration: "2h", price: "104,90 €" },
        { name: { es: "Tratamiento Leaving Anti-Frizz — Media Melena", ca: "Tractament Leaving Antifrizz — Melena Mitjana", en: "Leave-In Anti-Frizz Treatment — Medium" }, duration: "1h 40 min", price: "126,00 €" },
        { name: { es: "Tratamiento Leaving Anti-Frizz — Largo", ca: "Tractament Leaving Antifrizz — Llarg", en: "Leave-In Anti-Frizz Treatment — Long" }, duration: "1h 40 min", price: "133,00 €" },
        { name: { es: "Tratamiento Lifting Pelo Medio", ca: "Tractament Lifting Cabell Mitjà", en: "Lifting Treatment — Medium Hair" }, duration: "1h 30 min", price: "73,90 €" },
        { name: { es: "Hidratación Antifrizz Efecto — Medio", ca: "Hidratació Antifrizz Efecte — Mitjà", en: "Anti-Frizz Hydration Effect — Medium" }, duration: "1h 50 min", price: "132,90 €", from: true },
        { name: { es: "Tratamiento Leaving Anti-Frizz — Extra Largo", ca: "Tractament Leaving Antifrizz — Extra Llarg", en: "Leave-In Anti-Frizz Treatment — Extra-Long" }, duration: "1h 40 min", price: "139,00 €" },
        { name: { es: "S.O.S. Atlantic — Tratamiento Reconstructor Capilar", ca: "S.O.S. Atlantic — Tractament Reconstructor Capil·lar", en: "S.O.S. Atlantic — Hair Reconstructor Treatment" }, duration: "2h 15 min", price: "74,90 €" },
        { name: { es: "Hidratación Antifrizz Efecto Botox — Corto", ca: "Hidratació Antifrizz Efecte Botox — Curt", en: "Anti-Frizz Botox Effect Hydration — Short" }, duration: "2h 15 min", price: "117,90 €", from: true },
        { name: { es: "Hidratación Antifrizz Efecto Botox — Largo", ca: "Hidratació Antifrizz Efecte Botox — Llarg", en: "Anti-Frizz Botox Effect Hydration — Long" }, duration: "2h 15 min", price: "154,90 €" },
        { name: { es: "Hidratación Antifrizz Efecto Botox — Extra Largo", ca: "Hidratació Antifrizz Efecte Botox — Extra Llarg", en: "Anti-Frizz Botox Effect Hydration — Extra-Long" }, duration: "2h 30 min", price: "175,90 €" }
      ]
    },
    {
      key: "cejas",
      title: { es: "Definición y Depilación de Cejas", ca: "Definició i Depilació de Celles", en: "Brow Shaping & Waxing" },
      items: [
        { name: { es: "Depilación Cejas con Pinzas", ca: "Depilació Celles amb Pinces", en: "Brow Waxing with Tweezers" }, duration: "15 min", price: "8 €" },
        { name: { es: "Depilación Cejas / Diseño", ca: "Depilació Celles / Disseny", en: "Brow Waxing & Shaping" }, duration: "15 min", price: "13 €" }
      ]
    },
    {
      key: "depilacion",
      title: { es: "Depilación", ca: "Depilació", en: "Waxing" },
      items: [
        { name: { es: "Depilación Cera Labio Superior", ca: "Depilació Cera Llavi Superior", en: "Upper Lip Waxing" }, duration: "15 min", price: "8 €" }
      ]
    },
    {
      key: "asesoramiento",
      title: { es: "Asesoramiento", ca: "Assessorament", en: "Consultation" },
      items: [
        { name: { es: "Diagnóstico", ca: "Diagnòstic", en: "Consultation" }, duration: "30 min", price: "free" }
      ]
    }
  ];

  var openCategories = {};

  function lowestPrice(items) {
    var min = null;
    items.forEach(function (it) {
      if (it.price === "free") return;
      var n = parseFloat(it.price.replace(/[^\d,]/g, "").replace(",", "."));
      if (!isNaN(n) && (min === null || n < min)) min = n;
    });
    return min;
  }

  function renderServices(lang) {
    var container = document.getElementById("servicesAccordion");
    if (!container) return;
    var words = UI_WORDS[lang] || UI_WORDS.es;
    container.innerHTML = "";

    servicesData.forEach(function (cat) {
      var item = document.createElement("div");
      item.className = "acc-item";
      if (openCategories[cat.key]) item.classList.add("is-open");

      var min = lowestPrice(cat.items);
      var fromLabel = cat.key === "asesoramiento" ? words.free : (min !== null ? words.from + " " + min.toFixed(2).replace(".", ",").replace(",00", "") + " €" : "");

      var header = document.createElement("button");
      header.type = "button";
      header.className = "acc-header";
      header.setAttribute("aria-expanded", openCategories[cat.key] ? "true" : "false");
      header.innerHTML =
        '<span class="acc-header-left"><span class="icon" aria-hidden="true">&#10087;</span><h3>' + cat.title[lang] + '</h3>' +
        '<span class="count">' + cat.items.length + (lang === "en" ? (cat.items.length === 1 ? " service" : " services") : (lang === "ca" ? " serveis" : " servicios")) + '</span></span>' +
        '<span class="acc-header-right"><span class="from">' + fromLabel + '</span><span class="acc-plus" aria-hidden="true"></span></span>';

      var panel = document.createElement("div");
      panel.className = "acc-panel";

      var inner = document.createElement("div");
      inner.className = "acc-panel-inner";
      cat.items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "acc-row";
        var priceText = it.price === "free" ? words.free : (it.from ? words.from + " " + it.price : it.price);
        row.innerHTML =
          '<span class="name-wrap"><span class="name">' + it.name[lang] + '</span><span class="duration">' + it.duration + '</span></span>' +
          '<span class="price">' + priceText + '</span>';
        inner.appendChild(row);
      });
      panel.appendChild(inner);

      if (openCategories[cat.key]) panel.style.height = "auto";
      else panel.style.height = "0px";

      header.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        if (isOpen) {
          panel.style.height = panel.scrollHeight + "px";
          requestAnimationFrame(function () { panel.style.height = "0px"; });
          item.classList.remove("is-open");
          header.setAttribute("aria-expanded", "false");
          delete openCategories[cat.key];
        } else {
          panel.style.height = panel.scrollHeight + "px";
          item.classList.add("is-open");
          header.setAttribute("aria-expanded", "true");
          openCategories[cat.key] = true;
          panel.addEventListener("transitionend", function onEnd() {
            if (item.classList.contains("is-open")) panel.style.height = "auto";
            panel.removeEventListener("transitionend", onEnd);
          });
        }
      });

      item.appendChild(header);
      item.appendChild(panel);
      container.appendChild(item);
    });
  }

  var STORAGE_KEY = "raiz_lang";
  var supported = ["es", "ca", "en"];

  function getInitialLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && supported.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return "es";
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.es;

    document.documentElement.setAttribute("lang", lang);
    renderServices(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    if (dict._title) document.title = dict._title;
    if (dict._description) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", dict._description);
    }

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(getInitialLang());

  /* =========================================================
     Header scroll state
     ========================================================= */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =========================================================
     Mobile nav
     ========================================================= */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  var mobileClose = document.getElementById("mobileClose");

  function openMobileNav() {
    mobileNav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  navToggle.addEventListener("click", openMobileNav);
  mobileClose.addEventListener("click", closeMobileNav);
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMobileNav);
  });

  /* =========================================================
     Reveal on scroll
     ========================================================= */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
