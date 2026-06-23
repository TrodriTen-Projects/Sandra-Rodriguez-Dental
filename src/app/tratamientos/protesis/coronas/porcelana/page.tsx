import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { coronasPorcelanaData } from "./porcelana";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coronas Metal Porcelana en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Restauraciones dentales resistentes y estéticas con metal y porcelana. Combina la fuerza del metal con la estética de la porcelana para dientes duraderos y naturales. Atención personalizada en Bogotá.",
  keywords: "coronas metal porcelana, coronas de metal cerámica, restauración dental resistente, coronas dentales, odontología Bogotá, prótesis dental, clínica dental, rehabilitación oral",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/porcelana",
  },
  openGraph: {
    title: "Coronas Metal Porcelana en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Restauraciones dentales resistentes y estéticas con metal y porcelana. Combina la fuerza del metal con la estética de la porcelana para dientes duraderos y naturales.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/coronas/porcelana",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coronas Metal Porcelana",
      },
    ],
  },
};

export default function CoronasPorcelanaPage() {
  return <TratamientoLayout {...coronasPorcelanaData} />;
} 