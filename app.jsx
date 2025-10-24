/* Ser Magia · Landing v1.2 (optimized) */
const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#vinito", label: "Vinito y Tarot" },
  { href: "#pack", label: "El Pack" },
  { href: "#lecturas", label: "Lecturas" },
  { href: "#formacion", label: "Formación" },
  { href: "#agenda", label: "Agenda" },
  { href: "#contacto", label: "Turnos" },
];

const ASSETS = {
  cielo: "./assets/cielo.webp",
  packImg: "./assets/pack.webp",
  tarotyvino: "./assets/tarotyvino.webp",
  emperatriz: "./assets/emperatriz.jpg",
  heroSun: "./assets/cartas.webp",
  heroBg: "./assets/background-tarot.webp",
  backgroundTarotLila: "./assets/background-tarot-lila.webp",
  cieloEspejo: "./assets/cieloespejo2.webp",
  estrellaMujer: "./assets/extrella-galaxia.webp",
  lavandaCampo: "./assets/lavanda-campo.webp",
  manosLuna: "./assets/manos-luna.webp",
  patronCuadros: "./assets/patron-cuadros-verde-rosa.jpeg",
  patronTejido: "./assets/patron-tejido-rosa-verde.jpeg",
  damero: "./assets/damero-verde-rosa.jpeg",
  abstractRosaVerde: "./assets/abstract-rosa-verde.jpg",
};

// Datos de servicios
const SERVICIOS = [
  {
    title: "Tarot & Vinito",
    description: "Encuentros íntimos para compartir una lectura de Tarot acompañada de una copa de vino.",
    bgImage: ASSETS.tarotyvino
  },
  {
    title: "Pack",
    description: "Paquetes especiales para procesos y seguimientos con varios encuentros.",
    bgImage: ASSETS.packImg
  },
  {
    title: "Lecturas",
    description: "Lecturas individuales de Tarot enfocadas en claridad, dirección y bienestar.",
    bgImage: ASSETS.cielo
  }
];

// Datos de pack
const PACK_COMPONENTS = [
  {n:'Akasha',d:'Apertura de Registros Akáshicos. Conexión con la biblioteca del alma.'},
  {n:'Tarot',d:'Exploración simbólica para claridad y decisiones conscientes.'},
  {n:'Constelaciones',d:'Revelar y sanar patrones familiares/sistémicos con apoyo de cartas.'},
  {n:'Sanación',d:'Liberación de bloqueos emocionales y energéticos; equilibrio interno.'},
  {n:'Plan de acción',d:'Hoja de ruta personalizada con pasos concretos.'},
];

// Datos de lecturas
const LECTURAS = [
  {t:'Tarot Genealógico',d:`En este espacio mágico y creativo, te invito a sumergirte en un viaje profundo
hacia tu árbol genealógico. Es un encuentro transformador donde
exploraremos la poderosa información ancestral que reside en vos y que te
permitirá modificar, transformar y sanar aspectos de tu vida.`, precio:'$22.000', dur:'90 min'},
  {t:'Tarot Anual',d:`En este enriquecedor y nutritivo encuentro, te ofreceré una oportunidad única
para descubrir la energía disponible para ti y lo que el futuro cercano tiene
reservado. Trabajaremos con las casas zodiacales, abordando todos los
aspectos fundamentales de tu vida: tu energía actual, tus oportunidades
financieras, recursos, comunicación, familia, proyectos, salud, trabajo,
pareja, sexualidad, misión en la vida, profesión, vínculos e inconsciente.`, precio:'$20.000', dur:'75 min'},
  {t:'Tarot Akáshico',d:`Combina dos prácticas transformadoras para brindarte una experiencia
única de empoderamiento y crecimiento personal.
El Tarot actúa como una valiosa herramienta que nos revela información
sobre tu energía actual, permitiéndote comprender mejor tu presente y las
oportunidades que se presentan en tu camino.`, precio:'$24.000', dur:'90 min'},
];

// Datos de agenda
const AGENDA_EVENTOS = [
  {f:'Sáb 16 Nov · 18:00', t:'Vinito y Tarot (Microcentro)', cupos:'Quedan 6'},
  {f:'Vie 29 Nov · 19:00', t:'Vinito y Tarot a domicilio', cupos:'Cupos 10–30'},
  {f:'Sáb 14 Dic · 10:00', t:'Formación Tarot – Módulo 1', cupos:'Abierta inscripción'},
];

// Componente memoizado para tarjeta de servicio
const ServiceCard = React.memo(({ title, description, bgImage }) => (
  <div
    className="rounded-2xl overflow-hidden shadow-sm bg-center bg-cover text-white min-h-[420px] md:min-h-[520px]"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="bg-black/35 p-6 backdrop-blur-[1px] h-full">
      <h3 className="new-rocker-regular text-[1.56rem] mb-2">{title}</h3>
      <p className="text-white/90 text-[1.25rem]">{description}</p>
      <a 
        href="https://wa.link/ylh91z" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block mt-4 rounded-full bg-[#5A32B5] text-white px-5 py-2 text-sm hover:opacity-90 transition"
      >
        Reservar
      </a>
    </div>
  </div>
));

// Componente memoizado para tarjeta de lectura
const LecturaCard = React.memo(({ t, d, precio, dur }) => (
  <article className="rounded-3xl border bg-white/65 shadow-sm p-6 relative">
    <div className="pb-12">
      <p className="text-xs font-bold uppercase tracking-wide text-[#350352] mb-2">Encuentro</p>
      <h3 className="new-rocker-regular title-white glow-violet text-3xl md:text-4xl mb-1 text-[#8a0bd2]">{t}</h3>
      <p className="text-xs md:text-sm text-[#350352]/80 font-semibold">{d}</p>
    </div>
    <p className="text-lg font-bold text-[#350352]/70 absolute left-4 bottom-4">{precio} · {dur}</p>
    <a href="https://wa.link/ylh91z" className="rounded-full border px-4 py-2 text-sm absolute right-4 bottom-4 font-bold">
      Solicitar turnos
    </a>
  </article>
));

// Componente memoizado para evento de agenda
const EventoCard = React.memo(({ f, t, cupos }) => (
  <div className="rounded-3xl bg-white/45 backdrop-blur p-6 border shadow-sm">
    <p className="text-sm text-[#5c007d]/70">{f}</p>
    <p className="new-rocker-regular title-white glow-violet text-xl">{t}</p>
    <p className="text-xs text-[#5c007d]/70 mb-4">{cupos}</p>
    <div className="flex gap-3">
      <a href="https://wa.link/ylh91z" className="rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-sm">Reservar</a>
      <a href="#contacto" className="rounded-full border px-4 py-2 text-sm">Consultar</a>
    </div>
  </div>
));

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const closeMenu = React.useCallback(() => setOpen(false), []);
  
  return (
  <header className={`site-header fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'shadow-sm' : ''} bg-[#5A32B5]/20 backdrop-blur-2xl border-b border-[#5A32B5]/20`}>
      {/* Nav color dinámica: blanco arriba, violeta al scrollear */}
  <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#inicio" className="new-rocker-regular title-white glow-violet text-xl tracking-wide">
          Ser<span className="text-[#d980f9]">Magia</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-[#d980f9] transition">
              {l.label}
            </a>
          ))}
          <a href="https://wa.link/ylh91z" className="rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-sm hover:opacity-90 transition">
            Reservar
          </a>
        </nav>
        <button
          aria-label="Abrir menú"
          className="md:hidden inline-flex items-center justify-center rounded-full border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-[#5A32B5]/20 backdrop-blur-2xl border-[#5A32B5]/10">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-sm" onClick={closeMenu}>
                {l.label}
              </a>
            ))}
            <a href="https://wa.link/ylh91z" className="rounded-full bg-[#8a0bd2] text-white px-4 py-2 text-center text-sm" onClick={closeMenu}>
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ContactForm(){
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  
  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);
  
  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    const to = "hola@sermagia.tarot";
    const subject = encodeURIComponent(formData.asunto || 'Consulta desde la web');
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\n${formData.mensaje}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }, [formData]);
  
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input 
          name="nombre"
          value={formData.nombre} 
          onChange={handleChange} 
          className="rounded-xl border px-4 py-3 bg-[#000]" 
          placeholder="Nombre"
        />
        <input 
          name="email"
          value={formData.email} 
          onChange={handleChange} 
          className="rounded-xl border px-4 py-3 bg-[#000]" 
          placeholder="Email"
        />
      </div>
      <input 
        name="asunto"
        value={formData.asunto} 
        onChange={handleChange} 
        className="rounded-xl border px-4 py-3 bg-[#000]" 
        placeholder="Asunto"
      />
      <textarea 
        name="mensaje"
        value={formData.mensaje} 
        onChange={handleChange} 
        className="rounded-xl border px-4 py-3 bg-[#000]" 
        rows={4} 
        placeholder="Contame en qué te puedo acompañar"
      />
      <div className="flex gap-3">
  <button type="submit" className="rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm w-max">Enviar</button>
        <a href="https://wa.link/ylh91z" className="rounded-full border px-5 py-3 text-sm">WhatsApp</a>
      </div>
    </form>
  );
}



function App(){
  return (
    <div className="min-h-screen">
      <Navbar/>
      {/* HERO: full viewport, background SVG, tarot card visible completa */}
      <section id="inicio" className="pt-28 min-h-[100svh] relative" style={{backgroundImage:`url(${ASSETS.heroBg})`, backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div id="hero111" className="rounded-3xl bg-[#5A32B5]/20 backdrop-blur-2xl border border-[#5A32B5]/20 p-6 md:p-10 shadow-xl">
            <p className="uppercase tracking-[0.25em] text-xs text-[#d980f9] mb-4">Tarot · Akasha · Sanación</p>
            <h1 className="new-rocker-regular title-white glow-violet text-4xl md:text-5xl leading-tight mb-6">
              Acompañamiento amoroso para tu <span className="text-[#d980f9]">autoconocimiento</span>
            </h1>
            <p className="mb-5 text-white font-bold">Tarotista y Ser en eterna búsqueda y construcción. Hace más de siete años que acompaño procesos de sanación y auto-descubrimiento a través del Tarot y los Registros Akáshicos.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm">Ver servicios</a>
              <a href="https://wa.link/ylh91z" className="rounded-full border border-[#d980f9] text-[#d980f9] px-5 py-3 text-sm">Solicitar turnos</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden  flex items-center justify-center p-3 h-[60vh] md:h-[66vh]">
              <img src={ASSETS.heroSun} alt="Carta El Sol" className="max-h-full max-w-full object-contain" />
            </div>
            {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 w-48">
              <p className="text-xs text-[#d980f9]/70">Próximo encuentro</p>
              <p className="text-sm font-medium">Vinito & Tarot · cupos limitados</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* STRIP FRASE */}
      <div>
        <div>
          <div className=" bg-[#3d1a66] text-[#000] p-6 md:p-10 text-center aura-effect">
            <p className="new-rocker-regular title-white glow-violet text-3xl md:text-5xl">"Traé ternura a tu cuerpo. Todo empieza en tu respiración."</p>
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-12 md:py-20" style={{backgroundImage:`url(${ASSETS.backgroundTarotLila})`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="new-rocker-regular text-[#ffffff] text-[2.5rem] md:text-[4rem] mb-8">
  Servicios
</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {SERVICIOS.map((servicio, i) => (
        <ServiceCard key={i} {...servicio} />
      ))}
    </div>
  </div>
</section>

      {/* VINITO Y TAROT */}
      <section id="vinito" className="py-12 md:py-20 min-h-[100svh] flex items-center" style={{backgroundImage:`url(${ASSETS.estrellaMujer})`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className="mx-auto max-w-6xl px-4 w-full">
          <div className="md:ml-auto md:w-1/2">
            <h2 className="new-rocker-regular title-white glow-violet text-3xl md:text-4xl mb-3">Vinito y Tarot</h2>
            <p className="text-white mb-4 text-lg md:text-xl">Bloque de 2h30 para sumergirte en el Tarot a través de dinámicas lúdicas, risas y vino.</p>
            <ul className="text-base md:text-lg space-y-2 text-white list-disc pl-5">
              <li>Presencial (10 a 22 personas).</li>
              <li>A domicilio 1: hasta 15 personas. Incluye vino, juegos y sobre de cartas + lectura por WhatsApp.</li>
              <li>A domicilio 2: hasta 30 personas. Incluye vino, juegos y sesión para la/el anfitrión.</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.link/ylh91z" className="rounded-full bg-[#d980f9] text-[#3d1a66] font-semibold px-5 py-3 text-sm hover:opacity-90 transition">Quiero sumarme</a>
              <a href="#contacto" className="rounded-full border border-[#d980f9] text-[#d980f9] px-5 py-3 text-sm hover:bg-[#d980f9] hover:text-[#3d1a66] transition">Consultar disponibilidad</a>
            </div>
          </div>
        </div>
      </section>

      {/* EL PACK */}
      <section id="pack" className="py-8 md:py-16 min-h-[100svh] flex items-center" style={{backgroundImage:`url(${ASSETS.manosLuna})`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-white/80 backdrop-blur p-6 md:p-10 shadow">
            <h2 className="new-rocker-regular title-white glow-violet text-3xl mb-2">El Pack · Un viaje de autoconocimiento</h2>
            <p className="text-sm text-[#d980f9]/80 mb-6 max-w-prose">Dirigido a almas inquietas que desean transformación positiva. Metodología en 5 componentes:</p>
            <div className="grid md:grid-cols-5 gap-4 text-sm">
              {PACK_COMPONENTS.map((k,i)=>(
                <div key={i} className="rounded-2xl border bg-white p-4">
                  <p className="font-medium mb-1">{k.n}</p>
                  <p className="text-[#d980f9]/80">{k.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LECTURAS */}
  <section id="lecturas" className="py-8 md:py-16 min-h-[80svh] md:min-h-[100svh] flex items-center justify-center" style={{backgroundImage:`url(${ASSETS.lavandaCampo})`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
    <div className="mx-auto max-w-6xl px-4 flex-1">
          <h2 className="new-rocker-regular title-white glow-violet text-6xl mb-6">Lecturas de Tarot</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {LECTURAS.map((c,i)=>(
              <LecturaCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* FORMACION */}
  <section id="formacion" className="py-8 md:py-16 bg-black">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="new-rocker-regular title-white glow-violet text-7xl mb-3">Formación & Registros</h2>
            <ul className="text-sm space-y-3 text-[#d980f9]/80 list-disc pl-5">
              <li><span className="font-medium text-base">Formación de Tarot para la Evolución:</span> vivencial y práctica (Arcanos Mayores y Menores) para lecturas personales y a otrxs.</li>
              <li><span className="font-medium text-base">Iniciación en Registros Akáshicos – Nivel 1 y 2:</span> herramienta de sanación personal para acceder al archivo de tu Alma.</li>
            </ul>
            <a href="#contacto" className="mt-5 inline-block rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm">Quiero info</a>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm flex items-center justify-center bg-black/5 relative">
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-20" style={{boxShadow: 'inset 0 0 60px 28px rgba(0,0,0,0.8)'}} />
              <video
                src="./assets/formacion.mp4"
                poster={ASSETS.abstractRosaVerde}
                muted
                autoPlay
                playsInline
                loop
                className="w-full h-full object-cover relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="py-8 md:py-16" style={{backgroundImage:`url(${ASSETS.cieloEspejo})`, backgroundAttachment:'fixed', backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="new-rocker-regular title-white glow-violet text-5xl mb-6 text-center">Próximas fechas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {AGENDA_EVENTOS.map((e,i)=>(
              <EventoCard key={i} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-12 md:py-20" style={{backgroundImage:`url(${ASSETS.cieloEspejo})`, backgroundAttachment:'fixed', backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-3xl border bg-white/45 backdrop-blur p-8 md:p-10 shadow-sm">
            <h2 className="new-rocker-regular title-white glow-violet text-3xl mb-2">Turnos & Contacto</h2>
            <p className="text-[#5c007d]/80 mb-4">Todos los servicios requieren seña para reservar; no reembolsable ante cancelación.</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://wa.link/ylh91z" className="rounded-full bg-[#8a0bd2] text-white px-5 py-3 text-sm">Reservar por WhatsApp</a>
              <a href="mailto:hola@sermagia.tarot" className="rounded-full border px-5 py-3 text-sm">Escribirme por mail</a>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-10 pt-6 border-t bg-[#8a0bd2] text-white border-[#8a0bd2]/20">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/90">© {new Date().getFullYear()} Ser Magia Tarot</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="https://instagram.com/sermagia.tarot" className="text-white hover:text-[#f4dbff]">Instagram</a>
            <a href="#" className="text-white hover:text-[#f4dbff]">Política de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
