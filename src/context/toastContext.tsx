import React, { createContext, ReactNode, useContext, useState } from "react";
import Toast from "../ui/Toast";
import { ToastProps } from "../types/ToastProps";

interface ToastContextType {
  toasts: ToastProps[];
  showToast: (props: ToastProps) => void;
  removeToast: (index: number) => void;
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => {},
  removeToast: () => {},
});

const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = (props: ToastProps) => {
    setToasts([...toasts, props]);
  };

  const removeToast = (index: number) => {
    setToasts(toasts.filter((_, i) => i !== index));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      <div className="toast flex flex-col gap-2">
        {toasts.map((toast, index) => (
          <Toast key={index} {...toast} onClose={() => removeToast(index)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastProvider, useToast };
