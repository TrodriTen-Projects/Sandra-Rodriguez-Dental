import type { Metadata } from "next";
import HomeHero from "@/components/heros/HomeHero";
import CardsHero from "@/components/heros/CardsHero";
import TatamientosHomeHero from "@/components/heros/TatamientosHomeHero";
import DoctorHero from "@/components/heros/DoctorHero";
import MapHero from "@/components/heros/MapHero";
import FaqHero from "@/components/heros/FaqHero";
import ProblemasHero from "@/components/heros/ProblemasHero";
import ScrollAnimator from "@/components/ScrollAnimator";
import { faqData } from "@/content";

export const metadata: Metadata = {
  title: "Dra. Sandra Liliana Rodriguez | Rehabilitación Oral y Prostodoncia",
  description:
    "Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.",
  keywords:
    "rehabilitación dental, odontología estética, Sandra Rodriguez, cuidado dental, blanqueamiento dental, implantes dentales, odontología preventiva, salud bucal, prostodoncia, rehabilitación oral",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dra. Sandra Liliana Rodriguez | Rehabilitación Oral y Prostodoncia",
    description:
      "Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.",
    url: "https://www.sandrarodriguezdental.com",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Sandra Rodriguez",
        type: "image/png",
      },
    ],
  },
};

export default function Home() {
  return (
    <ScrollAnimator threshold={0.1} rootMargin="100px">
      {/* Hero is the LCP element — render it eagerly and visibly (no reveal). */}
      <HomeHero />

      <div className="py-8 md:py-16 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <CardsHero />
      </div>

      <div className="py-12 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <TatamientosHomeHero />
      </div>

      <div className="py-8 md:py-16 hidden-initially transition-all duration-700 opacity-0 translate-y-10">
        <ProblemasHero />
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
    </ScrollAnimator>
  );
}
