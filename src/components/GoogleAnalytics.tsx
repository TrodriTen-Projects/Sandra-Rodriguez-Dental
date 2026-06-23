"use client";

import Script from 'next/script';
import { TRACKING } from '@/constants';

export default function GoogleAnalytics() {
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