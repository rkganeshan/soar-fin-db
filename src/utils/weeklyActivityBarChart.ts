import { WeeklyData } from "../types/WeeklyData";

export const weeklyActivityBarChartUtil = ({
  barThickness,
  weeklyData,
}: {
  barThickness: number;
  weeklyData: WeeklyData | undefined;
}) => {
  const weekdays = Object.keys(weeklyData ?? {});
  const deposits = Object.values(weeklyData ?? {}).map((day) => day.deposit);
  const withdrawals = Object.values(weeklyData ?? {}).map(
    (day) => day.withdraw
  );

  const data: any = {
    labels: weekdays,
    datasets: [
      {
        label: "Deposit",
        data: deposits,
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
        data: withdrawals,
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

  return {
    barChartData: data,
    barChartOptions: options,
    barChartPlugin: plugin,
  };
};
