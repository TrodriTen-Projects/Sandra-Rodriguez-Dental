import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { implantesDentalesData } from "./implantes-dentales";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implantes Dentales en Bogotá | Dra. Sandra Liliana Rodriguez",
  description:
    "Implantes dentales en Bogotá para reemplazar dientes perdidos de forma fija y natural. Planificación y prótesis con la Dra. Sandra Liliana Rodríguez; colocación en colaboración con especialista.",
  keywords:
    "implantes dentales bogotá, implante dental precio, reemplazar diente perdido, corona sobre implante, prótesis sobre implantes, rehabilitación con implantes",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/implantes-dentales",
  },
  openGraph: {
    title: "Implantes Dentales en Bogotá | Dra. Sandra Liliana Rodriguez",
    description:
      "Reemplaza dientes perdidos con implantes y prótesis a medida, en Bogotá.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/implantes-dentales",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Implantes Dentales - Dra. Sandra Liliana Rodriguez",
      },
    ],
  },
};

export default function ImplantesDentalesPage() {
  return <TratamientoLayout {...implantesDentalesData} />;
}
