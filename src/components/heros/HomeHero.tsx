'use client'
import Image from "next/image";
import React from "react";
import t from "../../translations/es/translations.json";
import WhatsAppButtonCTA from "../buttons/WhatsappButtonCTA";
import SectionTitle from '../SectionTitle';

const HomeHero = () => {
  return (
    <section className="relative w-full h-[100vh] md:h-[80vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.webp"
          alt="Imagen principal de la clínica dental Sandra Rodríguez en Bogotá"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005268]/80 to-transparent"></div>
      </div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-sm text-white/90 mb-2">Rehabilitación Oral en Bogotá, Colombia</h1>
          <SectionTitle header="h3" className="font-bold text-white mb-4 text-5xl">
            {t.homeHero.title}
          </SectionTitle>
          <p className="text-xl text-white mb-8">{t.homeHero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButtonCTA
              text={t.homeHero.CTA}
              phoneNumber="+573212786958"
              isPrimary={true}
              componentName="home_hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
