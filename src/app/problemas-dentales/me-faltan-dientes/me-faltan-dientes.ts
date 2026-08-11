import type { ProblemaData } from "@/components/problemas/ProblemaLayout";

export const meFaltanDientesData: ProblemaData = {
  slug: "me-faltan-dientes",
  eyebrow: "Problemas dentales · Bogotá, Colombia",
  titulo: "¿Te faltan uno o varios dientes?",
  subtitulo:
    "La falta de dientes cambia tu forma de comer, hablar y sonreír — pero tiene solución. Te ayudamos a recuperar tu sonrisa y su función.",
  heroImage: "/home.webp",
  heroAlt: "Persona sonriendo tras reemplazar sus dientes faltantes en Bogotá",
  intro: {
    titulo: "Perder dientes no es solo un tema estético",
    parrafos: [
      "Cuando falta uno o varios dientes, masticar se vuelve difícil, la pronunciación cambia y muchas personas empiezan a taparse la boca al sonreír. Es una situación más común de lo que crees, y puede pasar a cualquier edad.",
      "La buena noticia: hoy existen varias formas de reemplazar los dientes perdidos, desde opciones fijas hasta removibles, adaptadas a tu caso, tu salud bucal y tu presupuesto.",
    ],
  },
  consecuencias: {
    titulo: "Qué pasa si no se reemplazan",
    items: [
      "Los dientes vecinos se inclinan y se desplazan hacia el espacio vacío.",
      "El hueso de la zona empieza a reabsorberse y se pierde volumen.",
      "La mordida se desequilibra y pueden aparecer dolor o desgaste.",
      "Se afectan la masticación, la digestión y la confianza al sonreír.",
    ],
  },
  soluciones: {
    titulo: "Cómo recuperamos tus dientes",
    intro: "Según tu caso, la Dra. Sandra Rodríguez te recomendará la mejor opción:",
    opciones: [
      {
        nombre: "Prótesis dental fija",
        descripcion:
          "Reemplazo permanente apoyado en los dientes vecinos. Se siente y funciona como un diente natural.",
        href: "/tratamientos-dentales/protesis-dentales-fija",
        image: "/hippy.webp",
      },
      {
        nombre: "Prótesis sobre implantes",
        descripcion: "La opción más estable: anclada sobre implantes integrados en el hueso.",
        href: "/tratamientos-dentales/protesis-dentales-sobreimplantes",
        image: "/pelirroja.webp",
      },
      {
        nombre: "Prótesis removible",
        descripcion: "Solución cómoda y accesible para reemplazar uno o varios dientes.",
        href: "/tratamientos-dentales/protesis-dentales-removible",
        image: "/removible.webp",
      },
      {
        nombre: "Prótesis sobre dientes",
        descripcion: "Aprovecha tus dientes remanentes para mayor retención y comodidad.",
        href: "/tratamientos-dentales/protesis-dentales-sobredientes",
        image: "/sobrediente.webp",
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué pasa si dejo el espacio sin reemplazar?",
      answer:
        "Con el tiempo los dientes vecinos se mueven, se pierde hueso en la zona y la mordida se desequilibra, lo que puede complicar y encarecer el tratamiento más adelante.",
    },
    {
      question: "¿Cuál es la mejor opción para mí?",
      answer:
        "Depende de cuántos dientes falten, del estado de tu hueso y encías, y de tus objetivos. En la valoración la Dra. evalúa tu caso y te explica las alternativas con sus ventajas y desventajas.",
    },
    {
      question: "¿Cuánto cuesta reemplazar un diente?",
      answer:
        "Varía según la solución elegida. Puedes ver los precios de referencia en nuestra página de tarifas; el presupuesto exacto se define en la valoración.",
    },
    {
      question: "¿El proceso es doloroso?",
      answer:
        "Los tratamientos se realizan con anestesia local y de forma gradual. La mayoría de pacientes reportan molestias mínimas y manejables.",
    },
  ],
  ctaTitulo: "Recupera tu sonrisa",
  ctaTexto:
    "Agenda una valoración. Evaluamos tu caso y te explicamos qué opción se adapta mejor a ti, sin compromiso.",
  waMessage:
    "Hola, me faltan uno o varios dientes y quisiera agendar una cita de valoración.",
};
