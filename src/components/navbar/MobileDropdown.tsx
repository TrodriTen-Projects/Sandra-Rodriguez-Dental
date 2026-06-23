import { useState } from "react";
import Link from "next/link";
import { SubLink } from "./navbarLinks";
import { usePathname } from 'next/navigation';

type MobileDropdownProps = {
  label: string;
  href: string;
  subLinks: SubLink[];
  isFirst: boolean;
  onClose?: () => void;
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({ 
  label, 
  href, 
  subLinks, 
  isFirst,
  onClose 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubLink, setOpenSubLink] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isActive = pathname === href || 
    subLinks.some(link => 
      pathname === link.href || 
      link.subLinkItems?.some(item => pathname === item.href)
    );

  const handleMainItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSubLinkClick = (e: React.MouseEvent, subLinkKey: string) => {
    e.preventDefault();
    setOpenSubLink(openSubLink === subLinkKey ? null : subLinkKey);
  };

  return (
    <div className="flex flex-col">
      <div 
        className={`px-8 gap-2 flex justify-center items-center border-b border-secondaryLight py-6 cursor-pointer ${
          isFirst ? "border-t" : ""
        } ${isActive ? "text-primary border-secondaryLight" : "text-gray-700"}`}
        onClick={handleMainItemClick}
      >
        <span className="hover:text-primary transition-colors duration-200">
          {label}
        </span>
        <svg 
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} bg-white shadow-lg`}
        style={{
          transitionProperty: 'max-height, opacity',
        }}
      >
        {isOpen && (
          <div className="text-gray">
            {subLinks.map((subLink) => (
              <div key={subLink.key}>
                <div
                  className={`text-center px-12 block py-6 border-b border-white cursor-pointer ${
                    pathname === subLink.href ? 'text-primary' : 'text-gray-700'
                  } hover:text-white transition-colors duration-200`}
                  onClick={(e) => handleSubLinkClick(e, subLink.key)}
                  style={{
                    backgroundColor: pathname === subLink.href 
                      ? 'rgba(2, 131, 157, 0.1)'
                      : 'rgba(2, 131, 157, 0.25)',
                    borderRadius: subLink.subLinkItems ? '0rem' : undefined,
                    boxShadow: subLink.subLinkItems ? '0 2px 8px rgba(2,131,157,0.05)' : undefined,
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{subLink.label}</span>
                    {subLink.subLinkItems && (
                      <svg 
                        className={`h-4 w-4 transition-transform duration-300 ${openSubLink === subLink.key ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div
                  className={subLink.subLinkItems && openSubLink === subLink.key ? '' : 'hidden'}
                >
                  {subLink.subLinkItems && openSubLink === subLink.key && (
                    <div className="bg-gray-50 shadow-inner">
                      {subLink.subLinkItems.map((item) => (
                        <Link
                          key={item.key}
                          href={item.href}
                          className={`text-center px-16 block py-6 border-b border-white ${
                            pathname === item.href ? 'text-primary' : 'text-gray-700'
                          } hover:text-white transition-colors duration-200`}
                          style={{
                            backgroundColor: pathname === item.href 
                              ? 'rgba(2, 131, 157, 0.1)'
                              : 'rgba(2, 131, 157, 0.15)'
                          }}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDropdown; 