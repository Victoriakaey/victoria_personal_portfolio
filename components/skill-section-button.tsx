"use client";
import { LanguageContext } from "@/context/language-context";
import {
  AI,
  backendDevelopment,
  cn_AI,
  cn_backendDevelopment,
  cn_database,
  cn_frontendDevelopment,
  cn_programmingLanguages,
  database,
  en_AI,
  en_backendDevelopment,
  en_database,
  en_frontendDevelopment,
  en_programmingLanguages,
  frontendDevelopment,
  programmingLanguages,
} from "@/lib/data";
import React, { useState } from "react";
import SkillButton from "./skill-button";

interface skillSectionButtonProps {
  setSkillsData: (skillsData: string[]) => void;
}

export default function SkillSectionButton(props: skillSectionButtonProps) {
  const [focusedField, setFocusedField] = useState<string>(
    "programmingLanguages"
  );

  const handleProgrammingLanguagesClick = () => {
    setFocusedField("programmingLanguages");
    props.setSkillsData(programmingLanguages);
  };

  const handleFrontendDevelopmentClick = () => {
    setFocusedField("frontendDevelopment");
    props.setSkillsData(frontendDevelopment);
  };

  const handleBackendDevelopmentClick = () => {
    setFocusedField("backendDevelopment");
    props.setSkillsData(backendDevelopment);
  };

  const handleDatabaseClick = () => {
    setFocusedField("database");
    props.setSkillsData(database);
  };

  const handleAIClick = () => {
    setFocusedField("AI");
    props.setSkillsData(AI);
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
        field="frontendDevelopment"
        focusedField={focusedField}
        handleClick={handleFrontendDevelopmentClick}
        en_title={en_frontendDevelopment}
        cn_title={cn_frontendDevelopment}
      />

      <SkillButton
        field="backendDevelopment"
        focusedField={focusedField}
        handleClick={handleBackendDevelopmentClick}
        en_title={en_backendDevelopment}
        cn_title={cn_backendDevelopment}
      />

      <SkillButton
        field="database"
        focusedField={focusedField}
        handleClick={handleDatabaseClick}
        en_title={en_database}
        cn_title={cn_database}
      />

      <SkillButton
        field="AI"
        focusedField={focusedField}
        handleClick={handleAIClick}
        en_title={en_AI}
        cn_title={cn_AI}
      />
    </div>
  );
}
