import type { Metadata } from "next";
import ProblemaLayout from "@/components/problemas/ProblemaLayout";
import { bruxismoData } from "./bruxismo";
import { BRAND } from "@/content";

export const metadata: Metadata = {
  title: "¿Aprietas o rechinas los dientes? Bruxismo en Bogotá | Dra. Sandra Rodriguez",
  description:
    "El bruxismo desgasta tus dientes y causa dolor de mandíbula. Conoce el tratamiento —férula a medida y restauración— con la Dra. Sandra Liliana Rodríguez en Bogotá.",
  keywords:
    "bruxismo, aprieto los dientes, rechinar los dientes, férula para bruxismo, placa para bruxismo, dolor de mandíbula bogotá, desgaste dental",
  alternates: {
    canonical: "/problemas-dentales/bruxismo",
  },
  openGraph: {
    title: "¿Aprietas o rechinas los dientes? Bruxismo en Bogotá",
    description:
      "Tratamiento del bruxismo: férula a medida y restauración del desgaste con la Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales/bruxismo`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tratamiento de bruxismo - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function BruxismoPage() {
  return <ProblemaLayout {...bruxismoData} />;
}
