import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ToastType } from "../../types/enums";
import { ToastProps } from "../../types/ToastProps";
import { TOAST_DURATION } from "../../constants";
import "./Toast.scss";

const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
  message,
  subMessage,
  onClose,
  type,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getIcon = () => {
    switch (type) {
      case ToastType.Success:
        return <FaCheckCircle className="text-green-500 w-6 h-6" />;
      case ToastType.Error:
        return <FaTimesCircle className="text-red-500 w-6 h-6" />;
      case ToastType.Warning:
        return <FaExclamationCircle className="text-yellow-500 w-6 h-6" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, TOAST_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex transition-opacity-300 ease-in justify-between bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-center space-x-4 ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className="flex gap-4">
        {getIcon()}
        <div>
          <div className="text-md">{message}</div>
          <div className="text-sm text-gray-500">{subMessage}</div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="ml-auto text-gray-500 hover:text-gray-700"
      >
        <AiOutlineClose className="w-4 h-4" tabIndex={1} />
      </button>
    </div>
  );
};

export default Toast;
