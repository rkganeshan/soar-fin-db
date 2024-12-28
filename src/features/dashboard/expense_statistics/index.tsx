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
      return <Spinner expand={false} />;
    }
    if (!isErrorDashboard) {
      return <Pie data={pieChartData} options={pieChartOptions} />;
    }
  };

  return (
    <div className="expense-statistics">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Expense Statistics
      </h2>
      <div className="pie-chart-container bg-white rounded-2xl shadow">
        {rendePieChartSection()}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
