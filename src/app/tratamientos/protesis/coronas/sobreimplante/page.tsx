import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { coronasSobreImplanteData } from "./sobreimplante";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coronas sobre Implantes en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Restauraciones dentales fijas sobre implantes para reemplazar dientes perdidos. Solución definitiva con máxima estabilidad, estética y funcionalidad. Atención personalizada en Bogotá.",
  keywords: "coronas sobre implantes, implantes dentales, restauración dental fija, odontología Bogotá, prótesis sobre implantes, rehabilitación oral, clínica dental",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/sobreimplante",
  },
  openGraph: {
    title: "Coronas sobre Implantes en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Restauraciones dentales fijas sobre implantes para reemplazar dientes perdidos. Solución definitiva con máxima estabilidad, estética y funcionalidad.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/sobreimplante",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coronas sobre Implantes",
      },
    ],
  },
};

export default function CoronasSobreImplantePage() {
  return <TratamientoLayout {...coronasSobreImplanteData} />;
} 