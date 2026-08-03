import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SectionTitle from "@/components/SectionTitle";
import { BRAND, CONTACT, whatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/content";

export const metadata: Metadata = {
  title: "Casos de Éxito | Dra. Sandra Liliana Rodriguez",
  description:
    "Rehabilitación oral y prostodoncia en Bogotá: conoce los tipos de casos que trata la Dra. Sandra Liliana Rodríguez, desde prótesis fijas y sobre implantes hasta coronas y estética dental.",
  keywords:
    "casos de éxito dental, rehabilitación oral Bogotá, prótesis dental, coronas dentales, antes y después dental, prostodoncia Bogotá",
  // Página oculta hasta tener contenido real de casos. `noindex, nofollow`
  // la mantiene fuera de los buscadores; tampoco está en el sitemap ni
  // enlazada en la navegación. Para publicarla, elimina este bloque `robots`
  // y vuelve a añadir la ruta en src/app/sitemap.ts (y, si se quiere, al menú).
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: "Casos de Éxito | Dra. Sandra Liliana Rodriguez",
    description:
      "Conoce el tipo de rehabilitaciones que realizamos: prótesis, coronas, implantes y estética dental en Bogotá.",
    url: `${BRAND.SITE_URL}/cases`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Casos de éxito - Sandra Liliana Rodriguez Dental",
      },
    ],
  },
};

/**
 * Cada tarjeta representa un TIPO de rehabilitación que la clínica realiza y
 * enlaza a la página del tratamiento (enlazado interno para SEO).
 *
 * PARA CONTENIDO REAL: cuando haya fotografías de casos propios (antes/después)
 * con el consentimiento firmado del paciente, reemplaza `image` por la foto del
 * caso y `descripcion` por la historia real. No publiques imágenes de pacientes
 * sin autorización.
 */
const casos: Array<{
  categoria: string;
  titulo: string;
  descripcion: string;
  image: string;
  imageAlt: string;
  href: string;
}> = [
  {
    categoria: "Prótesis",
    titulo: "Prótesis dental fija",
    descripcion:
      "Reemplazo permanente de dientes perdidos apoyado en los dientes vecinos, devolviendo la función masticatoria y una sonrisa natural.",
    image: "/hippy.webp",
    imageAlt: "Caso de rehabilitación con prótesis dental fija",
    href: "/tratamientos-dentales/protesis-dentales-fija",
  },
  {
    categoria: "Prótesis",
    titulo: "Prótesis sobre implantes",
    descripcion:
      "La opción más estable: la prótesis se ancla directamente sobre implantes integrados en el hueso para máxima retención y comodidad.",
    image: "/pelirroja.webp",
    imageAlt: "Caso de rehabilitación con prótesis sobre implantes",
    href: "/tratamientos-dentales/protesis-dentales-sobreimplantes",
  },
  {
    categoria: "Coronas",
    titulo: "Coronas libres de metal",
    descripcion:
      "Coronas de cerámica o zirconio, sin componentes metálicos, para restaurar dientes dañados con la máxima estética y biocompatibilidad.",
    image: "/corona_no_metal.webp",
    imageAlt: "Caso de restauración con coronas libres de metal",
    href: "/tratamientos-dentales/protesis-dentales-coronas-nometal",
  },
  {
    categoria: "Prótesis",
    titulo: "Prótesis removible",
    descripcion:
      "Solución extraíble para reemplazar uno o varios dientes: cómoda, accesible y fácil de mantener, adaptada a la anatomía de cada paciente.",
    image: "/removible.webp",
    imageAlt: "Caso de rehabilitación con prótesis removible",
    href: "/tratamientos-dentales/protesis-dentales-removible",
  },
  {
    categoria: "Coronas",
    titulo: "Corona sobre implante",
    descripcion:
      "La parte visible del implante, fabricada a medida para integrarse de forma natural con el resto de la sonrisa.",
    image: "/corona_sobreimplante.webp",
    imageAlt: "Caso de corona sobre implante dental",
    href: "/tratamientos-dentales/protesis-dentales-coronas-sobreimplante",
  },
  {
    categoria: "Estética",
    titulo: "Blanqueamiento dental",
    descripcion:
      "Tratamiento clínico supervisado para aclarar el tono de los dientes de forma segura, eliminando manchas y devolviendo luminosidad a la sonrisa.",
    image: "/blanqueamientos.webp",
    imageAlt: "Caso de blanqueamiento dental",
    href: "/tratamientos-dentales/estetica-dental-blanqueamientos",
  },
];

const pilares = [
  {
    titulo: "Valoración integral",
    descripcion:
      "Cada caso empieza con un estudio de la mordida, la estética y la historia clínica para diseñar una solución a medida.",
  },
  {
    titulo: "Plan personalizado",
    descripcion:
      "Te explicamos las opciones, los tiempos y los resultados esperados antes de comenzar, sin sorpresas.",
  },
  {
    titulo: "Seguimiento",
    descripcion:
      "Revisiones y ajustes posteriores para asegurar que la rehabilitación se mantenga cómoda y duradera.",
  },
];

export default function CasesPage() {
  return (
    <ScrollAnimator threshold={0.1} rootMargin="80px">
      <main>
        {/* ── Hero ── */}
        <section className="relative w-full h-[70vh] md:h-[60vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sandra.webp"
              alt="Dra. Sandra Liliana Rodríguez, prostodoncista en Bogotá"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/85 to-[#005268]/30" />
          </div>
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl">
              <p className="text-sm text-white/90 mb-2">Rehabilitación Oral · Bogotá, Colombia</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Casos de éxito
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                Devolver la función y la estética de una sonrisa es un proceso a medida.
                Estos son los tipos de rehabilitación que realizamos en la clínica.
              </p>
              <a
                href={whatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primaryDark font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-secondaryLight transition-colors duration-200"
              >
                Agenda tu valoración
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 text-center">
          <div className="hidden-initially">
            <SectionTitle header="h2" className="text-2xl md:text-3xl font-bold text-primaryDark">
              Resultados que combinan función y estética
            </SectionTitle>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              La Dra. Sandra Liliana Rodríguez está especializada en rehabilitación oral y
              prostodoncia. Cada tratamiento se planifica de forma individual para lograr una
              solución duradera y natural, ya se trate de una sola corona o de una rehabilitación
              completa.
            </p>
          </div>
        </section>

        {/* ── Grid de casos ──
            PLACEHOLDER de contenido: reemplaza cada tarjeta por un caso real
            (foto antes/después + historia) cuando cuentes con el consentimiento
            firmado del paciente. */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-20">
          <div className="hidden-initially mb-10 text-center">
            <SectionTitle header="h2" className="text-2xl font-bold text-gray" uppercase>
              Tipos de casos que tratamos
            </SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casos.map((caso) => (
              <Link
                key={caso.titulo}
                href={caso.href}
                className="hidden-initially group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52">
                  <Image
                    src={caso.image}
                    alt={caso.imageAlt}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                    {caso.categoria}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-bold text-lg mb-1 text-primaryDark">{caso.titulo}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{caso.descripcion}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-primary">
                    Ver tratamiento →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Cómo trabajamos ── */}
        <section className="bg-secondaryLight/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
            <div className="hidden-initially mb-10 text-center">
              <SectionTitle header="h2" className="text-2xl font-bold text-primaryDark">
                Cómo abordamos cada caso
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pilares.map((pilar, i) => (
                <div
                  key={pilar.titulo}
                  className="hidden-initially bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-primaryDark mb-2">{pilar.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pilar.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="hidden-initially bg-primaryDark rounded-2xl p-8 md:p-12 text-center">
            <SectionTitle header="h2" className="text-2xl md:text-3xl font-bold text-white normal-case !mb-4">
              ¿Quieres un plan para tu caso?
            </SectionTitle>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Agenda una consulta de valoración. La Dra. evaluará tu situación y te explicará qué
              rehabilitación se adapta mejor a ti, sin compromiso.
            </p>
            <a
              href={whatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primaryDark font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-secondaryLight transition-colors duration-200"
            >
              Escríbenos por WhatsApp
            </a>
            <p className="text-white/60 text-sm mt-6">
              También puedes llamarnos al{" "}
              <a href={`tel:${CONTACT.PHONE}`} className="text-white underline">
                {CONTACT.PHONE_FORMATTED}
              </a>
            </p>
          </div>
        </section>
      </main>
    </ScrollAnimator>
  );
}
