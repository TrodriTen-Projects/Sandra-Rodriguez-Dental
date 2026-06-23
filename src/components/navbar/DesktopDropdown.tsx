import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SubLink } from "./navbarLinks";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

type DesktopDropdownProps = {
  label: string;
  href: string;
  subLinks: SubLink[];
};

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ label, href, subLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubLink, setActiveSubLink] = useState<SubLink | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubLink(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const isActive = pathname === href || subLinks.some(link =>
    pathname === link.href ||
    link.subLinkItems?.some(item => pathname === item.href)
  );

  // Handle click on main dropdown link
  const handleMainLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (subLinks && subLinks.length > 0) {
      const firstEnabledLink = subLinks.find(link => !link.disabled);
      if (firstEnabledLink) {
        router.push(firstEnabledLink.href);
      }
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow mouse movement
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubLink(null);
    }, 150);
  };

  const handleSubLinkMouseEnter = (subLink: SubLink) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveSubLink(subLink);
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        onClick={handleMainLinkClick}
        className={`tracking-wider hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`}
      >
        <span className="flex items-center">
          {label}
          <svg
            className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </a>
      {isOpen && (
        <div className="absolute right-0 mt-0 w-48 z-50 bg-white rounded-md shadow-lg py-1">
          {subLinks.map((subLink) => (
            <div
              key={subLink.key}
              className={`relative ${activeSubLink?.key === subLink.key ? 'bg-gray-50' : ''}`}
              onMouseEnter={() => handleSubLinkMouseEnter(subLink)}
            >
              <Link
                href={subLink.href}
                className={`capitalize block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  pathname === subLink.href ? 'text-primary' : ''
                } hover:text-primary transition-colors duration-200 flex items-center justify-between`}
                onClick={(e) => subLink.disabled && e.preventDefault()}
              >
                {subLink.label}
                {subLink.subLinkItems && (
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
              {/* Submenu */}
              {subLink.subLinkItems && activeSubLink?.key === subLink.key && (
                <div className="capitalize absolute left-full top-0 -ml-px w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  {subLink.subLinkItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        pathname === item.href ? 'text-primary' : ''
                      } hover:text-primary transition-colors duration-200`}
                      onClick={(e) => item.disabled && e.preventDefault()}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopDropdown; 