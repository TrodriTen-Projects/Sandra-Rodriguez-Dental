import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

/**
 * Sección de la home que enlaza a las páginas de problemática (por síntoma).
 * Funnel: home → problema → tratamiento → contacto.
 * Editar aquí actualiza la sección; el orden es el que se muestra.
 */
const problemas = [
  {
    titulo: "¿Te faltan dientes?",
    prompt: "Prótesis e implantes para recuperar tu sonrisa.",
    href: "/problemas-dentales/me-faltan-dientes",
  },
  {
    titulo: "¿Se te rompió un diente?",
    prompt: "Restauraciones y coronas para salvar tu diente.",
    href: "/problemas-dentales/diente-roto",
  },
  {
    titulo: "¿Aprietas o rechinas los dientes?",
    prompt: "Férula a medida y tratamiento del bruxismo.",
    href: "/problemas-dentales/bruxismo",
  },
  {
    titulo: "¿Dientes manchados o amarillos?",
    prompt: "Blanqueamiento seguro y supervisado.",
    href: "/problemas-dentales/dientes-manchados",
  },
  {
    titulo: "¿Sientes tu sonrisa desgastada?",
    prompt: "Rehabilitación oral integral.",
    href: "/problemas-dentales/desgaste-dental",
  },
];

export default function ProblemasHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <SectionTitle header="h2" className="font-bold text-primaryDark" uppercase>
          ¿Qué te preocupa?
        </SectionTitle>
        <p className="mt-4 text-gray-600 text-lg">
          Encuentra tu caso y descubre cómo podemos ayudarte.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problemas.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-bold text-lg text-primaryDark mb-2 group-hover:text-primary transition-colors">
              {p.titulo}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{p.prompt}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-primary">
              Ver soluciones &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
