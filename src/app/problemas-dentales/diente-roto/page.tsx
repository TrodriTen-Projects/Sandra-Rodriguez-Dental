import type { Metadata } from "next";
import ProblemaLayout from "@/components/problemas/ProblemaLayout";
import { dienteRotoData } from "./diente-roto";
import { BRAND } from "@/content";

export const metadata: Metadata = {
  title: "¿Diente roto o fracturado? Cómo restaurarlo en Bogotá | Dra. Sandra Rodriguez",
  description:
    "Un diente roto o fracturado conviene tratarlo pronto. Conoce las opciones para restaurarlo —resina, coronas y prótesis— con la Dra. Sandra Liliana Rodríguez en Bogotá.",
  keywords:
    "diente roto, diente fracturado, reconstruir diente roto, arreglar diente partido, corona dental bogotá, diente astillado",
  alternates: {
    canonical: "/problemas-dentales/diente-roto",
  },
  openGraph: {
    title: "¿Diente roto o fracturado? Cómo restaurarlo en Bogotá",
    description:
      "Opciones para restaurar un diente roto o fracturado con la Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales/diente-roto`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Restauración de diente roto - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function DienteRotoPage() {
  return <ProblemaLayout {...dienteRotoData} />;
}
