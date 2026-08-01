"use client";
import React, { useState, useEffect, createContext, ReactNode } from "react";
import type { Language } from "@/lib/content/types";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "cn" : "en";
      window.localStorage.setItem("language", next);
      return next;
    });
  };

  // Read after mount so the server-rendered markup (always "en") matches the
  // first client render; a stored preference is applied on the next paint.
  useEffect(() => {
    const stored = window.localStorage.getItem("language") as Language | null;
    if (stored === "en" || stored === "cn") {
      setLanguage(stored);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
