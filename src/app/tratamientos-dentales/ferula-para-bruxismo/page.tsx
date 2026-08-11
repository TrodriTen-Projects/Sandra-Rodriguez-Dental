import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { ferulaBruxismoData } from "./ferula-para-bruxismo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Férula para Bruxismo en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Férula de descanso a medida para el bruxismo en Bogotá: protege tus dientes del desgaste por apretar o rechinar y alivia la tensión de la mandíbula. Con la Dra. Sandra Liliana Rodríguez.",
  keywords:
    "férula para bruxismo, placa para bruxismo bogotá, placa miorrelajante, férula de descanso, tratamiento bruxismo, desgaste dental, dolor de mandíbula",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/ferula-para-bruxismo",
  },
  openGraph: {
    title: "Férula para Bruxismo en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Férula a medida para proteger tus dientes del desgaste por bruxismo, en Bogotá.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/ferula-para-bruxismo",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Férula para Bruxismo - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function FerulaBruxismoPage() {
  return <TratamientoLayout {...ferulaBruxismoData} />;
}
