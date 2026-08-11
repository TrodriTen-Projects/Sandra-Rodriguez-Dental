import type { ProblemaData } from "@/components/problemas/ProblemaLayout";

export const dientesManchadosData: ProblemaData = {
  slug: "dientes-manchados",
  eyebrow: "Problemas dentales · Bogotá, Colombia",
  titulo: "¿Dientes manchados o amarillos?",
  subtitulo:
    "El café, el tabaco y el paso del tiempo oscurecen los dientes. Recupera su color de forma segura y supervisada.",
  heroImage: "/blanqueamientos.webp",
  heroAlt: "Sonrisa blanca tras un blanqueamiento dental profesional en Bogotá",
  intro: {
    titulo: "Por qué se manchan los dientes",
    parrafos: [
      "El color de los dientes cambia con los años y con hábitos como el café, el té, el vino o el tabaco. Otras veces la mancha viene desde dentro del diente, por medicamentos o por un golpe antiguo.",
      "Un blanqueamiento profesional y supervisado aclara el tono de forma segura, sin dañar el esmalte — algo que los productos caseros no siempre garantizan.",
    ],
  },
  consecuencias: {
    titulo: "Antes de blanquear, ten en cuenta",
    items: [
      "No todas las manchas responden igual: conviene valorarlas primero.",
      "Las coronas, resinas y carillas no cambian de color al blanquear.",
      "El blanqueamiento casero mal hecho puede causar sensibilidad o dañar la encía.",
      "Con buenos hábitos y mantenimiento, el resultado dura más.",
    ],
  },
  soluciones: {
    titulo: "Cómo recuperamos tu sonrisa",
    intro: "Según el origen de la mancha, la Dra. te recomendará la mejor opción:",
    opciones: [
      {
        nombre: "Blanqueamiento dental",
        descripcion: "Aclara el tono de tus dientes de forma segura y supervisada.",
        href: "/tratamientos-dentales/estetica-dental-blanqueamientos",
        image: "/blanqueamientos.webp",
      },
      {
        nombre: "Corona libre de metal",
        descripcion: "Para manchas internas que no responden al blanqueamiento.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-nometal",
        image: "/corona_no_metal.webp",
      },
      {
        nombre: "Corona metal-porcelana",
        descripcion: "Restaura color y forma en dientes muy oscurecidos o dañados.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-porcelana",
        image: "/corona_metal.webp",
      },
    ],
  },
  faqs: [
    {
      question: "¿El blanqueamiento daña el esmalte?",
      answer:
        "Un blanqueamiento profesional supervisado es seguro y no daña el esmalte. El riesgo está en los productos caseros mal usados.",
    },
    {
      question: "¿Cuánto dura el resultado?",
      answer:
        "Varía según tus hábitos. Reduciendo café, vino y tabaco, y con mantenimiento, el resultado se prolonga bastante.",
    },
    {
      question: "¿Por qué mis dientes no blanquean parejo?",
      answer:
        "Las restauraciones (coronas, resinas) no cambian de color. Si hay manchas internas, a veces se combina el blanqueamiento con otras opciones.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer:
        "Puedes ver el precio de referencia en la página de tarifas; el plan exacto se define en la valoración.",
    },
  ],
  ctaTitulo: "Recupera el blanco de tu sonrisa",
  ctaTexto:
    "Agenda una valoración. Revisamos el origen de las manchas y elegimos el tratamiento más seguro para ti, sin compromiso.",
  waMessage:
    "Hola, tengo los dientes manchados o amarillos y quisiera agendar una cita de valoración.",
};
