import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useMediaQuery } from "../hooks";
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
  const screenWidth = useMediaQuery();

  const toggleFlyout = () => {
    if (screenWidth < 992) setFlyoutOpen((prev) => !prev);
  };

  useEffect(() => {
    if (screenWidth >= 768) {
      setFlyoutOpen(true);
    } else {
      setFlyoutOpen(false);
    }
  }, [screenWidth]);

  return (
    <GlobalContext.Provider
      value={{ isFlyoutOpen, setFlyoutOpen, toggleFlyout }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
