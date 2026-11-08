import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { blanqueamientoData } from "./blanqueamiento";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blanqueamiento Dental en Bogotá: precio y tipos | Dra. Sandra Rodriguez",
  description: "Blanqueamiento dental en Bogotá desde $830.000: aclara el color de tus dientes y elimina manchas con resultados visibles y seguros, en clínica o en casa. Valoración con la Dra. Sandra Rodríguez.",
  keywords: "blanqueamiento dental bogota, cuánto cuesta blanqueamiento dental, blanqueamiento dental precio bogotá, valor blanqueamiento dental, blanqueamiento de dientes, tratamiento estético dental, odontología estética Bogotá, sonrisa blanca, eliminación de manchas dentales",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos-dentales/estetica-dental-blanqueamientos",
  },
  openGraph: {
    title: "Blanqueamiento Dental en Bogotá: precio y tipos | Dra. Sandra Rodriguez",
    description: "Blanqueamiento dental en Bogotá desde $830.000: aclara el color de tus dientes y elimina manchas con resultados visibles y seguros, en clínica o en casa.",
    url: "https://www.sandrarodriguezdental.com/tratamientos-dentales/estetica-dental-blanqueamientos",
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