'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { COOKIES } from '@/constants';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleTagManager from '@/components/GoogleTagManager';
import FacebookPixel from '@/components/FacebookPixel';
import CookieConsent from '@/components/banners/CookieConsent';

type ConsentState = 'granted' | 'denied' | 'unset';

/**
 * Consent-gated analytics. No tracking script is injected until the visitor
 * accepts. Returning visitors who already chose are honoured via the consent
 * cookie. Rendering is deferred until after mount to avoid a hydration mismatch
 * and a flash of the banner for visitors who already decided.
 */
export default function Analytics() {
  const [consent, setConsent] = useState<ConsentState>('unset');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = Cookies.get(COOKIES.CONSENT);
    setConsent(stored === 'true' ? 'granted' : stored === 'false' ? 'denied' : 'unset');
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {consent === 'granted' && (
        <>
          <GoogleTagManager />
          <GoogleAnalytics />
          <FacebookPixel />
        </>
      )}
      {consent === 'unset' && (
        <CookieConsent
          onAccept={() => setConsent('granted')}
          onReject={() => setConsent('denied')}
        />
      )}
    </>
  );
}
