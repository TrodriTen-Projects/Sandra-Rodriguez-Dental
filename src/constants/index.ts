/**
 * Constants for Sandra Rodriguez Dental website
 * Single source of truth for all hardcoded values
 */

/**
 * Contact Information
 * Used across: navigation, footer, contact pages, CTA buttons
 */
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

/**
 * Analytics & Tracking IDs
 * Used in: GoogleAnalytics, GoogleTagManager, FacebookPixel components
 * TODO: Move to environment variables for better security
 */
export const TRACKING = {
  GA_ID: 'G-2ZQDWY58KZ',
  GTM_ID: 'GTM-PWZJRJM7',
  FB_PIXEL_ID: '1056724835789657',
  GOOGLE_ADS_CONVERSION_ID: 'AW-17004693029',
  GOOGLE_ADS_CONVERSION_LABEL: 'xEGJCJG0pMAaEKWMvKw_',
  GOOGLE_ADS_CONVERSION_URL: 'AW-17004693029/xEGJCJG0pMAaEKWMvKw_',
} as const;

/**
 * Brand Information
 * Used in: metadata, layout, footer, about section
 */
export const BRAND = {
  NAME: 'Dra. Sandra Liliana Rodriguez',
  FULL_NAME: 'Sandra Liliana Rodriguez Ariza',
  SITE_NAME: 'Sandra Liliana Rodriguez Dental',
  SITE_URL: 'https://www.sandrarodriguezdental.com',
  LOCATION: 'Bogotá, Colombia',
  SPECIALTY: 'Rehabilitación Oral y Prostodoncia',
  DESCRIPTION: 'Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.',
} as const;

/**
 * Common Routes
 * Used for: navigation, redirects, canonical URLs
 */
export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  CASES: '/cases',
  TRATAMIENTOS: '/tratamientos',
  TRATAMIENTOS_IMPLANTES: '/tratamientos/implantes',
  TRATAMIENTOS_ESTETICA: '/tratamientos/estetica',
  TRATAMIENTOS_PROTESIS: '/tratamientos/protesis',
} as const;

/**
 * Color Palette
 * Tailwind CSS custom colors defined in tailwind.config.ts
 */
export const COLORS = {
  PRIMARY: '#005268',
  PRIMARY_DARK: '#003d4d',
  SECONDARY: '#ffffff',
  SECONDARY_LIGHT: '#f5f5f5',
  GRAY: '#808080',
  WHATSAPP_GREEN: '#25D366',
} as const;

/**
 * Breakpoints (must match tailwind.config.ts)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

/**
 * Animation Durations (milliseconds)
 */
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  SCROLL_DEBOUNCE: 100,
  RESIZE_DEBOUNCE: 150,
} as const;

/**
 * SEO Keywords
 * Used in metadata across pages
 */
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

/**
 * Social Media Handles
 */
export const SOCIAL = {
  INSTAGRAM: '@sandrarodriguezdental',
  FACEBOOK: 'Sandra Rodriguez Dental',
} as const;

/**
 * Image Paths (commonly used)
 */
export const IMAGES = {
  LOGO: '/logo.svg',
  LOGO_WHITE: '/logo-white.svg',
  HOME_HERO: '/home.webp',
  OG_IMAGE: '/og-image.png',
  FAVICON: '/icon.ico',
  APPLE_ICON: '/apple-icon.ico',
} as const;

/**
 * External Links
 */
export const EXTERNAL_LINKS = {
  DEVELOPER_PORTFOLIO: 'https://trodriten.com/',
} as const;

/**
 * Cookie Names
 */
export const COOKIES = {
  CONSENT: 'cookie_consent_is_true',
  GOOGLE_MAPS_CONSENT: 'google_maps_consent',
} as const;

/**
 * Google Maps Embed Configuration
 */
export const GOOGLE_MAPS = {
  EMBED_URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.493536969614!2d-74.05447688461685!3d4.680626643116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a93f9999999%3A0x0!2zNMKwNDAnNTAuMyJOIDc0wrAwMyc0MC4yIlc!5e0!3m2!1sen!2sco!4v1234567890',
  WIDTH: '100%',
  HEIGHT: '450',
} as const;

/**
 * Default Values
 */
export const DEFAULTS = {
  LOGO_WIDTH: 200,
  IMAGE_QUALITY: 75,
  IMAGE_QUALITY_LOW: 50,
  IMAGE_QUALITY_HIGH: 90,
} as const;
