import type { Metadata } from "next";
import ProblemaLayout from "@/components/problemas/ProblemaLayout";
import { desgasteDentalData } from "./desgaste-dental";
import { BRAND } from "@/content";

export const metadata: Metadata = {
  title: "¿Sonrisa desgastada? Rehabilitación oral en Bogotá | Dra. Sandra Rodriguez",
  description:
    "El desgaste dental acorta y envejece la sonrisa. Conoce cómo la rehabilitación oral devuelve función y estética, con la Dra. Sandra Liliana Rodríguez en Bogotá.",
  keywords:
    "desgaste dental, dientes desgastados, rehabilitación oral bogotá, sonrisa envejecida, restaurar dientes desgastados, dientes cortos",
  alternates: {
    canonical: "/problemas-dentales/desgaste-dental",
  },
  openGraph: {
    title: "¿Sonrisa desgastada? Rehabilitación oral en Bogotá",
    description:
      "La rehabilitación oral devuelve función y estética a una sonrisa desgastada. Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales/desgaste-dental`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rehabilitación oral por desgaste dental - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function DesgasteDentalPage() {
  return <ProblemaLayout {...desgasteDentalData} />;
}
