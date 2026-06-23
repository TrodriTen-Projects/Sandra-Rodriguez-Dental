/**
 * Site content — the things the website *says*: contact details, brand, social
 * links, routes, SEO copy and page-level text. Single source of truth, decoupled
 * from UI config (src/constants) and from tracking config (src/lib/env).
 */

/** Contact information — navigation, footer, contact page, CTA buttons. */
export const CONTACT = {
  PHONE: '+573212786958',
  PHONE_FORMATTED: '+57 321 278 6958',
  WHATSAPP: '+573212786958',
  WHATSAPP_URL: 'https://wa.me/573212786958',
  EMAIL: 'info@sandrarodriguezdental.com',
  ADDRESS: 'Cra. 15 #88 - 64 607, Bogotá, Colombia',
  ADDRESS_SHORT: 'Bogotá, Colombia',
  ADDRESS_URL: 'https://maps.app.goo.gl/LrBZ2KhuGBCVw6Ab9',
  INSTAGRAM_URL: 'https://www.instagram.com/sandrarodriguezdental/',
  FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61571028664278',
} as const;

/** Brand information — metadata, layout, footer, about section. */
export const BRAND = {
  NAME: 'Dra. Sandra Liliana Rodriguez',
  FULL_NAME: 'Sandra Liliana Rodriguez Ariza',
  SITE_NAME: 'Sandra Liliana Rodriguez Dental',
  SITE_URL: 'https://www.sandrarodriguezdental.com',
  LOCATION: 'Bogotá, Colombia',
  SPECIALTY: 'Rehabilitación Oral y Prostodoncia',
  DESCRIPTION:
    'Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.',
} as const;

/** Social media handles. */
export const SOCIAL = {
  INSTAGRAM: '@sandrarodriguezdental',
  FACEBOOK: 'Sandra Rodriguez Dental',
} as const;

/** Common routes — navigation, redirects, canonical URLs. */
export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  CASES: '/cases',
  TRATAMIENTOS: '/tratamientos',
  TRATAMIENTOS_IMPLANTES: '/tratamientos/implantes',
  TRATAMIENTOS_ESTETICA: '/tratamientos/estetica',
  TRATAMIENTOS_PROTESIS: '/tratamientos/protesis',
} as const;

/** SEO keywords used in metadata across pages. */
export const SEO_KEYWORDS = [
  'rehabilitación dental',
  'odontología estética',
  'Sandra Rodriguez',
  'cuidado dental',
  'blanqueamiento dental',
  'implantes dentales',
  'odontología preventiva',
  'salud bucal',
  'prostodoncia',
  'rehabilitación oral',
  'Bogotá',
  'Colombia',
] as const;

/** External links. */
export const EXTERNAL_LINKS = {
  DEVELOPER_PORTFOLIO: 'https://trodriten.com/',
} as const;

/** Google Maps embed configuration. */
export const GOOGLE_MAPS = {
  EMBED_URL:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.493536969614!2d-74.05447688461685!3d4.680626643116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a93f9999999%3A0x0!2zNMKwNDAnNTAuMyJOIDc0wrAwMyc0MC4yIlc!5e0!3m2!1sen!2sco!4v1234567890',
  WIDTH: '100%',
  HEIGHT: '450',
} as const;

/** Homepage hero copy (previously in src/translations/es/translations.json). */
export const HOME_HERO = {
  title: '¡Devolverte la Sonrisa! Nuestra Prioridad',
  subtitle:
    'Rehabilitación Oral orientada a mejorar tu salud dental. Combinamos estética y funcionalidad para darte el mejor servicio.',
  CTA: 'Pedir cita previa',
} as const;

/**
 * WhatsApp CTA messages. Edit the wording here — it pre-fills the chat the
 * visitor sees (they can still edit it before sending).
 */
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola, vi su página web y quisiera agendar una cita de valoración.';

/** Per-treatment message, e.g. "...interesado/a en Prótesis Dental Fija...". */
export function whatsAppTreatmentMessage(treatment: string): string {
  return `Hola, estoy interesado/a en ${treatment} y quisiera agendar una cita de valoración.`;
}

/** Builds a wa.me URL with an optional pre-filled message. */
export function whatsAppUrl(message?: string): string {
  return message
    ? `${CONTACT.WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : CONTACT.WHATSAPP_URL;
}
