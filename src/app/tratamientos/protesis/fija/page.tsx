import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { protesisFijaData } from "./fija";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prótesis Dental Fija en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Recupera la funcionalidad y estética de tu sonrisa con prótesis dental fija. Solución duradera y natural para reemplazar dientes perdidos o dañados. Atención personalizada en Bogotá.",
  keywords: "prótesis dental fija, coronas dentales, puentes dentales, rehabilitación oral, dientes fijos, odontología Bogotá, restauración dental, clínica dental",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/fija",
  },
  openGraph: {
    title: "Prótesis Dental Fija en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Recupera la funcionalidad y estética de tu sonrisa con prótesis dental fija. Solución duradera y natural para reemplazar dientes perdidos o dañados.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/fija",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prótesis Dental Fija",
      },
    ],
  },
};

export default function ProtesisRemoviblePage() {
  return <TratamientoLayout {...protesisFijaData} />;
}
