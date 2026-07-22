"use client";

import Script from 'next/script';
import { TRACKING } from '@/lib/env';

/**
 * Google Ads destination.
 *
 * The gtag.js *library* is loaded once by <GoogleAnalytics /> (with the GA4 id).
 * That single library serves every gtag destination, but each destination still
 * has to be registered with its own `gtag('config', ...)` call — otherwise a
 * `gtag('event', 'conversion', { send_to: 'AW-xxxx/label' })` fires against an
 * account the tag never activated and Google Ads silently drops it.
 *
 * This component adds the missing `gtag('config', 'AW-...')` so WhatsApp click
 * conversions are actually attributed. It also re-declares the gtag bootstrap so
 * it is safe regardless of the order in which the analytics <Script> tags run:
 * the command is queued on dataLayer and processed once the library is ready.
 */
export default function GoogleAds() {
  if (!TRACKING.GOOGLE_ADS_CONVERSION_ID) return null;

  return (
    <Script id="google-ads" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${TRACKING.GOOGLE_ADS_CONVERSION_ID}');
      `}
    </Script>
  );
}
