"use client";

import { useEffect } from 'react';
import HomeHero from "@/components/heros/HomeHero";
import CardsHero from "@/components/heros/CardsHero";
import TatamientosHomeHero from "@/components/heros/TatamientosHomeHero";
import DoctorHero from "@/components/heros/DoctorHero";
import MapHero from "@/components/heros/MapHero";
import FaqHero from "@/components/heros/FaqHero";
import { faqData } from "@/content";

export default function Home() {
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
    <>
      {/* Hero is the LCP element — render it eagerly and visibly (no reveal). */}
      <HomeHero />

      <div className="py-8 md:py-16 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <CardsHero />
      </div>

      <div className="py-12 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <TatamientosHomeHero />
      </div>

      <div className="py-4 md:py-12 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <DoctorHero />
      </div>

      <div className="py-4 md:py-12 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <MapHero />
      </div>

      <div className="py-4 md:py-12 hidden-initially transition-all duration-700 opacity-0 translate-y-10 px-4">
        <FaqHero faqs={faqData} />
      </div>
    </>
  );
}
