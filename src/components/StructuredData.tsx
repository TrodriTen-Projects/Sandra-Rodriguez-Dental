import Script from 'next/script';
import { CONTACT, BRAND } from '@/content';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": BRAND.FULL_NAME,
    "image": `${BRAND.SITE_URL}/sandra.webp`,
    "url": BRAND.SITE_URL,
    "telephone": CONTACT.PHONE,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cra. 15 #88 - 64 607",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.674045,
      "longitude": -74.055275
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [CONTACT.FACEBOOK_URL, CONTACT.INSTAGRAM_URL]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND.SITE_NAME,
    "url": BRAND.SITE_URL,
    "logo": `${BRAND.SITE_URL}/logo.svg`,
    "description": BRAND.DESCRIPTION,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.PHONE,
      "contactType": "customer service",
      "availableLanguage": ["Spanish"]
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
