import React from "react";

interface SpinnerProps {
  loaderText?: string;
  expand?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  loaderText = "Loading...",
  expand = true,
}) => (
  <div
    className={`flex flex-col justify-center items-center h-full  ${
      expand ? "min-h-[50vh]" : ""
    } py-10`}
  >
    <div
      className="animate-spin rounded-full h-9 w-9 border-black border-t-transparent"
      style={{ borderWidth: "3px" }}
    ></div>
    <p className="mt-4 font-semibold text-lg text-gray-600">{loaderText}</p>
  </div>
);

export default Spinner;
