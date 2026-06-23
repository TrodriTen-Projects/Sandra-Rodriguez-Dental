'use client'
import { useEffect } from "react";
import TratamientoHero from "./TratamientoHero";
import SectionTitle from "../SectionTitle";
import TratamientoSection from "./TratamientoSection";
import TratamientoProceso from "./TratamientoProceso";
import TratamientoTipos from "./TratamientoTipos";
import FirstVisitSection from "./FirstVisitSection";
import FaqHero from "../heros/FaqHero";
import MapHero from "../heros/MapHero";
import WhatsAppButtonCTA from "../buttons/WhatsappButtonCTA";
import { whatsAppTreatmentMessage } from "@/content";

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
      rootMargin: '100px',
    });

    const hiddenElements = document.querySelectorAll('.hidden-initially');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <TratamientoHero
          titulo={titulo}
          subtitulo={heroSubtitulo}
          descripcion={heroDescripcion}
          imagen={heroImage}
          imagenAlt={heroAlt}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 md:mt-20">
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20 text-center">
          <SectionTitle header="h1">
            {tituloSeo}
          </SectionTitle>
          <SectionTitle header="h2">
            {descriptionSeo}
          </SectionTitle>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 md:mt-20">
        {/* PROBLEMA QUE DA SOLUCIÓN ESTE TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <TratamientoSection
            title={problema.titulo}
            description={problema.descripcion}
            image={problema.imagen}
            imageAlt="Problema dental"
            overlayTitle={problema.overlayTitle}
            overlayText={problema.overlayText}
            imageFirst={false}
          />
        </div>

        {/* ES LO INDICADO PARA TI? */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <TratamientoSection
            title={indicado.titulo}
            description={indicado.descripcion}
            image={indicado.imagen}
            imageAlt="¿Es lo indicado para ti?"
            overlayTitle={indicado.overlayTitle}
            overlayText={indicado.overlayText}
            imageFirst={true}
          />
        </div>

        {/* PROCESO DEL TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-4 md:mb-8">
          <div className="bg-gray-100 p-6 md:p-10 rounded-lg mt-2">
            <SectionTitle header="h3" className="text-2xl md:text-3xl font-semibold text-center">PROCESO DEL TRATAMIENTO</SectionTitle>
          </div>
          <TratamientoProceso
            pasos={proceso.pasos}
            imagenes={proceso.imagenes}
            tituloSecundario={proceso.tituloSecundario}
            altPrefix={proceso.altPrefix}
          />
        </div>

        {/* TIPOS DE TRATAMIENTO */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <TratamientoTipos
            titulo={tipos.titulo}
            opciones={tipos.opciones}
          />
        </div>

        {/* FIRST VISIT SECTION */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
          <FirstVisitSection
            titulo={primeraVisita.titulo}
            descripcion={primeraVisita.descripcion}
            valores={primeraVisita.valores}
          />
        </div>

        {/* CTA BUTTON */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mt-16 text-center mb-12 md:mb-20">
          <WhatsAppButtonCTA
            componentName={`tratamiento_layout_${titulo}`}
            isPrimary
            text="Agenda consulta"
            message={whatsAppTreatmentMessage(titulo)}
          />
        </div>

        {/* FAQ SECTION */}
        <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mt-8 md:mt-20">
          <FaqHero faqs={faqs} />
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="hidden-initially transition-all duration-1000 opacity-0 translate-y-10 mb-12 md:mb-20">
        <MapHero />
      </div>
      <div className="h-20"></div>
    </div>
  );
}
