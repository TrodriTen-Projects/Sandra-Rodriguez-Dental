'use client'

// Declare the global gtag function type
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        send_to?: string;
        event_callback?: () => void;
        /* eslint-disable @typescript-eslint/no-explicit-any */
        [key: string]: any;
      }
    ) => void;
  }
}

/**
 * Google Ads conversion tracking for WhatsApp button clicks
 */
export const useGoogleAdsConversion = () => {
  const reportConversion = (url?: string, buttonType?: string) => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return false;
    
    const callback = () => {
      if (typeof url !== 'undefined') {
        window.location.href = url;
      }
    };
    
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17004693029/xEGJCJG0pMAaEKWMvKw_',
      'event_callback': callback,
      'button_type': buttonType || 'unknown' // Custom parameter to identify the button
    });
    
    return false;
  };

  return { reportConversion };
}; 