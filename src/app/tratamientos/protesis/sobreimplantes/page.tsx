import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { protesisSobreImplanteData } from "./sobreimplantes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobredentadura sobre Implantes en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Recupera tu sonrisa y confianza con sobredentadura sobre implantes. Máxima fijación, comodidad y estética para quienes han perdido varios dientes. Consulta en nuestra clínica dental.",
  keywords: "sobredentadura sobre implantes, prótesis sobre implantes, implantes dentales, rehabilitación oral, odontología Bogotá, clínica dental, dientes fijos",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/sobreimplantes",
  },
  openGraph: {
    title: "Sobredentadura sobre Implantes en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Recupera tu sonrisa y confianza con sobredentadura sobre implantes. Máxima fijación, comodidad y estética para quienes han perdido varios dientes.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/sobreimplantes",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobredentadura sobre Implantes",
      },
    ],
  },
};

export default function ProtesisRemoviblePage() {
  return <TratamientoLayout {...protesisSobreImplanteData} />;
}
