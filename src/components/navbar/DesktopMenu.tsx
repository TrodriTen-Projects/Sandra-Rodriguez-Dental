import Link from "next/link";
import { navbarLinks } from "./navbarLinks";
import { useGoogleAdsConversion } from "@/hooks/useGoogleAdsConversion";
import { useAnalytics } from "@/hooks/useAnalytics";
import DesktopDropdown from "./DesktopDropdown";
import { whatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/content";

const DesktopMenu = () => {
  const { trackEvent } = useAnalytics();
  const { reportConversion } = useGoogleAdsConversion();
  
  return (
  <div className="hidden lg:flex items-center space-x-8 text-sm uppercase">
    {navbarLinks.map((link, index) => {
      // Last item is the CTA button
      if (index === navbarLinks.length - 1) {
        return (
          <a
            key={link.key}
            href={whatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp-button"
            className="
            tracking-wider bg-primaryDark font-bold text-white px-8 py-3.5 rounded-full hover:bg-primary uppercase"
            onClick={() => {
              trackEvent('contact_whatsapp', {
                source: 'whatsapp_cta',
                component_name: 'navbar',
              });
              reportConversion(undefined, "navbar");
            }}
          >
            {link.label}
          </a>
        );
      }
      
      // Dropdown menu
      if (link.isDropdown && link.subLinks) {
        return (
          <DesktopDropdown 
            key={link.key}
            label={link.label}
            href={link.href}
            subLinks={link.subLinks}
          />
        );
      }
      
      // Regular link
      return (
        <Link
          key={link.key}
          href={link.href}
          className="tracking-wider text-gray-700 hover:text-primary"
        >
          {link.label}
        </Link>
      );
    })}
  </div>
  );
};

export default DesktopMenu;
