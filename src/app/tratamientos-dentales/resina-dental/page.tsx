import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { resinaDentalData } from "./resina-dental";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resina Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Resina dental (obturación estética) en Bogotá: repara caries, fracturas y pequeños defectos con un material del color del diente, en una sola sesión. Con la Dra. Sandra Liliana Rodríguez.",
  keywords:
    "resina dental bogotá, obturación estética, calza dental, arreglar diente con caries, resina dientes frontales, precio resina dental",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/resina-dental",
  },
  openGraph: {
    title: "Resina Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Obturaciones estéticas del color del diente para caries y fracturas, en Bogotá.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/resina-dental",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resina Dental - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function ResinaDentalPage() {
  return <TratamientoLayout {...resinaDentalData} />;
}
