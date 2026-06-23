import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { coronasNoMetalData } from "./nometal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coronas Libres de Metal en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Restauraciones dentales estéticas y biocompatibles sin metales. Coronas de porcelana pura, zirconio y disilicato de litio para máxima naturalidad. Atención personalizada en Bogotá.",
  keywords: "coronas libres de metal, coronas de porcelana pura, coronas de zirconio, coronas sin metal, restauración dental estética, odontología Bogotá, biocompatibilidad dental, clínica dental",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/nometal",
  },
  openGraph: {
    title: "Coronas Libres de Metal en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Restauraciones dentales estéticas y biocompatibles sin metales. Coronas de porcelana pura, zirconio y disilicato de litio para máxima naturalidad.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/nometal",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coronas Libres de Metal",
      },
    ],
  },
};

export default function CoronasNoMetalPage() {
  return <TratamientoLayout {...coronasNoMetalData} />;
} 