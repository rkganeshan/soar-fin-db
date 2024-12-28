import React from "react";
import Deposit from "../../assets/deposit.png";
import DebitFromCard from "../../assets/debit-from-card.png";
import Paypal from "../../assets/paypal.png";

interface TransactionProps {
  title: string;
  date: string;
  amount: string;
  source?: "paypal";
  type: "credit" | "debit";
}

const Transaction: React.FC<TransactionProps> = ({
  title,
  date,
  amount,
  source,
  type,
}) => {
  const amountClass = type === "credit" ? "text-green-500" : "text-red-500";

  return (
    <>
      <div className="flex items-start space-x-4" role="listitem" tabIndex={0}>
        <div
          className="transaction-icon flex items-center bg-gray-200 p-2 rounded-full"
          style={{
            backgroundColor: source
              ? "#E7EDFF"
              : type === "debit"
              ? "#FFF5D9"
              : "#DCFAF8",
          }}
          aria-hidden="true"
        >
          <img
            src={source ? Paypal : type === "debit" ? DebitFromCard : Deposit}
            alt="Transaction Image"
          />
        </div>
        <div className="transaction-details flex-grow">
          <div className="transaction-title font-medium">{title}</div>
          <div className="transaction-date text-sm text-gray-600">{date}</div>
        </div>
        <div className={`transaction-amount font-bold ${amountClass}`}>
          {amount}
        </div>
      </div>
    </>
  );
};

export default Transaction;
