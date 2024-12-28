import { MonthlyData } from "../types/MonthlyData";

export const balanceHistoryLineChartUtils = ({
  balanceHistoryData,
}: {
  balanceHistoryData: MonthlyData | undefined;
}) => {
  const months = Object.keys(balanceHistoryData ?? {});
  const balances = Object.values(balanceHistoryData ?? {});
  const data = {
    labels: months,
    datasets: [
      {
        label: "Balance",
        data: balances,
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
          gradient.addColorStop(0.2, "rgba(84, 119, 235, 0.4)");
          gradient.addColorStop(0.8, "rgba(93, 107, 160, 0.2)");
          gradient.addColorStop(1, "rgba(136, 159, 241, 0)");
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

  return {
    lineChartData: data,
    lineChartOptions: options,
  };
};
