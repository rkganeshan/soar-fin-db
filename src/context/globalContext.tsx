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
  const [currentUserUpdatedImg, setCurrentUserUpdatedImg] = useState<
    string | null
  >(null);
  const screenWidth = useMediaQuery();

  const toggleFlyout = () => {
    setFlyoutOpen((prev) => !prev);
  };

  useEffect(() => {
    if (screenWidth >= 768) {
      setFlyoutOpen(true);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isFlyoutOpen,
        currentUserUpdatedImg,
        setFlyoutOpen,
        toggleFlyout,
        setCurrentUserUpdatedImg,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
