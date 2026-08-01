"use client";

import { LanguageContext } from "@/context/language-context";
import type { Bilingual } from "@/lib/content/types";
import React, { useContext } from "react";

interface SkillButtonProps {
  label: Bilingual<string>;
  isActive: boolean;
  handleClick: () => void;
}

export default function SkillButton({
  label,
  isActive,
  handleClick,
}: SkillButtonProps) {
  const { language } = useContext(LanguageContext);

  return (
    <button
      className={`rounded-full text-sm py-0.5 px-3 transition pointer-cursor ${
        isActive
          ? "bg-black/70 text-white dark:bg-white/30"
          : "bg-white text-gray-950 dark:bg-white/10 dark:text-white/80"
      }
        hover:bg-black/70 hover:text-white border border-black/[0.1] dark:border-none dark:hover:bg-white/30`}
      onClick={handleClick}
    >
      <p className="hidden lg:block">{label[language]}</p>
    </button>
  );
}
