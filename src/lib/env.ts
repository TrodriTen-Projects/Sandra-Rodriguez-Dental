/**
 * Analytics / tracking configuration, sourced from the environment.
 *
 * These NEXT_PUBLIC_* values are inlined into the client bundle at build time,
 * so they are NOT secrets — they live in the environment (.env.local locally,
 * Cloudflare Pages environment variables in production) to keep configuration
 * out of source code and allow per-environment overrides.
 *
 * Empty by default: a component that receives an empty id simply does not
 * render its script (safe degradation, and the hook point for consent gating
 * in Fase 3).
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '';
const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? '';
const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? '';

export const TRACKING = {
  GA_ID,
  GTM_ID,
  FB_PIXEL_ID,
  GOOGLE_ADS_CONVERSION_ID,
  GOOGLE_ADS_CONVERSION_LABEL,
  GOOGLE_ADS_CONVERSION_URL:
    GOOGLE_ADS_CONVERSION_ID && GOOGLE_ADS_CONVERSION_LABEL
      ? `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`
      : '',
} as const;
