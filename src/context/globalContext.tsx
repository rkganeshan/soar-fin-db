import React, { createContext, useContext, useState, ReactNode } from "react";
import { GlobalContextType } from "../types/GlobalContextType";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFlyoutOpen, setFlyoutOpen] = useState(false);

  const toggleFlyout = () => {
    setFlyoutOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{ isFlyoutOpen, setFlyoutOpen, toggleFlyout }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
