import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { disenoSonrisaData } from "./diseno-de-sonrisa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño de Sonrisa en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Diseño de sonrisa personalizado en Bogotá: combinamos blanqueamiento, carillas, resinas y coronas para una sonrisa armónica y natural. Planificación con la Dra. Sandra Liliana Rodríguez.",
  keywords:
    "diseño de sonrisa bogotá, diseño de sonrisa precio, microdiseño de sonrisa, carillas, estética dental bogotá, sonrisa perfecta",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/diseno-de-sonrisa",
  },
  openGraph: {
    title: "Diseño de Sonrisa en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Diseño de sonrisa integral y natural, planificado según tu rostro. En Bogotá.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/diseno-de-sonrisa",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diseño de Sonrisa - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function DisenoSonrisaPage() {
  return <TratamientoLayout {...disenoSonrisaData} />;
}
