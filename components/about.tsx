"use client";
import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  cn_aboutContent,
  cn_aboutTitle,
  en_aboutContent,
  en_aboutTitle,
} from "@/lib/about-content";
import { LanguageContext } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  const { language } = useContext(LanguageContext);
  const aboutContent = language === "en" ? en_aboutContent : cn_aboutContent;
  const aboutTitle = language === "en" ? en_aboutTitle : cn_aboutTitle;

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> {aboutTitle} </SectionHeading>
      {aboutContent}
    </motion.section>
  );
}
