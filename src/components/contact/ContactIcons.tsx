import React from 'react';
import { PhoneIcon, LocationIcon, InstagramIcon, FacebookIcon } from '@/components/ui/icons';
import { CONTACT } from '@/content';

// Define the type for our contact information
export type ContactInfo = {
  whatsapp: string;
  address: string;
  addressUrl: string;
  instagram?: string;
  facebook?: string;
};

// Default contact information from constants
export const defaultContactInfo: ContactInfo = {
  whatsapp: CONTACT.PHONE_FORMATTED,
  address: CONTACT.ADDRESS,
  addressUrl: CONTACT.ADDRESS_URL,
  instagram: CONTACT.INSTAGRAM_URL,
  facebook: CONTACT.FACEBOOK_URL,
};

interface ContactIconsProps {
  contactInfo?: ContactInfo;
  className?: string;
  iconClassName?: string;
  iconSocialClassName?: string;
  vertical?: boolean;
  showSocialIcons?: boolean;
}

const ContactIcons = ({
  contactInfo = defaultContactInfo,
  className = "",
  iconClassName = "h-5 w-5 mr-2",
  iconSocialClassName = "h-7 w-7 mr-2",
  vertical = false,
  showSocialIcons = true,
}: ContactIconsProps) => {
  return (
    <div className={`mt-6 space-y-2 ${vertical ? 'flex flex-col' : ''} ${className}`}>

      {contactInfo.whatsapp && (
        <a
          href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          <PhoneIcon className={iconClassName} />
          {contactInfo.whatsapp}
        </a>
      )}

      {contactInfo.address && (
        <a
          href={contactInfo.addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          <LocationIcon className={iconClassName} />
          {contactInfo.address}
        </a>
      )}

      {showSocialIcons && (
        <div className="flex w-full gap-8">
          {contactInfo.instagram && (
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <InstagramIcon className={iconSocialClassName} />
            </a>
          )}

          {contactInfo.facebook && (
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <FacebookIcon className={iconSocialClassName} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactIcons;
