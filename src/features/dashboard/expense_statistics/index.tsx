import React from "react";
import { Pie } from "react-chartjs-2";
import "../../../utils/chartSetup";

const ExpenseStatistics: React.FC = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="expense-statistics">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Expense Statistics
      </h2>
      <div
        className="bg-white rounded-2xl shadow"
        style={{
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "16px",
          paddingBottom: "16px",
          height: "290px",
        }}
      >
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
