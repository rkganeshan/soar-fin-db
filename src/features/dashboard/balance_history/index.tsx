import React from "react";
import { Line } from "react-chartjs-2";
import "../../../utils/chartSetup";
import "./BalanceHistory.scss";

const BalanceHistory: React.FC = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [200, 600, 300, 450, 250, 550, 700],
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0.2, "rgba(84, 119, 235, 0.4)"); // Start with 40% opacity at the top
          gradient.addColorStop(0.8, "rgba(93, 107, 160, 0.2)"); // 20% opacity in the middle
          gradient.addColorStop(1, "rgba(136, 159, 241, 0)"); // Fully transparent at the bottom
          return gradient;
        },
        borderColor: "#1814F3",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        border: {
          dash: [6, 6],
          color: "transparent",
        },
        beginAtZero: true,
        grid: {
          display: true,
          color: "#e0e0e0",
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 200,
        },
      },
      x: {
        border: {
          dash: [6, 6],
          color: "transparent",
        },
        grid: {
          display: true,
          color: "#e0e0e0",
          borderDash: [5, 5],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="balance-history">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Balance History
      </h2>
      <div className="line-chart-container bg-white rounded-lg shadow px-8 pt-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
