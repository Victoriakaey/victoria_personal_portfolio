"use client";
import React, { useState, createContext, ReactNode } from "react";

type ActionContextType = {
  action: boolean;
  toggleAction: () => void;
};

interface ActionProviderProps {
  children: ReactNode;
}

export const ActionContext = createContext<ActionContextType>({
  action: false,
  toggleAction: () => {},
});

export const ActionProvider: React.FC<ActionProviderProps> = ({ children }) => {
  const [action, setAction] = useState<boolean>(false);

  const toggleAction = () => {
    setAction((prev) => !prev);
  };

  return (
    <ActionContext.Provider value={{ action, toggleAction }}>
      {children}
    </ActionContext.Provider>
  );
};
