import type { Metadata } from "next";
import ScrollAnimator from "@/components/ScrollAnimator";
import SectionTitle from "@/components/SectionTitle";
import { BRAND, CONTACT, whatsAppUrl } from "@/content";

export const metadata: Metadata = {
  title: "Tarifas y precios de tratamientos dentales en Bogotá | Dra. Sandra Rodriguez",
  description:
    "Precios de referencia de tratamientos dentales en Bogotá: limpieza, blanqueamiento, coronas, prótesis, resina, incrustaciones y más. Valoración desde $80.000 con la Dra. Sandra Liliana Rodríguez.",
  keywords:
    "tarifas dentales bogotá, precios odontología bogotá, cuánto cuesta corona dental, precio blanqueamiento dental, precio prótesis dental, precio limpieza dental bogotá, valoración odontológica",
  alternates: {
    canonical: "/tarifas",
  },
  openGraph: {
    title: "Tarifas y precios | Dra. Sandra Liliana Rodriguez",
    description:
      "Precios de referencia de tratamientos dentales en Bogotá. Valoración desde $80.000.",
    url: `${BRAND.SITE_URL}/tarifas`,
    siteName: "Sandra Liliana Rodriguez Dental",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `${BRAND.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tarifas - Sandra Liliana Rodriguez Dental",
      },
    ],
  },
};

/** Precio de referencia "desde" (tarifa global, en COP). */
type Tarifa = { nombre: string; desc: string; precio: string };
type Grupo = { categoria: string; items: Tarifa[] };

// Fuente única de precios (COP). Editar aquí actualiza toda la página.
const tarifas: Grupo[] = [
  {
    categoria: "Consulta",
    items: [
      { nombre: "Valoración", desc: "Consulta inicial: diagnóstico y plan de tratamiento a tu medida.", precio: "$80.000" },
    ],
  },
  {
    categoria: "Prevención y limpieza",
    items: [
      { nombre: "Fase higiénica", desc: "Limpieza dental profesional que remueve placa y sarro.", precio: "$220.000" },
    ],
  },
  {
    categoria: "Estética dental",
    items: [
      { nombre: "Blanqueamiento", desc: "Aclara el tono de tus dientes de forma segura y supervisada.", precio: "$830.000" },
      { nombre: "Resina", desc: "Restauración estética para caries, fracturas o pequeños defectos.", precio: "$220.000" },
    ],
  },
  {
    categoria: "Coronas y restauración",
    items: [
      { nombre: "Corona metal-porcelana", desc: "Funda resistente con núcleo metálico recubierto del color del diente.", precio: "$1.350.000" },
      { nombre: "Corona libre de metal", desc: "Cerámica o zirconio, sin metales: la opción más estética.", precio: "$1.650.000" },
      { nombre: "Corona sobre implante", desc: "La parte visible del implante, hecha a medida para tu sonrisa.", precio: "$3.150.000" },
      { nombre: "Incrustaciones", desc: "Restauración de laboratorio para daños medianos, muy duradera.", precio: "$1.350.000" },
      { nombre: "Reconstrucción de muñón", desc: "Reconstruye la base de un diente debilitado antes de la corona.", precio: "$250.000" },
      { nombre: "Postes o núcleos", desc: "Refuerzo interno para un diente muy destruido, como base de la corona.", precio: "$780.000" },
      { nombre: "Provisionales", desc: "Corona temporal que protege el diente mientras se fabrica la definitiva.", precio: "$270.000" },
    ],
  },
  {
    categoria: "Prótesis dental",
    items: [
      { nombre: "Prótesis inmediata", desc: "Devuelve los dientes de inmediato tras su pérdida.", precio: "$1.275.000" },
      { nombre: "Prótesis mucosoportada", desc: "Prótesis removible que se apoya sobre la encía.", precio: "$1.500.000" },
      { nombre: "Prótesis total", desc: "Reemplaza todos los dientes de una arcada, superior o inferior.", precio: "$1.850.000" },
      { nombre: "Prótesis sobredentadura", desc: "Prótesis anclada sobre implantes o dientes para mayor estabilidad.", precio: "$7.900.000" },
    ],
  },
  {
    categoria: "Oclusión",
    items: [
      { nombre: "Placas", desc: "Férula para bruxismo: protege tus dientes del desgaste por apretar o rechinar.", precio: "$850.000" },
    ],
  },
];

const waMessage =
  "Hola, vi las tarifas en su página web y quisiera agendar una cita de valoración.";

export default function TarifasPage() {
  return (
    <ScrollAnimator threshold={0.08} rootMargin="80px">
      <main>
        {/* ── Header ── */}
        <section className="bg-primaryDark text-white pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-white/80 mb-2">Odontología en Bogotá, Colombia</p>
            <SectionTitle header="h1" className="!text-4xl md:!text-5xl font-bold !mb-4 normal-case">
              Tarifas y precios
            </SectionTitle>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Precios de referencia de nuestros tratamientos de rehabilitación oral y estética
              dental. El plan definitivo se define en la valoración, según tu caso.
            </p>
          </div>
        </section>

        {/* ── Lista de precios ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="hidden-initially text-sm text-gray-500 mb-12">
            Valores de referencia en pesos colombianos (COP). El precio final de cada tratamiento
            se define en la valoración, según la complejidad de tu caso.
          </p>

          <div className="space-y-12">
            {tarifas.map((grupo) => (
              <div key={grupo.categoria} className="hidden-initially">
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-1 pb-2 border-b-2 border-secondaryLight/50">
                  {grupo.categoria}
                </h2>
                <div>
                  {grupo.items.map((t) => (
                    <div
                      key={t.nombre}
                      className="flex items-baseline justify-between gap-6 py-5 border-b border-gray-100"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-gray">{t.nombre}</p>
                        <p className="text-sm text-gray-500 mt-1 leading-snug">{t.desc}</p>
                      </div>
                      <p className="text-right whitespace-nowrap shrink-0">
                        <span className="text-gray-400 text-sm mr-1">desde</span>
                        <span className="font-semibold text-primaryDark">{t.precio}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Nota / disclaimer */}
          <p className="hidden-initially mt-12 text-sm text-gray-500 leading-relaxed">
            Los valores mostrados son de referencia y pueden variar según la complejidad de cada
            caso. El presupuesto exacto se entrega tras la <strong>valoración</strong> ($80.000), donde
            la Dra. evalúa tu situación y define el plan de tratamiento.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="hidden-initially bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <SectionTitle header="h2" className="!text-2xl md:!text-3xl font-bold text-primaryDark !mb-4 normal-case">
              Agenda tu valoración
            </SectionTitle>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Por $80.000 evaluamos tu caso y te entregamos un plan y presupuesto a tu medida, sin
              compromiso.
            </p>
            <a
              href={whatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primaryDark text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-primary transition-colors duration-200"
            >
              Escríbenos por WhatsApp
            </a>
            <p className="text-gray-500 text-sm mt-6">
              O llámanos al{" "}
              <a href={`tel:${CONTACT.PHONE}`} className="text-primary font-semibold underline">
                {CONTACT.PHONE_FORMATTED}
              </a>
            </p>
          </div>
        </section>
      </main>
    </ScrollAnimator>
  );
}
