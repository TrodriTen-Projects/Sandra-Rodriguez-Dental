'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/content';

/**
 * Renders the authorship notice ONLY as part of the referral flow (the
 * `ref_handled` flag is set by ReferralRedirect before sending the visitor
 * here). A direct/normal visit has no flag → bounced to the homepage, and the
 * message is never emitted into the page's static HTML (it lives in this client
 * chunk instead).
 *
 * Note: this is a SOFT gate on a static site (the flag can be set by hand) —
 * enough to keep normal/direct access from seeing it, not hard access control.
 */
export default function AutoriaGuard() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('ref_handled') === '1') {
      setAllowed(true);
    } else {
      window.location.replace('/');
    }
  }, []);

  if (!allowed) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 pt-32 pb-20">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">
        <h1 className="mb-4 text-3xl font-bold text-primaryDark md:text-4xl">
          Sitio reimplementado
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          Esta versión del sitio web fue <strong>reconstruida por completo</strong> y
          actualmente es <strong>desarrollada, mantenida y administrada</strong> por
          TrodriTen (Tomas Alberto Rodriguez Peña), con foco en rendimiento, seguridad
          y mantenibilidad.
        </p>
        <p className="mb-8 text-gray-600">
          Si llegaste buscando a quién contactar para este u otro proyecto, aquí está mi
          portafolio.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={EXTERNAL_LINKS.DEVELOPER_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primaryDark"
          >
            Ver mi portafolio
          </a>
          <Link
            href="/"
            className="rounded-full border border-primary px-8 py-3.5 font-semibold text-primary transition-colors hover:bg-secondaryLight"
          >
            Ir al sitio
          </Link>
        </div>
      </div>
    </main>
  );
}
