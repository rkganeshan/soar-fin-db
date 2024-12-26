import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "../../../utils/chartSetup";
import "./WeeklyActivity.scss";

const WeeklyActivity: React.FC = () => {
  const chartRef = useRef<ChartJS<"bar">>(null);
  const windowWidth = useMediaQuery();

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const barThickness = windowWidth <= 1024 ? 6 : 8;

  const data: any = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [400, 300, 200, 500, 300, 400, 300],
        backgroundColor: "#396AFF",
        borderColor: "#396AFF",
        borderWidth: 1,
        barThickness: barThickness,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        barThickness: 4,
      },
      {
        label: "Withdraw",
        data: [500, 200, 300, 400, 200, 300, 400],
        backgroundColor: "#232323",
        borderColor: "#232323",
        borderWidth: 1,
        barThickness: barThickness,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
        offset: true,
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#e0e0e0",
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "square",
          padding: 15,
          filter: (legendItem: any, chartData: any) => {
            return chartData.datasets[legendItem.datasetIndex].label;
          },
        },
      },
      datalabels: {
        display: false,
      },
    },
  };

  const plugin = {
    id: "bar",
    beforeInit: function (chart: any) {
      // Get reference to the original fit function
      const originalFit = chart.legend.fit;
      // Override the fit function
      chart.legend.fit = function fit() {
        // Bind scope in order to use `this` correctly inside it
        originalFit.bind(chart.legend)();
        this.height += 15; // Change the height
      };
    },
  };

  return (
    <div className="weekly-activity">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Weekly Activity
      </h2>
      <div className="chart-container bg-white rounded-2xl shadow px-8 pt-4">
        <Bar data={data} options={options} ref={chartRef} plugins={[plugin]} />
      </div>
    </div>
  );
};

export default WeeklyActivity;
