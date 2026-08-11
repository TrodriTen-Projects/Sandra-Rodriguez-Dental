import type { Metadata } from "next";
import ProblemaLayout from "@/components/problemas/ProblemaLayout";
import { meFaltanDientesData } from "./me-faltan-dientes";
import { BRAND } from "@/content";

export const metadata: Metadata = {
  title: "¿Te faltan dientes? Cómo reemplazarlos en Bogotá | Dra. Sandra Rodriguez",
  description:
    "Perder uno o varios dientes afecta tu salud y tu sonrisa. Conoce las opciones para reemplazarlos —prótesis e implantes— con la Dra. Sandra Liliana Rodríguez, prostodoncista en Bogotá.",
  keywords:
    "me faltan dientes, dientes faltantes, reemplazar dientes perdidos, poner un diente, prótesis dental bogotá, dientes postizos",
  alternates: {
    canonical: "/problemas-dentales/me-faltan-dientes",
  },
  openGraph: {
    title: "¿Te faltan dientes? Cómo reemplazarlos en Bogotá",
    description:
      "Opciones para reemplazar dientes perdidos —prótesis e implantes— con la Dra. Sandra Rodríguez, Bogotá.",
    url: `${BRAND.SITE_URL}/problemas-dentales/me-faltan-dientes`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Reemplazo de dientes faltantes - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function MeFaltanDientesPage() {
  return <ProblemaLayout {...meFaltanDientesData} />;
}
