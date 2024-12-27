import { Route, Routes } from "react-router-dom";
import { GlobalProvider, ToastProvider } from "../context";
import Dashboard from "../features/dashboard";
import Settings from "../features/settings";
import Transactions from "../features/transactions";
import Accounts from "../features/accounts";
import Investments from "../features/investments";
import CreditCards from "../features/credit_cards";
import Loans from "../features/loans";
import Privileges from "../features/privileges";
import Services from "../features/services";
import Layout from "../ui/Layout";
import { routerPath } from "../constants";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path={routerPath.DASHBOARD.ROUTE}
          element={
            <GlobalProvider>
              <ToastProvider>
                <Layout />
              </ToastProvider>
            </GlobalProvider>
          }
        >
          <Route index element={<Dashboard />} />
          <Route
            path={routerPath.TRANSACTIONS.ROUTE}
            element={<Transactions />}
          />
          <Route path={routerPath.ACCOUNTS.ROUTE} element={<Accounts />} />
          <Route
            path={routerPath.INVESTMENTS.ROUTE}
            element={<Investments />}
          />
          <Route
            path={routerPath.CREDIT_CARD.ROUTE}
            element={<CreditCards />}
          />
          <Route path={routerPath.LOANS.ROUTE} element={<Loans />} />
          <Route path={routerPath.SERVICES.ROUTE} element={<Services />} />
          <Route
            path={routerPath.MY_PRIVILEGES.ROUTE}
            element={<Privileges />}
          />
          <Route path={routerPath.SETTINGS.ROUTE} element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
