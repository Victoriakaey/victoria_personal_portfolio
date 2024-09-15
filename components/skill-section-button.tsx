"use client";
import { LanguageContext } from "@/context/language-context";
import {
  cn_database,
  cn_frameworksAndLibraries,
  cn_programmingLanguages,
  cn_styling,
  cn_ToolsAndPlatforms,
  database,
  en_database,
  en_frameworksAndLibraries,
  en_programmingLanguages,
  en_styling,
  en_ToolsAndPlatforms,
  frameworksAndLibraries,
  programmingLanguages,
  styling,
  toolsAndPlatforms,
} from "@/lib/data";
import React, { useContext } from "react";

interface skillSectionButtonProps {
  // title: string;
  setSkillsData: (skillsData: string[]) => void;
}

export default function SkillSectionButton(props: skillSectionButtonProps) {
  const { language } = useContext(LanguageContext);
  const handleProgrammingLanguagesClick = () => {
    props.setSkillsData(programmingLanguages);
  };

  const handleFrameworksClick = () => {
    props.setSkillsData(frameworksAndLibraries);
  };

  const handleStylingClick = () => {
    props.setSkillsData(styling);
  };

  const handleDatabaseClick = () => {
    props.setSkillsData(database);
  };

  const handleToolsClick = () => {
    props.setSkillsData(toolsAndPlatforms);
  };

  return (
    <div className="mb-6 -mt-4 flex gap-2 justify-center items-center text-gray-50">
      <button
        className="rounded-full text-sm bg-black/[0.7] py-0.5 px-3 hover:bg-black/[0.8] transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={handleProgrammingLanguagesClick}
      >
        {language === "en" ? en_programmingLanguages : cn_programmingLanguages}
      </button>
      <button
        className="rounded-full text-sm bg-black/[0.7] py-0.5 px-3 hover:bg-black/[0.8] transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={handleFrameworksClick}
      >
        {language === "en"
          ? en_frameworksAndLibraries
          : cn_frameworksAndLibraries}
      </button>
      <button
        className="rounded-full text-sm bg-black/[0.7] py-0.5 px-3 hover:bg-black/[0.8] transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={handleStylingClick}
      >
        {language === "en" ? en_styling : cn_styling}
      </button>
      <button
        className="rounded-full text-sm bg-black/[0.7] py-0.5 px-3 hover:bg-black/[0.8] transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={handleDatabaseClick}
      >
        {language === "en" ? en_database : cn_database}
      </button>
      <button
        className="rounded-full text-sm bg-black/[0.7] py-0.5 px-3 hover:bg-black/[0.8] transition shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={handleToolsClick}
      >
        {language === "en" ? en_ToolsAndPlatforms : cn_ToolsAndPlatforms}
      </button>
    </div>
  );
}
