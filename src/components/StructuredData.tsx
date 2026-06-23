import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dra. Sandra Liliana Rodriguez Ariza",
    "image": "https://www.sandrarodriguezdental.com/sandra.webp",
    "url": "https://www.sandrarodriguezdental.com",
    "telephone": "+57-XXX-XXXXXXX", // Replace with actual phone number
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // Add actual street address
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "postalCode": "", // Add postal code
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.60971, // Replace with actual coordinates
      "longitude": -74.08175
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sandrarodriguezdental", // Add actual social media URLs
      "https://www.instagram.com/sandrarodriguezdental"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sandra Liliana Rodriguez Dental",
    "url": "https://www.sandrarodriguezdental.com",
    "logo": "https://www.sandrarodriguezdental.com/logo.svg",
    "description": "Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-XXX-XXXXXXX", // Replace with actual phone number
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
