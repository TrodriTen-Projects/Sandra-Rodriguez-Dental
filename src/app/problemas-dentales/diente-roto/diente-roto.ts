import type { ProblemaData } from "@/components/problemas/ProblemaLayout";

export const dienteRotoData: ProblemaData = {
  slug: "diente-roto",
  eyebrow: "Problemas dentales · Bogotá, Colombia",
  titulo: "¿Se te rompió o fracturó un diente?",
  subtitulo:
    "Un diente roto o astillado conviene tratarlo pronto, aunque no duela, para evitar que el daño avance o pierdas la pieza.",
  heroImage: "/consultorio.webp",
  heroAlt: "Paciente en valoración por un diente roto o fracturado en Bogotá",
  intro: {
    titulo: "No esperes a que duela",
    parrafos: [
      "Una fractura, una grieta o un pedazo que se cae dejan el diente vulnerable: las bacterias entran con facilidad y el daño puede llegar hasta el nervio. Muchas veces no hay dolor al principio, y por eso se deja pasar.",
      "Según el tamaño del daño, la solución puede ir desde una restauración sencilla hasta una corona que protege todo el diente. Cuanto antes se trate, más estructura natural se conserva.",
    ],
  },
  consecuencias: {
    titulo: "Qué pasa si no se trata",
    items: [
      "La grieta avanza y el diente puede fracturarse por completo.",
      "Las bacterias llegan al nervio y aparece dolor o infección.",
      "Puede ser necesario un tratamiento más complejo, o perder el diente.",
      "Masticar de ese lado se vuelve incómodo o doloroso.",
    ],
  },
  soluciones: {
    titulo: "Cómo restauramos tu diente",
    intro: "Según el daño, la Dra. Sandra Rodríguez elige la opción que conserve más diente natural:",
    opciones: [
      {
        nombre: "Resina dental",
        descripcion: "Repara caries o fracturas pequeñas conservando el diente natural.",
        href: "/tratamientos-dentales/resina-dental",
        image: "/dental_card.webp",
      },
      {
        nombre: "Corona libre de metal",
        descripcion: "Protege por completo un diente muy dañado, con la máxima estética.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-nometal",
        image: "/corona_no_metal.webp",
      },
      {
        nombre: "Corona metal-porcelana",
        descripcion: "Cubre y refuerza el diente con gran resistencia.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-porcelana",
        image: "/corona_metal.webp",
      },
      {
        nombre: "Prótesis dental fija",
        descripcion: "Restaura uno o varios dientes dañados de forma permanente.",
        href: "/tratamientos-dentales/protesis-dentales-fija",
        image: "/hippy.webp",
      },
    ],
  },
  faqs: [
    {
      question: "¿Puedo esperar si no me duele?",
      answer:
        "No es recomendable. Un diente roto que no duele igual está expuesto; tratarlo a tiempo evita que el daño llegue al nervio y encarezca el tratamiento.",
    },
    {
      question: "¿Siempre necesito una corona?",
      answer:
        "No siempre. Si el daño es pequeño puede bastar una restauración; si es extenso, la corona protege todo el diente. La Dra. lo evalúa en la valoración.",
    },
    {
      question: "¿Cuánto cuesta arreglar un diente roto?",
      answer:
        "Depende del tratamiento. Puedes ver los precios de referencia en nuestra página de tarifas; el presupuesto exacto se define en la valoración.",
    },
    {
      question: "¿Es doloroso?",
      answer:
        "El procedimiento se realiza con anestesia local. La mayoría de pacientes reportan molestias mínimas y manejables.",
    },
  ],
  ctaTitulo: "Salva tu diente a tiempo",
  ctaTexto:
    "Agenda una valoración. Revisamos el daño y te explicamos la mejor forma de restaurar tu diente, sin compromiso.",
  waMessage:
    "Hola, se me rompió o fracturó un diente y quisiera agendar una cita de valoración.",
};
