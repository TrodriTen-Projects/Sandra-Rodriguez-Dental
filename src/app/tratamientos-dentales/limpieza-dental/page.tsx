import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { limpiezaDentalData } from "./limpieza-dental";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Limpieza Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Limpieza dental profesional (profilaxis y fase higiénica) en Bogotá: remueve placa y sarro, previene caries y enfermedad de las encías. Atención con la Dra. Sandra Liliana Rodríguez.",
  keywords:
    "limpieza dental bogotá, profilaxis dental, limpieza dental profunda, quitar sarro, precio limpieza dental, fase higiénica, salud de las encías",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/limpieza-dental",
  },
  openGraph: {
    title: "Limpieza Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Limpieza dental profesional para prevenir caries y enfermedad de las encías, en Bogotá.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/limpieza-dental",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Limpieza Dental - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function LimpiezaDentalPage() {
  return <TratamientoLayout {...limpiezaDentalData} />;
}
