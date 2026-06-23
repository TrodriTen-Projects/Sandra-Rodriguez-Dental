import React from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useGoogleAdsConversion } from "@/hooks/useGoogleAdsConversion";

interface WhatsAppButtonProps {
  text: string;
  phoneNumber?: string;
  isPrimary?: boolean;
  componentName?: string;
}

const WhatsAppButtonCTA: React.FC<WhatsAppButtonProps> = ({
  text,
  phoneNumber = "+573212786958",
  isPrimary = false,
  componentName = "unknown",
}) => {
  const { trackEvent } = useAnalytics();
  const { reportConversion } = useGoogleAdsConversion();
  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();

    trackEvent('contact_whatsapp', {
      source: 'whatsapp_cta',
      component_name: componentName,
    });

    // Report conversion without URL to avoid double navigation
    reportConversion(undefined, `cta_button_${componentName}`);

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${phoneNumber}`, '_blank', 'noopener,noreferrer');
  };

  const buttonClasses = `
    uppercase rounded-full w-full md:w-[400px] py-5 md:px-12 md:py-4 
    text-lg md:text-2xl font-semibold transition
    tracking-widest
    ${isPrimary 
      ? "bg-primary text-white hover:bg-primaryDark" 
      : "bg-white text-black hover:bg-gray-200"}
  `;

  return (
    <button className={buttonClasses} onClick={handleWhatsAppClick}>

        {text}
    </button>
  );
};

export default WhatsAppButtonCTA;
