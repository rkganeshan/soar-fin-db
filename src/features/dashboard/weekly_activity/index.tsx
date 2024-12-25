import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartJS from "chart.js/auto";
import "../../../utils/chartSetup";
import "./WeeklyActivity.scss";

const WeeklyActivity: React.FC = () => {
  const chartRef = useRef<ChartJS<"bar">>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [400, 300, 200, 500, 300, 400, 300],
        backgroundColor: "#396AFF",
        borderColor: "#396AFF",
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: "Withdraw",
        data: [500, 200, 300, 400, 200, 300, 400],
        backgroundColor: "#232323",
        borderColor: "#232323",
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#e0e0e0",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "square",
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="weekly-activity">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Weekly Activity
      </h2>
      <div className="chart-container bg-white rounded-2xl shadow px-8 pt-4">
        <Bar data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default WeeklyActivity;
