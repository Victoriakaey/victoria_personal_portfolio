"use client";

import { LanguageContext } from "@/context/language-context";
import React, { useContext, useState } from "react";

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
      className={`rounded-full text-sm py-0.5 px-3 transition pointer-cursor ${
        props.focusedField === props.field
          ? "bg-black/70 text-white dark:bg-white/30"
          : "bg-white text-gray-950 dark:bg-white/10 dark:text-white/80"
      }
        hover:bg-black/70 hover:text-white border border-black/[0.1] dark:border-none dark:hover:bg-white/30`}
      onClick={props.handleClick}
    >
      <p className="hidden lg:block">
        {language === "en" ? props.en_title : props.cn_title}
      </p>
    </button>
  );
}
