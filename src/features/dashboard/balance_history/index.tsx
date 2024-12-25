import React from "react";
import { Line } from "react-chartjs-2";
import "../../../utils/chartSetup";

const BalanceHistory: React.FC = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [200, 300, 400, 600, 800, 600, 700],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#e0e0e0",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="balance-history">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Balance History
      </h2>
      <div
        className="line-chart-container bg-white rounded-lg shadow px-8 pt-4"
        style={{ height: "276px" }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
