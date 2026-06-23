'use client'
import React, { useEffect, lazy, Suspense } from "react";
import TratamientoHero from "./TratamientoHero";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "../navbar/navbarLinks";
import type { SubLinkItem } from "../navbar/navbarLinks";
import { WHATSAPP_DEFAULT_MESSAGE } from "@/content";

const WhatsAppButtonCTA = lazy(() => import("../buttons/WhatsappButtonCTA"));
const MapHero = lazy(() => import("../heros/MapHero"));

interface TreatmentMeta {
  descripcion: string;
  categoria: string;
}

const tratamientosMeta: Record<string, TreatmentMeta> = {
  fija: {
    descripcion: 'Reemplaza dientes perdidos de forma permanente, apoyándose en los dientes vecinos como pilares.',
    categoria: 'Prótesis',
  },
  sobreimplantes: {
    descripcion: 'La opción más estable: prótesis anclada directamente sobre implantes integrados en el hueso.',
    categoria: 'Prótesis',
  },
  sobredientes: {
    descripcion: 'Prótesis híbrida que se sujeta a dientes naturales remanentes para mayor retención y comodidad.',
    categoria: 'Prótesis',
  },
  removible: {
    descripcion: 'Solución extraíble para reemplazar uno o varios dientes, fácil de limpiar y adaptar.',
    categoria: 'Prótesis',
  },
  nometal: {
    descripcion: 'Coronas de cerámica o zirconio sin componentes metálicos. Máxima estética y biocompatibilidad.',
    categoria: 'Coronas',
  },
  porcelana: {
    descripcion: 'Alta resistencia con apariencia natural. La restauración más utilizada en prostodoncia.',
    categoria: 'Coronas',
  },
  sobreimplante: {
    descripcion: 'La parte visible del implante, fabricada a medida para integrarse con tu sonrisa.',
    categoria: 'Coronas',
  },
  blanqueamiento: {
    descripcion: 'Tratamiento clínico supervisado para aclarar el tono de tus dientes de forma segura y duradera.',
    categoria: 'Estética',
  },
};

export default function TratamientosHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const hiddenElements = document.querySelectorAll('.hidden-initially');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const treatmentsLink = navbarLinks.find((l) => l.key === 'treatments');
  const allItems = (treatmentsLink?.subLinks ?? [])
    .flatMap((sub) => sub.subLinkItems ?? [])
    .filter(Boolean) as SubLinkItem[];

  return (
    <div className="w-full">

      {/* Hero */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <TratamientoHero
          titulo="Tratamientos"
          subtitulo="Soluciones dentales especializadas en Bogotá"
          descripcion="Prostodoncia y rehabilitación oral para restaurar tu sonrisa con precisión y estética."
          imagen="/consultorio.webp"
          imagenAlt="Consultorio de la Dra. Sandra Liliana Rodríguez en Bogotá"
          isPrimary={true}
        />
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 md:mt-20">
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <SectionTitle header="h1">Tratamientos dentales en Bogotá</SectionTitle>
          <SectionTitle header="h2">
            Prostodoncia y estética dental con atención personalizada
          </SectionTitle>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            La prostodoncia es la especialidad odontológica enfocada en restaurar y reemplazar
            los dientes dañados o perdidos. En nuestra clínica, cada tratamiento comienza con
            una valoración integral: estudiamos tu caso, tu mordida, tu estética y tu historia
            clínica para diseñar una solución que sea duradera y natural.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Ya sea que necesites una sola corona o una rehabilitación completa, la Dra. Sandra
            Liliana Rodríguez tiene la formación especializada para acompañarte en cada etapa
            del proceso con precisión, cuidado y resultados predecibles.
          </p>
        </div>
      </div>

      {/* Unified treatment grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <SectionTitle header="h3" className="font-bold mb-8 text-center" uppercase>
            Nuestros tratamientos
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allItems.map((item) => {
              const meta = tratamientosMeta[item.key];
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-44">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {meta && (
                      <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                        {meta.categoria}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-base mb-1">{item.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {meta?.descripcion ?? ''}
                    </p>
                    <span className="inline-block mt-3 text-sm font-semibold text-primary">
                      Ver tratamiento →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Agenda CTA section */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
        <div className="relative w-full h-[50vh] md:h-[40vh]">
          <Image
            src="/sandra.webp"
            alt="Dra. Sandra Liliana Rodríguez, prostodoncista en Bogotá"
            fill
            className="object-cover object-top brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/85 to-[#005268]/40" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-xl">
              <SectionTitle header="h2" className="font-bold text-white mb-4 !text-3xl md:!text-4xl normal-case">
                ¿No sabes por dónde empezar?
              </SectionTitle>
              <p className="text-white/90 text-lg mb-8">
                Agenda una consulta de valoración. La Dra. evaluará tu caso y te explicará qué
                tratamiento se adapta mejor a tu situación, sin compromiso.
              </p>
              <Suspense fallback={<div className="h-16" />}>
                <WhatsAppButtonCTA
                  componentName="tratamientos_hub_agenda"
                  isPrimary
                  text="Agenda tu consulta"
                  message={WHATSAPP_DEFAULT_MESSAGE}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
        <Suspense fallback={<div className="h-64" />}>
          <MapHero />
        </Suspense>
      </div>

      <div className="h-20" />
    </div>
  );
}
