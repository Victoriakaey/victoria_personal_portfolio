"use client";
import { ActionContext } from "@/context/action-context";
import React, { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";


export default function ActionButton() {
  const { action, toggleAction } = useContext(ActionContext);
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 translation-all dark:bg-gray-950"
      onClick={toggleAction}
    >
      {action ? <BiMinus className="text-xl" /> : <BsPlusLg className="text-xl" />}
    </button>
  );
}
