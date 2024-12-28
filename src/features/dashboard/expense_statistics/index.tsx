import React from "react";
import { Pie } from "react-chartjs-2";
import { useDashboardContext } from "../../../context/dashboardContext";
import Spinner from "../../../ui/Spinner";
import { expenseStatisticsPieChartUtils } from "../../../utils/expenseStatisticsPieChart";
import "./ExpenseStatistics.scss";

const ExpenseStatistics: React.FC = () => {
  const {
    isLoadingDashboard,
    isErrorDashboard,
    statistics: expenseStatsData,
  } = useDashboardContext();
  const { pieChartData, pieChartOptions } = expenseStatisticsPieChartUtils({
    expenseStatsData,
  });

  const rendePieChartSection = () => {
    if (isLoadingDashboard) {
      return (
        <Spinner
          expand={false}
          aria-live="polite"
          aria-label="Loading spinner"
        />
      );
    }
    if (!isErrorDashboard) {
      return (
        <Pie
          data={pieChartData}
          options={pieChartOptions}
          aria-label="Expense Statistics Pie Chart"
        />
      );
    }
  };

  return (
    <div className="expense-statistics" aria-live="polite">
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: "#343C6A" }}
        aria-label="Expense Statistics Heading"
      >
        Expense Statistics
      </h2>
      <div
        className="pie-chart-container bg-white rounded-2xl shadow"
        aria-live="polite"
        aria-label="Pie Chart Container"
      >
        {rendePieChartSection()}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
