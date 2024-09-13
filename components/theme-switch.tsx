"use client";

import { ActionContext } from "@/context/action-context";
import { useTheme } from "@/context/theme-context";
import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { action } = useContext(ActionContext);
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`fixed bottom-36 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 translation-all dark:bg-gray-950 ${
        action ? "opacity-100" : "opacity-0"
      }`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
