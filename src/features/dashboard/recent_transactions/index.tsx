import { forwardRef, LegacyRef } from "react";
import Transaction from "../../../ui/Transaction";
import { scrollStyleClasses } from "../../../constants";

interface TransactionProps {
  title: string;
  date: string;
  amount: string;
  source?: "paypal";
  type: "credit" | "debit";
}

const RecentTransactions = forwardRef<HTMLElement>((_, ref) => {
  const transactions: TransactionProps[] = [
    {
      title: "Debit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      type: "debit",
    },
    {
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      source: "paypal",
      type: "credit",
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "credit",
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "credit",
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "credit",
    },
  ];

  return (
    <div className="recent-transactions h-full">
      <h2 className="text-lg font-semibold mb-2" style={{ color: "#343C6A" }}>
        Recent Transaction
      </h2>
      <div className="transactions-container flex-grow pt-2">
        <div
          className={`transaction pt-4 space-y-4 p-4 bg-white rounded-2xl shadow overflow-y-auto ${scrollStyleClasses}`}
          ref={ref as LegacyRef<HTMLDivElement>}
        >
          {transactions.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default RecentTransactions;
