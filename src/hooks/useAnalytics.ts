/* eslint-disable @typescript-eslint/no-explicit-any */
export const useAnalytics = () => {
    const trackEvent = (
      eventName: string, 
      parameters?: { [key: string]: any }
    ) => {
      // Default parameters
      const defaultParams = {
        variant: 'A',
        pathname: typeof window !== 'undefined' ? window.location.pathname : '',
      };

      // Merge default parameters with provided parameters
      const mergedParams = { ...defaultParams, ...parameters };

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, mergedParams);
      }
    };
  
    return { trackEvent };
  }; 