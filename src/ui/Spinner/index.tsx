import React from "react";

interface SpinnerProps {
  loaderText?: string;
  expand?: boolean;
  pageLoader?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  loaderText = "Loading...",
  expand = true,
  pageLoader = false,
}) => {
  if (pageLoader) {
    return (
      <div
        className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50"
        role="alert"
        aria-busy="true"
        aria-live="assertive"
      >
        <div className="flex flex-col justify-center items-center h-full py-10">
          <div
            className="animate-spin rounded-full h-9 w-9 border-black border-t-transparent"
            style={{ borderWidth: "3px" }}
            aria-hidden="true"
          ></div>
          <p className="mt-4 font-semibold text-lg text-gray-600">
            {loaderText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-center items-center h-full ${
        expand ? "min-h-[50vh]" : ""
      } py-10`}
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="animate-spin rounded-full h-9 w-9 border-black border-t-transparent"
        style={{ borderWidth: "3px" }}
        aria-hidden="true"
      ></div>
      <p className="mt-4 font-semibold text-lg text-gray-600">{loaderText}</p>
    </div>
  );
};

export default Spinner;
