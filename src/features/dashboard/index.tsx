import React, { useEffect, useRef } from "react";
import { useDashboardContext } from "../../context/dashboardContext";
import MyCards from "./my_cards";
import RecentTransactions from "./recent_transactions";
import WeeklyActivity from "./weekly_activity";
import ExpenseStatistics from "./expense_statistics";
import QuickTransfer from "./quick_transfer";
import BalanceHistory from "./balance_history";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  const { isSuccessDashboard } = useDashboardContext();
  const myCardsRef = useRef<HTMLDivElement>(null);
  const recentTransactionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (myCardsRef.current && recentTransactionsRef.current) {
        const myCardsHeight = myCardsRef.current.offsetHeight;
        recentTransactionsRef.current.style.height = `${myCardsHeight}px`;
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, [isSuccessDashboard]);

  return (
    <div
      className="dashboard-container md:bg-gray-100 h-full flex flex-col"
      aria-live="polite"
    >
      <div
        className="my-cards-transactions grid grid-cols-1 lg:grid-cols-3 gap-4"
        aria-label="My Cards and Recent Transactions Section"
      >
        <div
          className="my-cards-section md:col-span-2"
          aria-label="My Cards Section"
        >
          <MyCards ref={myCardsRef} />
        </div>
        <div
          className="recent-transactions-section"
          aria-label="Recent Transactions Section"
        >
          <RecentTransactions ref={recentTransactionsRef} />
        </div>
      </div>
      <div
        className="activity-expenses grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 md:mt-8"
        aria-label="Weekly Activity and Expense Statistics Section"
      >
        <div
          className="weekly-activity-section md:col-span-2"
          aria-label="Weekly Activity Section"
        >
          <WeeklyActivity />
        </div>
        <div
          className="expense-statistics-section"
          aria-label="Expense Statistics Section"
        >
          <ExpenseStatistics />
        </div>
      </div>
      <div
        className="transfer-history grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 md:mt-8"
        aria-label="Quick Transfer and Balance History Section"
      >
        <div
          className="quick-transfer-section"
          aria-label="Quick Transfer Section"
        >
          <QuickTransfer />
        </div>
        <div
          className="balance-history-section md:col-span-2"
          aria-label="Balance History Section"
        >
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
