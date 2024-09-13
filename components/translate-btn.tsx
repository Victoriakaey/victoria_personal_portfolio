"use client";
import { ActionContext } from "@/context/action-context";
import { LanguageContext } from "@/context/language-context";
import React, { useContext } from "react";
import { MdGTranslate } from "react-icons/md";

export default function TranslateButton() {
  const { action } = useContext(ActionContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div
      className={`fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 translation-all dark:bg-gray-950 hover:cursor-pointer ${
        action ? "opacity-100" : "opacity-0"
      }`}
      onClick={toggleLanguage}
    >
      <MdGTranslate className="text-xl" />
    </div>
  );
}
