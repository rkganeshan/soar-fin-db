import { CategoryData } from "../types/CategoryData";

export const expenseStatisticsPieChartUtils = ({
  expenseStatsData,
}: {
  expenseStatsData: CategoryData | undefined;
}) => {
  const categories = Object.keys(expenseStatsData ?? {});
  const expensePercentage = Object.values(expenseStatsData ?? {});
  const data = {
    labels: categories,
    datasets: [
      {
        data: expensePercentage,
        backgroundColor: ["#FC7900", "#396AFF", "#343C6A", "#232323"],
        borderColor: "#fff",
        borderWidth: 2,
        hoverOffset: 20,
        offset: [5, 40, 5, 30],
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
        textAlign: "center",
        formatter: (value: number, context: any) => {
          const percentage = `${value}%`;
          const label = context.chart.data.labels[context.dataIndex];
          return `${percentage}\n${label}`;
        },
        align: ["center", "end", "center", "center"],
        anchor: "center",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return {
    pieChartData: data,
    pieChartOptions: options,
  };
};
