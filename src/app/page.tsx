"use client";

import { useEffect, lazy, Suspense } from 'react';
const HomeHero = lazy(() => import("@/components/heros/HomeHero"));
// Lazy load components that aren't in the initial viewport
const DoctorHero = lazy(() => import("@/components/heros/DoctorHero"));
const MapHero = lazy(() => import("@/components/heros/MapHero"));
const CardsHero = lazy(() => import("@/components/heros/CardsHero"));
const FaqHero = lazy(() => import("@/components/heros/FaqHero"));
import TatamientosHomeHero from "@/components/heros/TatamientosHomeHero";
import { faqData } from "@/data/faqData";

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
    <>
      {/* Don't add animations to the critical first view content */}
      <div className="hidden-initially transition-all duration-1000 opacity-0">
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <HomeHero />
        </Suspense>
        </div>

        <div className="py-8 md:py-16 hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <CardsHero />
        </Suspense>
      </div>

      <div className="py-12 hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <TatamientosHomeHero />
        </Suspense>
        </div>

      <div className="py-4 md:py-12 hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <DoctorHero />
        </Suspense>
      </div>
      
      <div className="py-4 md:py-12 hidden-initially transition-all duration-1000 opacity-0 translate-y-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <MapHero />
        </Suspense>
      </div>
      
      <div className="py-4 md:py-12 hidden-initially transition-all duration-1000 opacity-0 translate-y-10 px-4">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
          <FaqHero faqs={faqData} />
        </Suspense>
      </div>
    </>
  );
}
