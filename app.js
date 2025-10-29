function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ser Magia · Landing v1.2 (optimized) */
const links = [{
  href: "#inicio",
  label: "Inicio"
}, {
  href: "#servicios",
  label: "Servicios"
}, {
  href: "#vinito",
  label: "Vinito y Tarot"
}, {
  href: "#pack",
  label: "El Pack"
}, {
  href: "#lecturas",
  label: "Lecturas"
}, {
  href: "#formacion",
  label: "Formación"
}, {
  href: "#agenda",
  label: "Agenda"
}, {
  href: "#contacto",
  label: "Turnos"
}];
const ASSETS = {
  cielo: "./assets/cielo.webp",
  packImg: "./assets/pack.webp",
  tarotyvino: "./assets/tarotyvino.webp",
  heroSun: "./assets/cartas.webp",
  heroBg: "./assets/background-tarot.webp",
  backgroundTarotLila: "./assets/background-tarot-lila.webp",
  cieloEspejo: "./assets/cieloespejo2.webp",
  estrellaMujer: "./assets/extrella-galaxia.webp",
  lavandaCampo: "./assets/lavanda-campo.webp",
  manosLuna: "./assets/manos-luna.webp"
};

// Datos de servicios
const SERVICIOS = [{
  title: "Tarot & Vinito",
  description: "Encuentros íntimos para compartir una lectura de Tarot acompañada de una copa de vino.",
  bgImage: ASSETS.tarotyvino
}, {
  title: "Pack",
  description: "Paquetes especiales para procesos y seguimientos con varios encuentros.",
  bgImage: ASSETS.packImg
}, {
  title: "Lecturas",
  description: "Lecturas individuales de Tarot enfocadas en claridad, dirección y bienestar.",
  bgImage: ASSETS.cielo
}];

// Datos de pack
const PACK_COMPONENTS = [{
  n: 'Akasha',
  d: 'Apertura de Registros Akáshicos. Conexión con la biblioteca del alma.'
}, {
  n: 'Tarot',
  d: 'Exploración simbólica para claridad y decisiones conscientes.'
}, {
  n: 'Constelaciones',
  d: 'Revelar y sanar patrones familiares/sistémicos con apoyo de cartas.'
}, {
  n: 'Sanación',
  d: 'Liberación de bloqueos emocionales y energéticos; equilibrio interno.'
}, {
  n: 'Plan de acción',
  d: 'Hoja de ruta personalizada con pasos concretos.'
}];

// Datos de lecturas
const LECTURAS = [{
  t: 'Tarot Genealógico',
  d: `En este espacio mágico y creativo, te invito a sumergirte en un viaje profundo
hacia tu árbol genealógico. Es un encuentro transformador donde
exploraremos la poderosa información ancestral que reside en vos y que te
permitirá modificar, transformar y sanar aspectos de tu vida.`,
  precio: '$22.000',
  dur: '90 min'
}, {
  t: 'Tarot Anual',
  d: `En este enriquecedor y nutritivo encuentro, te ofreceré una oportunidad única
para descubrir la energía disponible para ti y lo que el futuro cercano tiene
reservado. Trabajaremos con las casas zodiacales, abordando todos los
aspectos fundamentales de tu vida: tu energía actual, tus oportunidades
financieras, recursos, comunicación, familia, proyectos, salud, trabajo,
pareja, sexualidad, misión en la vida, profesión, vínculos e inconsciente.`,
  precio: '$20.000',
  dur: '75 min'
}, {
  t: 'Tarot Akáshico',
  d: `Combina dos prácticas transformadoras para brindarte una experiencia
única de empoderamiento y crecimiento personal.
El Tarot actúa como una valiosa herramienta que nos revela información
sobre tu energía actual, permitiéndote comprender mejor tu presente y las
oportunidades que se presentan en tu camino.`,
  precio: '$24.000',
  dur: '90 min'
}];

// Datos de agenda
const AGENDA_EVENTOS = window.AGENDA_EVENTOS && window.AGENDA_EVENTOS.length ? window.AGENDA_EVENTOS : [{
  f: 'Sáb 16 Nov · 18:00',
  t: 'Vinito y Tarot (Microcentro)',
  cupos: 'Quedan 6'
}, {
  f: 'Vie 29 Nov · 19:00',
  t: 'Vinito y Tarot a domicilio',
  cupos: 'Cupos 10–30'
}, {
  f: 'Sáb 14 Dic · 10:00',
  t: 'Formación Tarot – Módulo 1',
  cupos: 'Abierta inscripción'
}];

// Componente memoizado para tarjeta de servicio
const ServiceCard = React.memo(({
  title,
  description,
  bgImage
}) => /*#__PURE__*/React.createElement("div", {
  className: "rounded-2xl overflow-hidden shadow-sm bg-center bg-cover text-white min-h-[420px] md:min-h-[520px]",
  style: {
    backgroundImage: `url(${bgImage})`
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-black/35 p-6 backdrop-blur-[1px] h-full"
}, /*#__PURE__*/React.createElement("h3", {
  className: "new-rocker-regular text-[1.56rem] mb-2"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "text-white/90 text-[1.25rem]"
}, description), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.link/ylh91z",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "inline-block mt-4 rounded-full bg-[#5A32B5] text-white px-5 py-2 text-sm hover:opacity-90 transition"
}, "Reservar"))));

// Componente memoizado para tarjeta de lectura
const LecturaCard = React.memo(({
  t,
  d,
  precio,
  dur
}) => /*#__PURE__*/React.createElement("article", {
  className: "rounded-3xl border bg-white/65 shadow-sm p-6 relative"
}, /*#__PURE__*/React.createElement("div", {
  className: "pb-12"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-xs font-bold uppercase tracking-wide text-[#350352] mb-2"
}, "Encuentro"), /*#__PURE__*/React.createElement("h3", {
  className: "new-rocker-regular title-white glow-violet text-3xl md:text-4xl mb-1 text-[#8a0bd2]"
}, t), /*#__PURE__*/React.createElement("p", {
  className: "text-xs md:text-sm text-[#350352]/80 font-semibold"
}, d)), /*#__PURE__*/React.createElement("p", {
  className: "text-lg font-bold text-[#350352]/70 absolute left-4 bottom-4"
}, precio, " \xB7 ", dur), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.link/ylh91z",
  className: "rounded-full border px-4 py-2 text-sm absolute right-4 bottom-4 font-bold"
}, "Solicitar turnos")));

// Componente memoizado para evento de agenda
const EventoCard = React.memo(({
  f,
  t,
  cupos
}) => /*#__PURE__*/React.createElement("div", {
  className: "rounded-3xl bg-white/45 backdrop-blur p-6 border shadow-sm"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-[#5c007d]/70"
}, f), /*#__PURE__*/React.createElement("p", {
  className: "new-rocker-regular title-white glow-violet text-xl"
}, t), /*#__PURE__*/React.createElement("p", {
  className: "text-xs text-[#5c007d]/70 mb-4"
}, cupos), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-3"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://wa.link/ylh91z",
  className: "rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-sm"
}, "Reservar"), /*#__PURE__*/React.createElement("a", {
  href: "#contacto",
  className: "rounded-full border px-4 py-2 text-sm"
}, "Consultar"))));
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = React.useCallback(() => setOpen(false), []);
  return /*#__PURE__*/React.createElement("header", {
    className: `site-header fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'shadow-sm' : ''} bg-[#5A32B5]/20 backdrop-blur-2xl border-b border-[#5A32B5]/20`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 py-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    className: "new-rocker-regular title-white glow-violet text-xl tracking-wide"
  }, "Ser", /*#__PURE__*/React.createElement("span", {
    className: "text-[#d980f9]"
  }, "Magia")), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center gap-7"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    className: "text-sm hover:text-[#d980f9] transition"
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-sm hover:opacity-90 transition"
  }, "Reservar")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Abrir men\xFA",
    className: "md:hidden inline-flex items-center justify-center rounded-full border px-3 py-2",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-current"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-current"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block w-5 h-0.5 bg-current"
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden border-t bg-[#5A32B5]/20 backdrop-blur-2xl border-[#5A32B5]/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 flex flex-col gap-3"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    className: "py-2 text-sm",
    onClick: closeMenu
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-center text-sm",
    onClick: closeMenu
  }, "Reservar por WhatsApp"))));
}
function ContactForm() {
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const handleChange = React.useCallback(e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);
  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
    const to = "hola@sermagia.tarot";
    const subject = encodeURIComponent(formData.asunto || 'Consulta desde la web');
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\n${formData.mensaje}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }, [formData]);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "grid gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("input", {
    name: "nombre",
    value: formData.nombre,
    onChange: handleChange,
    className: "rounded-xl border px-4 py-3 bg-[#000] text-white placeholder:text-[#d980f9]/60",
    placeholder: "Nombre"
  }), /*#__PURE__*/React.createElement("input", {
    name: "email",
    value: formData.email,
    onChange: handleChange,
    className: "rounded-xl border px-4 py-3 bg-[#000] text-white placeholder:text-[#d980f9]/60",
    placeholder: "Email"
  })), /*#__PURE__*/React.createElement("input", {
    name: "asunto",
    value: formData.asunto,
    onChange: handleChange,
    className: "rounded-xl border px-4 py-3 bg-[#000] text-white placeholder:text-[#d980f9]/60",
    placeholder: "Asunto"
  }), /*#__PURE__*/React.createElement("textarea", {
    name: "mensaje",
    value: formData.mensaje,
    onChange: handleChange,
    className: "rounded-xl border px-4 py-3 bg-[#000] text-white placeholder:text-[#d980f9]/60",
    rows: 4,
    placeholder: "Contame en qu\xE9 te puedo acompa\xF1ar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm w-max"
  }, "Enviar"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full border px-5 py-3 text-sm"
  }, "WhatsApp")));
}
function App() {
  // Estado para forzar re-render cuando se actualice la agenda
  const [agendaVersion, setAgendaVersion] = React.useState(0);
  React.useEffect(() => {
    // Escuchar evento de actualización de agenda
    const handleAgendaUpdate = () => {
      console.log('[App] 🔄 Agenda actualizada, re-renderizando...');
      setAgendaVersion(v => v + 1);
    };
    window.addEventListener('agendaUpdated', handleAgendaUpdate);
    return () => window.removeEventListener('agendaUpdated', handleAgendaUpdate);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    className: "pt-28 min-h-[100svh] relative",
    style: {
      backgroundImage: `url(${ASSETS.heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    id: "hero111",
    className: "rounded-3xl bg-[#5A32B5]/20 backdrop-blur-2xl border border-[#5A32B5]/20 p-6 md:p-10 shadow-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uppercase tracking-[0.25em] text-xs text-[#d980f9] mb-4"
  }, "Tarot \xB7 Akasha \xB7 Sanaci\xF3n"), /*#__PURE__*/React.createElement("h1", {
    className: "new-rocker-regular title-white glow-violet text-4xl md:text-5xl leading-tight mb-6"
  }, "Acompa\xF1amiento amoroso para tu ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#d980f9]"
  }, "autoconocimiento")), /*#__PURE__*/React.createElement("p", {
    className: "mb-5 text-white font-bold"
  }, "Tarotista y Ser en eterna b\xFAsqueda y construcci\xF3n. Hace m\xE1s de siete a\xF1os que acompa\xF1o procesos de sanaci\xF3n y auto-descubrimiento a trav\xE9s del Tarot y los Registros Ak\xE1shicos."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    className: "rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm"
  }, "Ver servicios"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full border border-[#d980f9] text-[#d980f9] px-5 py-3 text-sm"
  }, "Solicitar turnos"))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden  flex items-center justify-center p-3 h-[60vh] md:h-[66vh]"
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.heroSun,
    alt: "Carta El Sol",
    className: "max-h-full max-w-full object-contain",
    width: "600",
    height: "900",
    fetchpriority: "high"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: " bg-[#3d1a66] text-[#000] p-6 md:p-10 text-center aura-effect"
  }, /*#__PURE__*/React.createElement("p", {
    className: "new-rocker-regular title-white glow-violet text-3xl md:text-5xl"
  }, "\"Tra\xE9 ternura a tu cuerpo. Todo empieza en tu respiraci\xF3n.\"")))), /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    className: "py-12 md:py-20",
    style: {
      backgroundImage: `url(${ASSETS.backgroundTarotLila})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular text-[#ffffff] text-[2.5rem] md:text-[4rem] mb-8"
  }, "Servicios"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, SERVICIOS.map((servicio, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: i
  }, servicio)))))), /*#__PURE__*/React.createElement("section", {
    id: "vinito",
    className: "py-12 md:py-20 min-h-[100svh] flex items-center",
    style: {
      backgroundImage: `url(${ASSETS.estrellaMujer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:ml-auto md:w-1/2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-3xl md:text-4xl mb-3"
  }, "Vinito y Tarot"), /*#__PURE__*/React.createElement("p", {
    className: "text-white mb-4 text-lg md:text-xl"
  }, "Bloque de 2h30 para sumergirte en el Tarot a trav\xE9s de din\xE1micas l\xFAdicas, risas y vino."), /*#__PURE__*/React.createElement("ul", {
    className: "text-base md:text-lg space-y-2 text-white list-disc pl-5"
  }, /*#__PURE__*/React.createElement("li", null, "Presencial (10 a 22 personas)."), /*#__PURE__*/React.createElement("li", null, "A domicilio 1: hasta 15 personas. Incluye vino, juegos y sobre de cartas + lectura por WhatsApp."), /*#__PURE__*/React.createElement("li", null, "A domicilio 2: hasta 30 personas. Incluye vino, juegos y sesi\xF3n para la/el anfitri\xF3n.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full bg-[#d980f9] text-[#3d1a66] font-semibold px-5 py-3 text-sm hover:opacity-90 transition"
  }, "Quiero sumarme"), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "rounded-full border border-[#d980f9] text-[#d980f9] px-5 py-3 text-sm hover:bg-[#d980f9] hover:text-[#3d1a66] transition"
  }, "Consultar disponibilidad"))))), /*#__PURE__*/React.createElement("section", {
    id: "pack",
    className: "py-8 md:py-16 min-h-[100svh] flex items-center",
    style: {
      backgroundImage: `url(${ASSETS.manosLuna})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-white/80 backdrop-blur p-6 md:p-10 shadow"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-3xl mb-2"
  }, "El Pack \xB7 Un viaje de autoconocimiento"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-[#d980f9]/80 mb-6 max-w-prose"
  }, "Dirigido a almas inquietas que desean transformaci\xF3n positiva. Metodolog\xEDa en 5 componentes:"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-5 gap-4 text-sm"
  }, PACK_COMPONENTS.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rounded-2xl border bg-white p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-medium mb-1"
  }, k.n), /*#__PURE__*/React.createElement("p", {
    className: "text-[#d980f9]/80"
  }, k.d))))))), /*#__PURE__*/React.createElement("section", {
    id: "lecturas",
    className: "py-8 md:py-16 min-h-[80svh] md:min-h-[100svh] flex items-center justify-center lazy-bg",
    "data-bg": ASSETS.lavandaCampo,
    style: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 flex-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-6xl mb-6"
  }, "Lecturas de Tarot"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, LECTURAS.map((c, i) => /*#__PURE__*/React.createElement(LecturaCard, _extends({
    key: i
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    id: "formacion",
    className: "py-8 md:py-16 bg-black"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-2 md:order-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-7xl mb-3"
  }, "Formaci\xF3n & Registros"), /*#__PURE__*/React.createElement("ul", {
    className: "text-sm space-y-3 text-[#d980f9]/80 list-disc pl-5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-base"
  }, "Formaci\xF3n de Tarot para la Evoluci\xF3n:"), " vivencial y pr\xE1ctica (Arcanos Mayores y Menores) para lecturas personales y a otrxs."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-base"
  }, "Iniciaci\xF3n en Registros Ak\xE1shicos \u2013 Nivel 1 y 2:"), " herramienta de sanaci\xF3n personal para acceder al archivo de tu Alma.")), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "mt-5 inline-block rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm"
  }, "Quiero info")), /*#__PURE__*/React.createElement("div", {
    className: "order-1 md:order-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/5] rounded-3xl overflow-hidden shadow-sm flex items-center justify-center bg-black/5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 rounded-3xl pointer-events-none z-20",
    style: {
      boxShadow: 'inset 0 0 60px 28px rgba(0,0,0,0.8)'
    }
  }), /*#__PURE__*/React.createElement("video", {
    "data-src": "./assets/formacion.mp4",
    poster: ASSETS.abstractRosaVerde,
    muted: true,
    playsInline: true,
    loop: true,
    className: "lazy-video w-full h-full object-cover relative z-0"
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "agenda",
    className: "pt-24 md:pt-32 pb-8 md:pb-16 lazy-bg",
    "data-bg": ASSETS.cieloEspejo,
    style: {
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-5xl mb-6 text-center"
  }, "Pr\xF3ximas fechas"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-6"
  }, (window.AGENDA_EVENTOS || AGENDA_EVENTOS).map((e, i) => /*#__PURE__*/React.createElement(EventoCard, _extends({
    key: i
  }, e)))))), /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "py-12 md:py-20 lazy-bg",
    "data-bg": ASSETS.cieloEspejo,
    style: {
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-2xl px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border bg-white/45 backdrop-blur p-8 md:p-10 shadow-sm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "new-rocker-regular title-white glow-violet text-3xl mb-2"
  }, "Turnos & Contacto"), /*#__PURE__*/React.createElement("p", {
    className: "text-[#5c007d]/80 mb-4"
  }, "Todos los servicios requieren se\xF1a para reservar; no reembolsable ante cancelaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.link/ylh91z",
    className: "rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm"
  }, "Reservar por WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hola@sermagia.tarot",
    className: "rounded-full border px-5 py-3 text-sm"
  }, "Escribirme por mail")), /*#__PURE__*/React.createElement(ContactForm, null)))), /*#__PURE__*/React.createElement("footer", {
    className: "py-6 border-t bg-[#8a0bd2] text-white border-[#8a0bd2]/20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white/90"
  }, "\xA9 ", new Date().getFullYear(), " Ser Magia Tarot"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5 text-sm"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/sermagia.tarot",
    className: "text-white hover:text-[#f4dbff]"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-white hover:text-[#f4dbff]"
  }, "Pol\xEDtica de privacidad")))));
}

// Esperar a que termine la carga de agenda antes de renderizar
const root = ReactDOM.createRoot(document.getElementById('root'));

// Si existe la promesa del loader, esperar; sino renderizar inmediatamente
if (window.AGENDA_LOADER_PROMISE) {
  window.AGENDA_LOADER_PROMISE.finally(function() {
    // Recomputar AGENDA_EVENTOS después de que cargue (o falle)
    const AGENDA_EVENTOS_FINAL = window.AGENDA_EVENTOS && window.AGENDA_EVENTOS.length ? window.AGENDA_EVENTOS : [{
      f: 'Sáb 16 Nov · 18:00',
      t: 'Vinito y Tarot (Microcentro)',
      cupos: 'Quedan 6'
    }, {
      f: 'Vie 29 Nov · 19:00',
      t: 'Vinito y Tarot a domicilio',
      cupos: 'Cupos 10–30'
    }, {
      f: 'Sáb 14 Dic · 10:00',
      t: 'Formación Tarot – Módulo 1',
      cupos: 'Abierta inscripción'
    }];
    
    // Actualizar variable global para que el componente use la correcta
    window.AGENDA_EVENTOS = AGENDA_EVENTOS_FINAL;
    
    root.render(/*#__PURE__*/React.createElement(App, null));
  });
} else {
  root.render(/*#__PURE__*/React.createElement(App, null));
}
