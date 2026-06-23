"use client";

import Script from 'next/script';
import { TRACKING } from '@/lib/env';

export default function GoogleAnalytics() {
  if (!TRACKING.GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING.GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${TRACKING.GA_ID}');
        `}
      </Script>
    </>
  );
}

// TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
} 