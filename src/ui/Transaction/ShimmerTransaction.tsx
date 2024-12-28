import "./ShimmerTransaction.scss";

const ShimmerTransaction = () => {
  return (
    <div
      className="shimmer-transaction flex items-start space-x-4 p-4 transaction-animate-pulse rounded-md"
      role="status"
      aria-label="Loading transaction"
    >
      {/* Icon Placeholder */}
      <div
        className="shimmer-icon flex items-center justify-center bg-gray-100 p-2 rounded-full w-12 h-12"
        aria-hidden="true"
      ></div>

      {/* Details Placeholder */}
      <div className="shimmer-details flex-grow space-y-2">
        <div
          className="shimmer-title w-3/4 h-4 bg-gray-100 rounded"
          aria-hidden="true"
        ></div>
        <div
          className="shimmer-date w-1/2 h-3 bg-gray-100 rounded"
          aria-hidden="true"
        ></div>
      </div>

      {/* Amount Placeholder */}
      <div
        className="shimmer-amount w-1/4 h-4 bg-gray-100 rounded"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default ShimmerTransaction;
