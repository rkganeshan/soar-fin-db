import React from "react";

interface SpinnerProps {
  loaderText?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ loaderText = "Loading..." }) => (
  <div className="flex flex-col justify-center items-center h-full min-h-[50vh] py-10">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-black border-t-transparent"></div>
    <p className="mt-4 text-md text-gray-600">{loaderText}</p>
  </div>
);

export default Spinner;
