import { useState, useEffect } from "react";
import Link from "next/link";
import { navbarLinks } from "./navbarLinks";
import { usePathname } from 'next/navigation';
import Logo from "./Logo";
import { useGoogleAdsConversion } from "@/hooks/useGoogleAdsConversion";
import { useAnalytics } from "@/hooks/useAnalytics";
import MobileDropdown from "./MobileDropdown";
import { whatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/content";

type MobileMenuProps = {
  isOpen: boolean;
  onClose?: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { trackEvent } = useAnalytics();
  const { reportConversion } = useGoogleAdsConversion();
  const pathname = usePathname()
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-100 transition-opacity duration-300 ease-in-out z-40 lg:hidden ${
          isOpen ? "opacity-70" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 pt-6">
          <Logo width={150}/>
          <button
            className="text-primary hover:text-gray-700 transition-colors duration-200"
            onClick={onClose}
            aria-label="close-burger-menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="h-full pt-16 pb-4 overflow-y-auto">
          <div className="flex flex-col">
            {navbarLinks.map((link, index) => {
              // Dropdown menu
              if (link.isDropdown && link.subLinks) {
                return (
                  <MobileDropdown
                    key={link.key}
                    label={link.label}
                    href={link.href}
                    subLinks={link.subLinks}
                    isFirst={index === 0}
                    onClose={onClose}
                  />
                );
              }
              
              // WhatsApp CTA
              if (link.key === 'citaPrevia') {
                return (
                  <a
                    key={link.key}
                    href={whatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 text-center border-b border-secondaryLight block py-6 text-gray-700 hover:text-primary transition-colors duration-200 ${
                      index === 0 ? "border-t" : ""
                    }`}
                    onClick={() => {
                      onClose?.();
                      trackEvent('contact_whatsapp', {
                        source: 'whatsapp_cta',
                        component_name: 'navbar_mobile',
                      });
                      reportConversion(undefined, "navbar");
                    }}
                  >
                    {link.label}
                  </a>
                );
              }
              
              // Regular link
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`px-8 text-center border-b border-secondaryLight block py-6 text-gray-700 hover:text-primary transition-colors duration-200 ${
                    index === 0 ? "border-t" : ""
                  } ${pathname === link.href ? "active border-secondaryLight text-primary" : ""}`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
