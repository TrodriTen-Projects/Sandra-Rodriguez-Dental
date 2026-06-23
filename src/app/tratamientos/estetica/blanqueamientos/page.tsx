import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { blanqueamientoData } from "./blanqueamiento";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blanqueamiento Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
  description: "Tratamiento estético para aclarar el color de los dientes y eliminar manchas. Blanqueamiento en clínica y en casa con resultados visibles y seguros. Atención personalizada en Bogotá.",
  keywords: "blanqueamiento dental, blanqueamiento de dientes, tratamiento estético dental, odontología estética Bogotá, clínica dental, sonrisa blanca, eliminación de manchas dentales",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/estetica/blanqueamientos",
  },
  openGraph: {
    title: "Blanqueamiento Dental en Bogotá | Dra. Sandra Liliana Rodriguez",
    description: "Tratamiento estético para aclarar el color de los dientes y eliminar manchas. Blanqueamiento en clínica y en casa con resultados visibles y seguros.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/estetica/blanqueamientos",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blanqueamiento Dental",
      },
    ],
  },
};

export default function BlanqueamientoPage() {
  return <TratamientoLayout {...blanqueamientoData} />;
} 