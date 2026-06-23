/**
 * UI / technical configuration (not content, not secrets).
 *
 * Content (contact, brand, SEO copy) lives in `src/content`.
 * Tracking IDs live in `src/lib/env` (sourced from the environment).
 */

/**
 * Color Palette
 * Mirrors the Tailwind custom colors defined in tailwind.config.ts.
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
 * Cookie Names
 */
export const COOKIES = {
  CONSENT: 'cookie_consent_is_true',
  GOOGLE_MAPS_CONSENT: 'google_maps_consent',
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
