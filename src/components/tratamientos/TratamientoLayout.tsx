'use client'
import React, { useEffect, lazy, Suspense } from "react";
import TratamientoHero from "./TratamientoHero";
import SectionTitle from "../SectionTitle";
// Lazy load components that aren't in the initial viewport
const TratamientoSection = lazy(() => import("./TratamientoSection"));
const TratamientoProceso = lazy(() => import("./TratamientoProceso"));
const TratamientoTipos = lazy(() => import("./TratamientoTipos"));
const FirstVisitSection = lazy(() => import("./FirstVisitSection"));
const FaqHero = lazy(() => import("../heros/FaqHero"));
const MapHero = lazy(() => import("../heros/MapHero"));
const WhatsAppButtonCTA = lazy(() => import("../buttons/WhatsappButtonCTA"));

interface TratamientoProps {
  titulo: string;
  heroImage: string;
  heroAlt: string;
  heroSubtitulo: string;
  heroDescripcion: string;
  tituloSeo: string;
  descriptionSeo: string;
  problema: {
    titulo: string;
    descripcion: string;
    imagen: string;
    overlayTitle: string;
    overlayText: string;
  };
  indicado: {
    titulo: string;
    descripcion: string;
    imagen: string;
    overlayTitle: string;
    overlayText: string;
  };
  proceso: {
    titulo: string;
    pasos: Array<{
      numero: number;
      descripcion: string;
    }>;
    imagenes: string[];
    tituloSecundario: string;
    altPrefix: string;
  };
  tipos: {
    titulo: string;
    opciones: Array<{
      nombre: string;
      descripcion: string;
      mejorPara: string;
      resultado: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  primeraVisita: {
    titulo: string;
    descripcion: string[];
    valores: Array<{
      icono: string;
      titulo: string;
      descripcion: string;
    }>;
  };
}

export default function TratamientoLayout({
  titulo,
  heroImage,
  heroAlt,
  heroSubtitulo,
  heroDescripcion,
  tituloSeo,
  descriptionSeo,
  problema,
  indicado,
  proceso,
  tipos,
  faqs,
  primeraVisita,
}: TratamientoProps) {
  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { 
      threshold: 0.1,
      // Add rootMargin to start loading a bit before the element comes into view
      rootMargin: '100px'
    });

    const hiddenElements = document.querySelectorAll('.hidden-initially');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Don't animate the first view */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
      <TratamientoHero 
        titulo={titulo}
        subtitulo={heroSubtitulo}
        descripcion={heroDescripcion}
        imagen={heroImage}
        imagenAlt={heroAlt}
      />
            </Suspense>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 md:mt-20">
            <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20 text-center">
            <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
              <SectionTitle header="h1">
                  {tituloSeo}
              </SectionTitle>
              <SectionTitle header="h2">
                  {descriptionSeo}
              </SectionTitle>
              </Suspense>
              </div>
            </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 md:mt-20">
        {/* PROBLEMA QUE DA SOLUCIÓN ESTE TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <TratamientoSection
              title={problema.titulo}
              description={problema.descripcion}
              image={problema.imagen}
              imageAlt="Problema dental"
              overlayTitle={problema.overlayTitle}
              overlayText={problema.overlayText}
              imageFirst={false}
            />
          </Suspense>
          </div>
        
        {/* ES LO INDICADO PARA TI? */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <TratamientoSection
              title={indicado.titulo}
              description={indicado.descripcion}
              image={indicado.imagen}
              imageAlt="¿Es lo indicado para ti?"
              overlayTitle={indicado.overlayTitle}
              overlayText={indicado.overlayText}
              imageFirst={true}
            />
          </Suspense>
        </div>
        
        {/* PROCESO DEL TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-4 md:mb-8">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <div className="bg-gray-100 p-6 md:p-10 rounded-lg mt-2">
              <SectionTitle header="h3" className="text-2xl md:text-3xl font-semibold text-center">PROCESO DEL TRATAMIENTO</SectionTitle>
            </div>
            <TratamientoProceso 
              pasos={proceso.pasos}
              imagenes={proceso.imagenes}
              tituloSecundario={proceso.tituloSecundario}
              altPrefix={proceso.altPrefix}
            />
          </Suspense>
        </div>

        {/* TIPOS DE TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <TratamientoTipos 
              titulo={tipos.titulo}
              opciones={tipos.opciones}
            />
          </Suspense>
        </div>
        
        {/* FIRST VISIT SECTION */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <FirstVisitSection 
              titulo={primeraVisita.titulo}
              descripcion={primeraVisita.descripcion}
              valores={primeraVisita.valores}
            />
          </Suspense>
        </div>
        
        {/* CTA BUTTON */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mt-16 text-center mb-12 md:mb-20">
          <Suspense fallback={<div className="h-16 flex items-center justify-center">Loading...</div>}>
            <WhatsAppButtonCTA 
              componentName={`tratamiento_layout_${titulo}`} 
              isPrimary 
              text="Agenda consulta" 
            />
          </Suspense>
        </div>
        
        {/* FAQ SECTION */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mt-8 md:mt-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
            <FaqHero faqs={faqs} />
          </Suspense>
        </div>
      </div>
      
      {/* MAP SECTION */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <MapHero />
        </Suspense>
      </div>
      <div className="h-20"></div>
    </div>
  );
} 