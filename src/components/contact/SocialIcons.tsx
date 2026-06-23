import React from 'react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/icons';
import { ContactInfo, defaultContactInfo } from './ContactIcons';

interface SocialIconsProps {
  contactInfo?: ContactInfo;
  className?: string;
  iconClassName?: string;
}

const SocialIcons = ({
  contactInfo = defaultContactInfo,
  className = "",
  iconClassName = "h-7 w-7 mr-2",
}: SocialIconsProps) => {
  return (
    <div className={`flex gap-6 ${className}`}>
      {contactInfo.instagram && (
        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <InstagramIcon className={iconClassName} />
        </a>
      )}

      {contactInfo.facebook && (
        <a
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
          aria-label="Facebook"
        >
          <FacebookIcon className={iconClassName} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
