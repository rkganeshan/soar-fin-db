import React from "react";
import { Pie } from "react-chartjs-2";

const ExpenseStatistics: React.FC = () => {
  const data = {
    labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
    datasets: [
      {
        data: [30, 20, 35, 15],
        backgroundColor: ["#FC7900", "#396AFF", "#343C6A", "#232323"],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 20,
        offset: [5, 40, 5, 30],
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
        textAlign: "center",
        formatter: (value: number, context: any) => {
          const percentage = `${value}%`;
          const label = context.chart.data.labels[context.dataIndex];
          return `${percentage}\n${label}`;
        },
        align: ["center", "end", "center", "center"],
        anchor: "center",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
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
