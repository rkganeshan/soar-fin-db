import { useEffect, useRef } from "react";
import MyCards from "./my_cards";
import RecentTransactions from "./recent_transactions";
import WeeklyActivity from "./weekly_activity";
import ExpenseStatistics from "./expense_statistics";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
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
  }, []);

  return (
    <div className="dashboard-container bg-gray-100 h-full flex flex-col">
      <div className="my-cards-transactions grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="my-cards-section md:col-span-2">
          <MyCards ref={myCardsRef} />
        </div>
        <div className="recent-transactions-section">
          <RecentTransactions ref={recentTransactionsRef} />
        </div>
      </div>
      <div className="activity-expenses grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 md:mt-8">
        <div className="weekly-activity-section md:col-span-2">
          <WeeklyActivity />
        </div>
        <div className="expense-statistics-section">
          <ExpenseStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
