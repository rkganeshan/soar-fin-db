import { forwardRef, LegacyRef } from "react";
import { useDashboardContext } from "../../../context/dashboardContext";
import Transaction from "../../../ui/Transaction";
import { scrollStyleClasses } from "../../../constants";
import ShimmerTransaction from "../../../ui/Transaction/ShimmerTransaction";

const RecentTransactions = forwardRef<HTMLElement>((_, ref) => {
  const { isLoadingDashboard, isSuccessDashboard, transactions } =
    useDashboardContext();
  const noTransactions = isSuccessDashboard && transactions?.length === 0;
  const renderTransactionShimmer = () => (
    <>
      <ShimmerTransaction />
      <ShimmerTransaction />
    </>
  );

  const renderTransactions = () => {
    if (noTransactions) {
      return <p className="text-xl text-center">No Transactions</p>;
    }
    return (
      <>
        {transactions?.map((transaction, index) => (
          <Transaction key={index} {...transaction} />
        ))}
      </>
    );
  };
  return (
    <div className="recent-transactions h-full">
      <h2 className="text-lg font-semibold mb-2" style={{ color: "#343C6A" }}>
        Recent Transaction
      </h2>
      <div className="transactions-container flex-grow pt-2">
        <div
          className={`transaction pt-4 space-y-4 p-4 bg-white rounded-2xl shadow overflow-y-auto ${scrollStyleClasses} ${
            noTransactions ? "flex flex-col justify-center pt-0" : ""
          }`}
          ref={ref as LegacyRef<HTMLDivElement>}
        >
          {isLoadingDashboard
            ? renderTransactionShimmer()
            : renderTransactions()}
        </div>
      </div>
    </div>
  );
});

export default RecentTransactions;
