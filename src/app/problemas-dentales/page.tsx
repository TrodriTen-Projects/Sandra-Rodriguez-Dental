import type { Metadata } from "next";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import ProblemasHero from "@/components/heros/ProblemasHero";
import { BRAND, CONTACT, whatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/content";

export const metadata: Metadata = {
  title: "Problemas dentales frecuentes en Bogotá | Dra. Sandra Rodriguez",
  description:
    "¿Te faltan dientes, se te rompió uno, aprietas los dientes o tienes manchas? Encuentra tu caso y las soluciones con la Dra. Sandra Liliana Rodríguez, prostodoncista en Bogotá.",
  keywords:
    "problemas dentales, me faltan dientes, diente roto, bruxismo, dientes manchados, desgaste dental, soluciones dentales bogotá",
  alternates: {
    canonical: "/problemas-dentales",
  },
  openGraph: {
    title: "Problemas dentales frecuentes en Bogotá",
    description:
      "Encuentra tu caso y descubre las soluciones con la Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Problemas dentales - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function ProblemasHubPage() {
  return (
    <ScrollAnimator threshold={0.08} rootMargin="80px">
      <main>
        {/* ── Hero ── */}
        <section className="relative w-full h-[60vh] md:h-[55vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/consultorio.webp"
              alt="Consultorio de la Dra. Sandra Liliana Rodríguez en Bogotá"
              fill
              priority
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/85 to-[#005268]/30" />
          </div>
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl">
              <p className="text-sm text-white/90 mb-2">Rehabilitación Oral · Bogotá, Colombia</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Problemas dentales frecuentes
              </h1>
              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                Identifica lo que te pasa y descubre cómo podemos ayudarte a resolverlo.
              </p>
            </div>
          </div>
        </section>

        {/* ── Grid de problemas ── */}
        <section className="py-16 md:py-20">
          <ProblemasHero />
        </section>

        {/* ── CTA ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center border-t border-gray-200 pt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-primaryDark mb-4">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Agenda una valoración. Revisamos tu caso y te explicamos qué solución se adapta mejor
              a ti, sin compromiso.
            </p>
            <a
              href={whatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primaryDark text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-primary transition-colors duration-200"
            >
              Escríbenos por WhatsApp
            </a>
            <p className="text-gray-500 text-sm mt-6">
              O llámanos al{" "}
              <a href={`tel:${CONTACT.PHONE}`} className="text-primary font-semibold underline">
                {CONTACT.PHONE_FORMATTED}
              </a>
            </p>
          </div>
        </section>
      </main>
    </ScrollAnimator>
  );
}
