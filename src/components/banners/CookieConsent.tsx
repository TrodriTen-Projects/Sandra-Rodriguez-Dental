"use client";
import Cookies from "js-cookie";
import { MouseEvent, useEffect, useState } from "react";
import SectionTitle from '../SectionTitle';

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>, accept: boolean) => {
    e.preventDefault();

    if (accept) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
      setGoogleMapsCookies();
    } else {
      Cookies.remove(USER_CONSENT_COOKIE_KEY);
      setCookieConsentIsTrue(false);
    }
  };

  const setGoogleMapsCookies = () => {
    const googleCookies = [
      "COMPASS", "AID", "LSOLH", "__Secure-OSID", "__Host-3PLSID",
      "__Secure-3PAPISID", "__Secure-3PSID", "NID", "__Secure-3PSIDTS", "__Secure-3PSIDCC"
    ];
    
    googleCookies.forEach(cookieName => {
      Cookies.set(cookieName, "placeholder_value", { 
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
        domain: ".google.com",
        secure: true,
        sameSite: "none"
      });
    });
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 p-4 bg-white border-t border-primary w-full z-50">
      <div className="flex justify-between items-start">
        <div>
          <SectionTitle header="h2" className="mb-2 text-xl font-heading">
            Cookie Policy
          </SectionTitle>
          <p className="mb-4 leading-relaxed text-black">
            Our site uses cookies, which helps us to improve our site and enables us
            to deliver the best possible service and customer experience. By
            clicking Accept, you are agreeing to our cookie policy.{" "}
            <a className="font-semibold text-blue-700 hover:underline" href="#">
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={(e) => onClick(e, false)}
          aria-label="Close cookie consent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex gap-8">
        <button
          className="rounded inline-flex items-center px-6 py-3 leading-none text-white bg-primaryDark hover:bg-primary"
          onClick={(e) => onClick(e, true)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
