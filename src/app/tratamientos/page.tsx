import TratamientosHubPage from "@/components/tratamientos/TratamientosHubPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos Dentales en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Conoce todos los tratamientos de prostodoncia y rehabilitación oral disponibles en la clínica de la Dra. Sandra Liliana Rodríguez en Bogotá. Coronas, prótesis, blanqueamiento y más.",
  keywords: "tratamientos dentales bogotá, prostodoncia bogotá, rehabilitación oral bogotá, coronas dentales, prótesis dental, blanqueamiento dental, odontología especializada bogotá",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos",
  },
  openGraph: {
    title: "Tratamientos Dentales en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Prostodoncia y rehabilitación oral para restaurar tu sonrisa con precisión y estética.",
    url: "https://www.sandrarodriguezdental.com/tratamientos",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tratamientos Dentales - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function TratamientosPage() {
  return <TratamientosHubPage />;
}
