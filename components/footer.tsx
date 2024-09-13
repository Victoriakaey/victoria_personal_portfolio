"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { cn_footerContent, en_footerContent } from "@/lib/footer-content";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const footerContent = language === "en" ? en_footerContent : cn_footerContent;
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {footerContent}
    </footer>
  );
}
