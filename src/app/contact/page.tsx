import { Metadata } from "next";
import ContactIcons from "@/components/contact/ContactIcons";
import SocialIcons from "@/components/contact/SocialIcons";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contacto | Dra. Sandra Liliana Rodriguez",
  description: "Contáctanos para agendar tu cita. Clínica dental especializada en rehabilitación oral y prostodoncia en Bogotá. Atención personalizada con la Dra. Sandra Liliana Rodriguez Ariza.",
  keywords: "contacto clínica dental, agendar cita dental, odontología Bogotá, cita prostodoncia, contacto dentista Bogotá, clínica dental Bogotá",
  alternates: {
    canonical: "https://www.sandrarodriguezdental.com/contact",
  },
  openGraph: {
    title: "Contacto | Dra. Sandra Liliana Rodriguez",
    description: "Contáctanos para agendar tu cita. Clínica dental especializada en rehabilitación oral y prostodoncia en Bogotá.",
    url: "https://www.sandrarodriguezdental.com/contact",
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.sandrarodriguezdental.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Sandra Liliana Rodriguez Dental",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <SectionTitle header="h1" className="text-4xl md:text-5xl font-bold text-primaryDark mb-4">
            Contáctanos
          </SectionTitle>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para atender tus consultas y agendar tu cita.
            Contáctanos por tu medio preferido.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <SectionTitle header="h2" className="text-2xl font-semibold text-primaryDark mb-6">
                Información de Contacto
              </SectionTitle>
              <ContactIcons showSocialIcons={false} />
            </div>

            {/* Social Media */}
            <div>
              <SectionTitle header="h2" className="text-2xl font-semibold text-primaryDark mb-6">
                Síguenos en Redes Sociales
              </SectionTitle>
              <SocialIcons iconClassName="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
          <SectionTitle header="h2" className="text-2xl font-semibold text-primaryDark mb-4">
            Horario de Atención
          </SectionTitle>
          <div className="space-y-2 text-gray-700">
            <p><strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM</p>
            <p><strong>Sábados:</strong> Previa cita</p>
            <p><strong>Domingos:</strong> Cerrado</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primaryDark mb-4">
              Ubicación
            </h3>
            <p className="text-gray-700">
              Bogotá, Colombia
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            ¿Listo para mejorar tu sonrisa?
          </p>
          <p className="text-2xl font-semibold text-primary">
            ¡Agenda tu cita hoy mismo!
          </p>
        </div>
      </div>
    </div>
  );
}
