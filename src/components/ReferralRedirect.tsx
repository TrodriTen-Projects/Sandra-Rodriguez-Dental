'use client';

import { useEffect } from 'react';

// If a visitor arrives via a link from zshuck.com, send them once to the
// authorship page. Best-effort: relies on document.referrer, which the *source*
// site controls — if it sends no referrer, we simply do nothing.
const TARGET = '/autoria/';

function cameFromZshuck(referrer: string): boolean {
  if (!referrer) return false;
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    return host === 'zshuck.com' || host.endsWith('.zshuck.com');
  } catch {
    return false;
  }
}

export default function ReferralRedirect() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/autoria')) return;
    if (sessionStorage.getItem('ref_handled') === '1') return;
    if (!cameFromZshuck(document.referrer)) return;

    sessionStorage.setItem('ref_handled', '1');
    window.location.replace(TARGET);
  }, []);

  return null;
}
