import type { Metadata } from "next";
import ProblemaLayout from "@/components/problemas/ProblemaLayout";
import { dientesManchadosData } from "./dientes-manchados";
import { BRAND } from "@/content";

export const metadata: Metadata = {
  title: "¿Dientes manchados o amarillos? Blanqueamiento en Bogotá | Dra. Sandra Rodriguez",
  description:
    "El café, el tabaco y el tiempo manchan los dientes. Conoce cómo recuperar su color de forma segura con blanqueamiento profesional de la Dra. Sandra Liliana Rodríguez en Bogotá.",
  keywords:
    "dientes manchados, dientes amarillos, blanquear dientes, manchas en los dientes, blanqueamiento dental bogotá, quitar manchas dientes",
  alternates: {
    canonical: "/problemas-dentales/dientes-manchados",
  },
  openGraph: {
    title: "¿Dientes manchados o amarillos? Blanqueamiento en Bogotá",
    description:
      "Recupera el color de tus dientes de forma segura con la Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales/dientes-manchados`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Dientes manchados y blanqueamiento - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function DientesManchadosPage() {
  return <ProblemaLayout {...dientesManchadosData} />;
}
