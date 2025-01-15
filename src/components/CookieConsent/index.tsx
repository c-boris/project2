"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const hasConsented = document.cookie
      .split("; ")
      .some((item) => item.trim().startsWith("cookieConsent=true"));

    setAccepted(hasConsented);
  }, []);

  const giveCookieConsent = () => {
    document.cookie =
      "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30;
    setAccepted(true);
  };

  if (accepted === null) return null;
  if (accepted) return null;

  return (
    <div className="fixed bottom-5 z-[998] mx-2 rounded-full border border-white border-opacity-40 bg-indigo-200 bg-opacity-75 px-5 py-3 text-center text-xs shadow-2xl dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:left-1/2 sm:-translate-x-1/2">
      En utilisant notre site web, vous acceptez notre utilisation des cookies.
      <button
        className="mx-2 mt-2 items-center rounded-full bg-indigo-300 px-2 py-2 hover:bg-gray-50 dark:text-gray-950 sm:mt-0"
        onClick={giveCookieConsent}
      >
        Accepter
      </button>
    </div>
  );
};

export default CookieConsent;
