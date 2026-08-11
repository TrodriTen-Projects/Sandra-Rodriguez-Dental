'use client';

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import FaqHero from "@/components/heros/FaqHero";
import WhatsAppButtonCTA from "@/components/buttons/WhatsappButtonCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface Solucion {
  nombre: string;
  descripcion: string;
  href: string;
  image: string;
}

export interface ProblemaData {
  /** URL slug — usado también para el componentName de analítica. */
  slug: string;
  eyebrow: string;
  /** Título principal (H1). */
  titulo: string;
  subtitulo: string;
  heroImage: string;
  heroAlt: string;
  intro: { titulo: string; parrafos: string[] };
  consecuencias?: { titulo: string; items: string[] };
  soluciones: { titulo: string; intro?: string; opciones: Solucion[] };
  faqs: { question: string; answer: string }[];
  ctaTitulo: string;
  ctaTexto: string;
  /** Mensaje pre-cargado en WhatsApp. */
  waMessage: string;
}

export default function ProblemaLayout({
  slug,
  eyebrow,
  titulo,
  subtitulo,
  heroImage,
  heroAlt,
  intro,
  consecuencias,
  soluciones,
  faqs,
  ctaTitulo,
  ctaTexto,
  waMessage,
}: ProblemaData) {
  useScrollAnimation({ threshold: 0.08, rootMargin: "80px" });

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full h-[85vh] md:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={heroAlt} fill priority className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/85 to-transparent" />
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <p className="text-sm text-white/90 mb-2">{eyebrow}</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">{titulo}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">{subtitulo}</p>
            <WhatsAppButtonCTA
              componentName={`problema_${slug}_hero`}
              isPrimary
              size="sm"
              text="Agenda tu valoración"
              message={waMessage}
            />
          </div>
        </div>
      </section>

      {/* ── Empatía / intro ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="hidden-initially">
          <SectionTitle header="h2" className="text-2xl md:text-3xl font-bold text-primaryDark !mb-6">
            {intro.titulo}
          </SectionTitle>
          {intro.parrafos.map((p, i) => (
            <p key={i} className="text-lg text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {consecuencias && (
          <div className="hidden-initially mt-8 bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-primaryDark mb-4">{consecuencias.titulo}</h3>
            <ul className="space-y-3">
              {consecuencias.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ── Soluciones (embudo a tratamientos) ── */}
      <section className="bg-secondaryLight/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="hidden-initially text-center mb-10 max-w-2xl mx-auto">
            <SectionTitle header="h2" className="text-2xl md:text-3xl font-bold text-primaryDark !mb-3">
              {soluciones.titulo}
            </SectionTitle>
            {soluciones.intro && <p className="text-gray-600 text-lg">{soluciones.intro}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {soluciones.opciones.map((op) => (
              <Link
                key={op.href}
                href={op.href}
                className="hidden-initially group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={op.image}
                    alt={op.nombre}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-bold text-base mb-1 text-primaryDark">{op.nombre}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{op.descripcion}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-primary">
                    Ver tratamiento →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="hidden-initially">
          <FaqHero faqs={faqs} />
        </div>
      </section>

      {/* ── CTA — suave, sin caja, apoyado en líneas ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="hidden-initially text-center border-t border-gray-200 pt-14">
          <SectionTitle header="h2" className="!text-2xl md:!text-3xl font-bold text-primaryDark !mb-4 normal-case">
            {ctaTitulo}
          </SectionTitle>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {ctaTexto}
          </p>
          <div className="flex justify-center">
            <WhatsAppButtonCTA
              componentName={`problema_${slug}_cta`}
              isPrimary
              size="sm"
              text="Escríbenos por WhatsApp"
              message={waMessage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
