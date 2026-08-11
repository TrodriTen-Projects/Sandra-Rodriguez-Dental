import type { ProblemaData } from "@/components/problemas/ProblemaLayout";

export const bruxismoData: ProblemaData = {
  slug: "bruxismo",
  eyebrow: "Problemas dentales · Bogotá, Colombia",
  titulo: "¿Aprietas o rechinas los dientes?",
  subtitulo:
    "El bruxismo desgasta tus dientes y puede causar dolor de mandíbula y de cabeza. Tiene tratamiento — y entre más pronto, mejor.",
  heroImage: "/consultorio_2.webp",
  heroAlt: "Valoración de bruxismo y desgaste dental en Bogotá",
  intro: {
    titulo: "Apretar los dientes no es normal",
    parrafos: [
      "El bruxismo es el hábito, muchas veces inconsciente y nocturno, de apretar o rechinar los dientes. Con el tiempo desgasta el esmalte, agrieta las piezas y sobrecarga los músculos y la articulación de la mandíbula.",
      "El tratamiento principal es una férula (placa) hecha a tu medida, que protege tus dientes mientras duermes. Si el desgaste ya avanzó, restauramos las piezas afectadas.",
    ],
  },
  consecuencias: {
    titulo: "Señales y consecuencias",
    items: [
      "Desgaste de los dientes: se ven más cortos o planos.",
      "Sensibilidad, fracturas o grietas en el esmalte.",
      "Dolor de mandíbula, cabeza o cuello al despertar.",
      "Chasquidos o molestia en la articulación de la mandíbula (ATM).",
    ],
  },
  soluciones: {
    titulo: "Cómo tratamos el bruxismo",
    intro: "El tratamiento principal es la férula; si el desgaste ya avanzó, restauramos las piezas afectadas:",
    opciones: [
      {
        nombre: "Férula para bruxismo",
        descripcion: "Placa a medida que protege tus dientes del desgaste mientras duermes.",
        href: "/tratamientos-dentales/ferula-para-bruxismo",
        image: "/consultorio_2.webp",
      },
      {
        nombre: "Corona libre de metal",
        descripcion: "Restaura un diente muy desgastado o fracturado, con estética natural.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-nometal",
        image: "/corona_no_metal.webp",
      },
      {
        nombre: "Corona metal-porcelana",
        descripcion: "Recupera la forma y la resistencia de los dientes dañados.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-porcelana",
        image: "/corona_metal.webp",
      },
      {
        nombre: "Prótesis dental fija",
        descripcion: "Rehabilita varios dientes afectados por el desgaste.",
        href: "/tratamientos-dentales/protesis-dentales-fija",
        image: "/hippy.webp",
      },
    ],
  },
  faqs: [
    {
      question: "¿Cómo sé si tengo bruxismo?",
      answer:
        "Señales típicas: despertar con dolor de mandíbula o cabeza, dientes desgastados o sensibles, o que alguien te escuche rechinar por la noche. En la valoración lo confirmamos.",
    },
    {
      question: "¿La férula cura el bruxismo?",
      answer:
        "La férula no elimina el hábito, pero protege tus dientes del desgaste y alivia la tensión muscular mientras se maneja la causa.",
    },
    {
      question: "¿Cuánto cuesta el tratamiento?",
      answer:
        "Depende de si necesitas solo la férula o también restaurar dientes. Puedes ver precios de referencia en la página de tarifas; el presupuesto se define en la valoración.",
    },
    {
      question: "¿El desgaste se puede revertir?",
      answer:
        "El esmalte perdido no se regenera, pero sí se restaura la forma y la función de los dientes con coronas u otras restauraciones.",
    },
  ],
  ctaTitulo: "Protege tus dientes del desgaste",
  ctaTexto:
    "Agenda una valoración. Evaluamos tu mordida y el desgaste, y diseñamos tu férula a medida, sin compromiso.",
  waMessage:
    "Hola, creo que aprieto o rechino los dientes (bruxismo) y quisiera agendar una cita de valoración.",
};
