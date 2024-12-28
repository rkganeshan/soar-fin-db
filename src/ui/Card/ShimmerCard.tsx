import { forwardRef, LegacyRef } from "react";
import "./ShimmerCard.scss";

const ShimmerCard = forwardRef<HTMLElement>((_, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className="shimmer-card rounded-2xl shadow bg-gray-200 w-full card-animate-pulse"
      role="status"
      aria-label="Loading Card"
    >
      <div className="shimmer-card-header p-4 flex justify-between items-start">
        <div
          className="shimmer-balance w-1/4 h-6 bg-gray-300 rounded"
          aria-hidden="true"
        ></div>
        <div
          className="shimmer-chip w-10 h-10 bg-gray-300 rounded-full"
          aria-hidden="true"
        ></div>
      </div>
      <div className="shimmer-card-holder-valid-thru p-4 flex gap-16 justify-start">
        <div
          className="shimmer-holder w-1/4 h-5 bg-gray-300 rounded"
          aria-hidden="true"
        ></div>
        <div
          className="shimmer-valid w-1/4 h-5 bg-gray-300 rounded"
          aria-hidden="true"
        ></div>
      </div>
      <div className="shimmer-card-number-section p-4 border-t pt-4 flex justify-between items-center rounded-b-2xl bg-gray-300">
        <div
          className="shimmer-number w-3/4 h-6 bg-gray-400 rounded"
          aria-hidden="true"
        ></div>
        <div
          className="shimmer-logo w-12 h-6 bg-gray-400 rounded"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
});

export default ShimmerCard;
