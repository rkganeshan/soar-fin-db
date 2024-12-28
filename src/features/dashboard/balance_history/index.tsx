import React from "react";
import { Line } from "react-chartjs-2";
import { useDashboardContext } from "../../../context/dashboardContext";
import Spinner from "../../../ui/Spinner";
import { balanceHistoryLineChartUtils } from "../../../utils/balanceHistoryLineChart";
import "../../../utils/chartSetup";
import "./BalanceHistory.scss";

const BalanceHistory: React.FC = () => {
  const {
    isLoadingDashboard,
    isErrorDashboard,
    balanceHistory: balanceHistoryData,
  } = useDashboardContext();
  const { lineChartData, lineChartOptions } = balanceHistoryLineChartUtils({
    balanceHistoryData,
  });

  const renderLineChartSection = () => {
    if (isLoadingDashboard) {
      return <Spinner expand={false} />;
    }
    if (!isErrorDashboard) {
      return <Line data={lineChartData} options={lineChartOptions} />;
    }
  };

  return (
    <div className="balance-history">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Balance History
      </h2>
      <div className="line-chart-container bg-white rounded-lg shadow px-8 pt-4">
        {renderLineChartSection()}
      </div>
    </div>
  );
};

export default BalanceHistory;
