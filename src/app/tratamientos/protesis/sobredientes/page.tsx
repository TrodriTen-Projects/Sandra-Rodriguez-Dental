import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { protesisSobredienteData } from "./sobredientes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobredentadura sobre Dientes Naturales | Dra. Sandra Liliana Rodriguez",
  description: "La sobredentadura sobre dientes naturales ofrece mayor estabilidad y comodidad. Descubre esta opción avanzada para pacientes con pérdida parcial de dientes en nuestra clínica dental.",
  keywords: "sobredentadura, sobredentadura sobre dientes, prótesis dental, estabilidad dental, odontología avanzada, clínica dental Bogotá, rehabilitación oral",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/sobredientes",
  },
  openGraph: {
    title: "Sobredentadura sobre Dientes Naturales | Dra. Sandra Liliana Rodriguez",
    description: "La sobredentadura sobre dientes naturales ofrece mayor estabilidad y comodidad. Descubre esta opción avanzada para pacientes con pérdida parcial de dientes.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/sobredientes",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobredentadura sobre Dientes Naturales",
      },
    ],
  },
};

export default function ProtesisRemoviblePage() {
  return <TratamientoLayout {...protesisSobredienteData} />;
}
