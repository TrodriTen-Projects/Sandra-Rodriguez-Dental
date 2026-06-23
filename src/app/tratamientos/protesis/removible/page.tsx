import TratamientoLayout from "@/components/tratamientos/TratamientoLayout";
import { protesisRemovibleData } from "./removible";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prótesis Dental Removible | Dra. Sandra Liliana Rodriguez",
  description: "Recupera tu sonrisa y confianza con prótesis dental removible. Solución cómoda, económica y personalizada para quienes han perdido uno o más dientes.",
  keywords: "prótesis dental removible, prótesis completa, prótesis parcial, sobredentadura, prótesis flexible, pérdida de dientes, rehabilitación oral",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/tratamientos/protesis/removible",
  },
  openGraph: {
    title: "Prótesis Dental Removible | Dra. Sandra Liliana Rodriguez",
    description: "Recupera tu sonrisa y confianza con prótesis dental removible. Solución cómoda, económica y personalizada para quienes han perdido uno o más dientes.",
    url: "https://www.sandrarodriguezdental.com/tratamientos/protesis/removible",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prótesis Dental Removible",
      },
    ],
  },
};

export default function ProtesisRemoviblePage() {
  return <TratamientoLayout {...protesisRemovibleData} />;
}
