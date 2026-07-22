'use client';

import GoogleTagManager from '@/components/GoogleTagManager';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleAds from '@/components/GoogleAds';
import FacebookPixel from '@/components/FacebookPixel';

/**
 * Site analytics, loaded on every visit.
 *
 * The cookie-consent gate was removed by request: Google (GTM + GA4 + Ads) and
 * Meta now load by default on first paint so that WhatsApp conversions are
 * attributed for every visitor, not only those who accepted a banner.
 *
 * Order matters: <GoogleAnalytics /> loads the shared gtag.js library that
 * <GoogleAds /> reuses to register the Ads destination.
 */
export default function Analytics() {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
      <GoogleAds />
      <FacebookPixel />
    </>
  );
}
