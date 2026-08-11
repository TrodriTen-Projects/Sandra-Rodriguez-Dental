import type { ProblemaData } from "@/components/problemas/ProblemaLayout";

export const desgasteDentalData: ProblemaData = {
  slug: "desgaste-dental",
  eyebrow: "Problemas dentales · Bogotá, Colombia",
  titulo: "¿Sientes tu sonrisa desgastada o envejecida?",
  subtitulo:
    "Con los años, el desgaste y la mordida cambian tu sonrisa. La rehabilitación oral devuelve su función y su estética.",
  heroImage: "/sandra.webp",
  heroAlt: "Rehabilitación oral para una sonrisa desgastada en Bogotá",
  intro: {
    titulo: "El desgaste cambia toda tu sonrisa",
    parrafos: [
      "Con el tiempo, el bruxismo, la mordida o simplemente los años van desgastando los dientes: se ven más cortos, la sonrisa pierde altura y el rostro puede verse más envejecido. También pueden aparecer sensibilidad o problemas al morder.",
      "La rehabilitación oral devuelve la forma, la altura y la función de los dientes de manera integral, combinando los tratamientos que tu caso necesite.",
    ],
  },
  consecuencias: {
    titulo: "Señales de una sonrisa desgastada",
    items: [
      "Dientes más cortos, planos o con los bordes irregulares.",
      "Sensibilidad al frío, al calor o al morder.",
      "La mordida ya no encaja como antes.",
      "La parte baja del rostro se ve más corta o envejecida.",
    ],
  },
  soluciones: {
    titulo: "Cómo rehabilitamos tu sonrisa",
    intro: "La rehabilitación oral combina, según tu caso, tratamientos como:",
    opciones: [
      {
        nombre: "Corona libre de metal",
        descripcion: "Restaura dientes desgastados con estética natural.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-nometal",
        image: "/corona_no_metal.webp",
      },
      {
        nombre: "Corona metal-porcelana",
        descripcion: "Recupera altura y resistencia en las piezas dañadas.",
        href: "/tratamientos-dentales/protesis-dentales-coronas-porcelana",
        image: "/corona_metal.webp",
      },
      {
        nombre: "Prótesis dental fija",
        descripcion: "Rehabilita varios dientes de forma permanente.",
        href: "/tratamientos-dentales/protesis-dentales-fija",
        image: "/hippy.webp",
      },
      {
        nombre: "Prótesis sobre implantes",
        descripcion: "Para casos con dientes perdidos, la opción más estable.",
        href: "/tratamientos-dentales/protesis-dentales-sobreimplantes",
        image: "/pelirroja.webp",
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué es una rehabilitación oral?",
      answer:
        "Es un tratamiento integral que restaura la función y la estética de toda la boca, combinando coronas, prótesis u otras restauraciones según cada caso.",
    },
    {
      question: "¿Cuánto tiempo toma?",
      answer:
        "Depende de la complejidad. En la valoración la Dra. define el plan de tratamiento y los tiempos estimados.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer:
        "Varía según los tratamientos que incluya. Puedes ver precios de referencia en la página de tarifas; el presupuesto se define en la valoración.",
    },
    {
      question: "¿Se ve natural?",
      answer:
        "Sí. El objetivo es devolver una sonrisa funcional y estética que se vea y se sienta natural.",
    },
  ],
  ctaTitulo: "Devuélvele altura y estética a tu sonrisa",
  ctaTexto:
    "Agenda una valoración. Estudiamos tu mordida y tu desgaste y diseñamos tu plan de rehabilitación, sin compromiso.",
  waMessage:
    "Hola, siento mi sonrisa desgastada y quisiera agendar una cita de valoración de rehabilitación oral.",
};
