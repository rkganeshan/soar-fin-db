import { useEffect, useRef } from "react";
import MyCards from "./my_cards";
import RecentTransactions from "./recent_transactions";
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
    <div className="dashboard-container p-4 bg-gray-100 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        <div className="my-cards-section md:col-span-2">
          <MyCards ref={myCardsRef} />
        </div>
        <div className="recent-transactions-section">
          <RecentTransactions ref={recentTransactionsRef} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
