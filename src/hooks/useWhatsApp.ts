import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';
import { useGoogleAdsConversion } from './useGoogleAdsConversion';
import { CONTACT } from '@/constants';

/**
 * useWhatsApp Hook
 *
 * Provides a unified interface for WhatsApp interactions across the site.
 * Handles URL generation, analytics tracking, and conversion reporting.
 *
 * @returns Object with WhatsApp utilities
 *
 * @example
 * function ContactButton() {
 *   const { openWhatsApp, whatsappUrl } = useWhatsApp();
 *
 *   return (
 *     <a
 *       href={whatsappUrl}
 *       onClick={(e) => {
 *         e.preventDefault();
 *         openWhatsApp('contact_button', 'Hola, quisiera más información');
 *       }}
 *     >
 *       Contactar
 *     </a>
 *   );
 * }
 */
export const useWhatsApp = () => {
  const { trackEvent } = useAnalytics();
  const { reportConversion } = useGoogleAdsConversion();

  /**
   * Opens WhatsApp with optional pre-filled message
   * Tracks analytics and conversion automatically
   */
  const openWhatsApp = useCallback((componentName: string, message?: string) => {
    // Track analytics event
    trackEvent('contact_whatsapp', {
      source: 'whatsapp_cta',
      component_name: componentName,
      has_message: !!message,
    });

    // Report Google Ads conversion
    reportConversion(
      CONTACT.WHATSAPP_URL,
      `cta_button_${componentName}`
    );

    // Open WhatsApp in new tab
    const url = message
      ? `${CONTACT.WHATSAPP_URL}?text=${encodeURIComponent(message)}`
      : CONTACT.WHATSAPP_URL;

    window.open(url, '_blank', 'noopener,noreferrer');
  }, [trackEvent, reportConversion]);

  /**
   * Generates WhatsApp URL with optional message
   */
  const getWhatsAppUrl = useCallback((message?: string) => {
    return message
      ? `${CONTACT.WHATSAPP_URL}?text=${encodeURIComponent(message)}`
      : CONTACT.WHATSAPP_URL;
  }, []);

  return {
    openWhatsApp,
    getWhatsAppUrl,
    whatsappUrl: CONTACT.WHATSAPP_URL,
    whatsappNumber: CONTACT.WHATSAPP,
    whatsappFormatted: CONTACT.PHONE_FORMATTED,
  };
};
