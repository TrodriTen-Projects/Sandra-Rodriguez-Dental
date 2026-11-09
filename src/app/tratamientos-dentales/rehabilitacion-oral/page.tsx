import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { rehabilitacionOralData } from "./rehabilitacion-oral";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rehabilitación Oral en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Rehabilitación oral integral en Bogotá: recupera función, salud y estética con coronas, prótesis e implantes en un plan a tu medida. Valoración con la Dra. Sandra Rodríguez, prostodoncista.",
  keywords:
    "rehabilitación oral, rehabilitación oral bogotá, rehabilitación oral precios, rehabilitación dental, prostodoncia, prótesis dental, coronas dentales, rehabilitación oral completa, rehabilitador oral bogotá",
  alternates: {
    canonical:
      "https://www.sandrarodriguezdental.com/tratamientos-dentales/rehabilitacion-oral",
  },
  openGraph: {
    title: "Rehabilitación Oral en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Rehabilitación oral integral en Bogotá: coronas, prótesis e implantes en un plan a tu medida para recuperar función y estética.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/rehabilitacion-oral",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rehabilitación Oral - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function RehabilitacionOralPage() {
  return <TratamientoLayout {...rehabilitacionOralData} />;
}
