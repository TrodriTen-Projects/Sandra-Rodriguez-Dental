'use client'
import Image from "next/image";
import React from "react";
import WhatsappCTA from "@/components/buttons/WhatsappButtonCTA";
import SectionTitle from '../SectionTitle';

interface TratamientoHeroProps {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  ubicacion?: string;
  isPrimary?: boolean;
}

export default function TratamientoHero({
  titulo,
  subtitulo,
  descripcion,
  imagen,
  imagenAlt,
  ubicacion = "Bogotá, Colombia",
  isPrimary = false,
}: TratamientoHeroProps) {
  return (
    <section className="relative w-full h-[100vh] md:h-[80vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-sm text-white/90 mb-2">{`${titulo} en ${ubicacion}`}</p>
          <SectionTitle header="h2" className="font-bold text-white mb-4 text-5xl">
            {subtitulo}
          </SectionTitle>
          <p className="text-xl text-white mb-8">{descripcion}</p>

          <div className="flex flex-wrap gap-4">
            <WhatsappCTA componentName={`tratamiento_hero_${titulo}`} text="¡Contáctanos!" phoneNumber="+573212786958" isPrimary={isPrimary} />
          </div>
        </div>
      </div>
    </section>
  );
} 