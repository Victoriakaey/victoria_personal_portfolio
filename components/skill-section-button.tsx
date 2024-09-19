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
import React, { useState } from "react";
import SkillButton from "./skill-button";

interface skillSectionButtonProps {
  setSkillsData: (skillsData: string[]) => void;
}

export default function SkillSectionButton(props: skillSectionButtonProps) {
  const [focusedField, setFocusedField] = useState<string>("");

  const handleProgrammingLanguagesClick = () => {
    setFocusedField("programmingLanguages");
    props.setSkillsData(programmingLanguages);
  };

  const handleFrameworksClick = () => {
    setFocusedField("frameworksAndLibraries");
    props.setSkillsData(frameworksAndLibraries);
  };

  const handleStylingClick = () => {
    setFocusedField("styling");
    props.setSkillsData(styling);
  };

  const handleDatabaseClick = () => {
    setFocusedField("database");
    props.setSkillsData(database);
  };

  const handleToolsClick = () => {
    setFocusedField("toolsAndPlatforms");
    props.setSkillsData(toolsAndPlatforms);
  };

  return (
    <div className="mb-6 -mt-4 flex gap-2 justify-center items-center text-gray-50">
      <SkillButton
        field="programmingLanguages"
        focusedField={focusedField}
        handleClick={handleProgrammingLanguagesClick}
        en_title={en_programmingLanguages}
        cn_title={cn_programmingLanguages}
      />
      <SkillButton
        field="frameworksAndLibraries"
        focusedField={focusedField}
        handleClick={handleFrameworksClick}
        en_title={en_frameworksAndLibraries}
        cn_title={cn_frameworksAndLibraries}
      />

      <SkillButton
        field="styling"
        focusedField={focusedField}
        handleClick={handleStylingClick}
        en_title={en_styling}
        cn_title={cn_styling}
      />

      <SkillButton
        field="database"
        focusedField={focusedField}
        handleClick={handleDatabaseClick}
        en_title={en_database}
        cn_title={cn_database}
      />

      <SkillButton
        field="toolsAndPlatforms"
        focusedField={focusedField}
        handleClick={handleToolsClick}
        en_title={en_ToolsAndPlatforms}
        cn_title={cn_ToolsAndPlatforms}
      />
    </div>
  );
}
