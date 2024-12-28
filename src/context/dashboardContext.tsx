import { createContext, ReactNode, useContext } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Card } from "../types/Card";
import { CategoryData } from "../types/CategoryData";
import { MonthlyData } from "../types/MonthlyData";
import { Recipient } from "../types/Recipient";
import { Transaction } from "../types/Transaction";
import { WeeklyData } from "../types/WeeklyData";
import { DashboardAPIData } from "../types/DashboardData";
import { API_ROUTES } from "../constants/apiRoutes";
import { userProfilePicMock } from "../constants/userProfilePicMock";

interface DashboardContextType {
  isLoadingDashboard: boolean;
  isErrorDashboard: boolean;
  isSuccessDashboard: boolean;
  cards?: Card[];
  transactions?: Transaction[];
  weekly?: WeeklyData;
  statistics?: CategoryData;
  recipients?: Recipient[];
  balanceHistory?: MonthlyData;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    isLoading: isLoadingDashboard,
    isError: isErrorDashboard,
    isSuccess: isSuccessDashboard,
    data: dashboardData,
  } = useFetchData<DashboardAPIData>(API_ROUTES.getDashboard);

  // Modify the transfer list data to append profile picture,
  // in an ideal scenario, imageUrl would be sent
  // the recepient in the response.
  dashboardData?.transfer.forEach((recipient) => {
    return {
      ...recipient,
      profilePic:
        userProfilePicMock[recipient.name as keyof typeof userProfilePicMock],
    };
  });

  return (
    <DashboardContext.Provider
      value={{
        isLoadingDashboard,
        isErrorDashboard,
        isSuccessDashboard,
        cards: dashboardData?.cards,
        transactions: dashboardData?.transactions,
        weekly: dashboardData?.weekly,
        statistics: dashboardData?.statistics,
        recipients: dashboardData?.transfer,
        balanceHistory: dashboardData?.history,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
