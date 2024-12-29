import React from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
}

const Alert: React.FC<AlertProps> = ({ message, type = "info" }) => {
  const alertStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div
      className={`alert w-full px-4 py-3 border rounded-md ${alertStyles[type]} flex items-center`}
      role="alert"
      aria-live="assertive"
      aria-label={`${type.charAt(0).toUpperCase() + type.slice(1)} Alert`}
    >
      {message}
    </div>
  );
};

export default Alert;
