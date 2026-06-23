"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { COOKIES } from "@/constants";

const GoogleMapsConsent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check consent immediately
    const checkConsent = () => {
      const consent = Cookies.get(COOKIES.CONSENT) === "true";
      setConsentGiven(consent);
    };

    checkConsent();

    // Poll for consent changes every second
    const interval = setInterval(checkConsent, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!consentGiven) {
    return (
      <div className="bg-gray-200 p-4 rounded">
        <p>Please accept cookies to view Google Maps.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default GoogleMapsConsent;
