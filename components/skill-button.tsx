"use client";

import { LanguageContext } from "@/context/language-context";
import React, { useContext } from "react";

interface skillButtonProps {
  field: string;
  focusedField: string;
  handleClick: () => void;
  en_title: string;
  cn_title: string;
}

export default function SkillButton(props: skillButtonProps) {
  const { language } = useContext(LanguageContext);

  return (
    <button
      className={`rounded-full text-sm bg-white border border-black/[0.1] dark:border-none text-gray-950 py-0.5 px-3 hover:bg-black/[0.6] hover:text-white transition  dark:bg-white/10 dark:text-white/80 dark:hover:bg-gray-600 ${
        props.focusedField === props.field
          ? "bg-black/[0.6] text-white dark:bg-gray-600"
          : ""
      }`}
      onClick={props.handleClick}
    >
      {language === "en" ? props.en_title : props.cn_title}
    </button>
  );
}
