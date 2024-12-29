import { createContext, ReactNode, useCallback, useContext } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { maskCardNumberRegex } from "../utils/regex";
import { Card } from "../types/Card";
import { CategoryData } from "../types/CategoryData";
import { MonthlyData } from "../types/MonthlyData";
import { Recipient } from "../types/Recipient";
import { Transaction } from "../types/Transaction";
import { WeeklyData } from "../types/WeeklyData";
import { DashboardAPIData } from "../types/DashboardData";
import { REPLACE_MASKED_PATTERN } from "../constants";
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
  const prepareImgsForQuickTransferRecipient = useCallback(
    (dashboardData: DashboardAPIData) => ({
      ...dashboardData,
      /* Modify the transfer list data to append profile picture,
       * in an ideal scenario, imageUrl would be sent response. */
      transfer: dashboardData.transfer.map((recipient) => ({
        ...recipient,
        profilePic:
          recipient.name in userProfilePicMock
            ? userProfilePicMock[
                recipient.name as keyof typeof userProfilePicMock
              ]
            : userProfilePicMock["default" as keyof typeof userProfilePicMock],
      })),
      // Mask the original card number and have it in maskedCards
      maskedCards: dashboardData.cards.map((card) => ({
        ...card,
        cardNumber: card.cardNumber.replace(
          maskCardNumberRegex,
          REPLACE_MASKED_PATTERN
        ),
      })),
      // Sort transactions by date (most recent date appears first in the list)
      transactions: dashboardData.transactions
        .slice()
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
    }),
    []
  );

  const {
    isLoading: isLoadingDashboard,
    isError: isErrorDashboard,
    isSuccess: isSuccessDashboard,
    data: dashboardData,
  } = useFetchData<DashboardAPIData & { maskedCards?: Card[] }>(
    API_ROUTES.getDashboard,
    prepareImgsForQuickTransferRecipient
  );

  return (
    <DashboardContext.Provider
      value={{
        isLoadingDashboard,
        isErrorDashboard,
        isSuccessDashboard,
        cards: dashboardData?.maskedCards,
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
