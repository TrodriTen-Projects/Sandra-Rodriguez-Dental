'use client';

import { MouseEvent } from 'react';
import Cookies from 'js-cookie';
import { COOKIES } from '@/constants';
import SectionTitle from '../SectionTitle';

const CONSENT_EXPIRES_DAYS = 365;

interface CookieConsentProps {
  /** Called after the visitor accepts analytics cookies. */
  onAccept: () => void;
  /** Called after the visitor rejects analytics cookies. */
  onReject: () => void;
}

/**
 * Cookie consent banner. Persists the choice for a year and notifies the parent
 * so it can (de)activate analytics. No third-party cookies are written here —
 * the parent only loads the tracking scripts once consent is granted.
 */
const CookieConsent = ({ onAccept, onReject }: CookieConsentProps) => {
  const choose = (e: MouseEvent<HTMLButtonElement>, accept: boolean) => {
    e.preventDefault();
    Cookies.set(COOKIES.CONSENT, accept ? 'true' : 'false', {
      expires: CONSENT_EXPIRES_DAYS,
      sameSite: 'Lax',
      secure: true,
    });
    if (accept) onAccept();
    else onReject();
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-primary bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <SectionTitle header="h2" className="mb-1 text-lg font-bold">
            Uso de cookies
          </SectionTitle>
          <p className="text-sm leading-relaxed text-black">
            Utilizamos cookies de análisis (Google Analytics y Meta) para entender
            cómo se usa el sitio y mejorar tu experiencia. Solo se activan si las
            aceptas; puedes rechazarlas y seguir navegando con normalidad.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={(e) => choose(e, false)}
            className="rounded border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondaryLight"
          >
            Rechazar
          </button>
          <button
            onClick={(e) => choose(e, true)}
            className="rounded bg-primaryDark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
