import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useDashboardContext } from "../../../context/dashboardContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Spinner from "../../../ui/Spinner";
import "../../../utils/chartSetup";
import { weeklyActivityBarChartUtil } from "../../../utils/weeklyActivityBarChart";
import "./WeeklyActivity.scss";

const WeeklyActivity: React.FC = () => {
  const { isLoadingDashboard, isErrorDashboard, weekly } =
    useDashboardContext();
  const chartRef = useRef<ChartJS<"bar">>(null);
  const windowWidth = useMediaQuery();
  const barThickness = windowWidth <= 1024 ? 6 : 8;

  const { barChartData, barChartOptions, barChartPlugin } =
    weeklyActivityBarChartUtil({ barThickness, weeklyData: weekly });

  const renderBarChartSection = () => {
    if (isLoadingDashboard) {
      return <Spinner expand={false} aria-label="Loading spinner" />;
    }
    if (!isErrorDashboard) {
      return (
        <Bar
          data={barChartData}
          options={barChartOptions}
          ref={chartRef}
          plugins={[barChartPlugin]}
          aria-label="Weekly Activity Bar Chart"
        />
      );
    }
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="weekly-activity" aria-live="polite">
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: "#343C6A" }}
        aria-label="Weekly Activity Heading"
      >
        Weekly Activity
      </h2>
      <div
        className={`chart-container bg-white rounded-2xl shadow px-8 pt-4 ${
          isLoadingDashboard ? "shimmer-loader" : ""
        }`}
        aria-live="polite"
        aria-label="Chart Container"
      >
        {renderBarChartSection()}
      </div>
    </div>
  );
};

export default WeeklyActivity;
