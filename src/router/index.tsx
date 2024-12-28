import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider, ToastProvider } from "../context";
import { DashboardProvider } from "../context/dashboardContext";
import { SettingsProvider } from "../context/settingsContext";
import Dashboard from "../features/dashboard";
import Services from "../features/services";
import Layout from "../ui/Layout";
import Spinner from "../ui/Spinner";
import { routerPath } from "../constants";

const Accounts = lazy(() => import("../features/accounts"));
const CreditCards = lazy(() => import("../features/credit_cards"));
const Investments = lazy(() => import("../features/investments"));
const Loans = lazy(() => import("../features/loans"));
const Privileges = lazy(() => import("../features/privileges"));
const Settings = lazy(() => import("../features/settings"));
const Transactions = lazy(() => import("../features/transactions"));

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
          <Route
            index
            element={
              <DashboardProvider>
                <Dashboard />
              </DashboardProvider>
            }
          />
          <Route
            path={routerPath.TRANSACTIONS.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <Transactions />
              </Suspense>
            }
          />
          <Route path={routerPath.ACCOUNTS.ROUTE} element={<Accounts />} />
          <Route
            path={routerPath.INVESTMENTS.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <Investments />
              </Suspense>
            }
          />
          <Route
            path={routerPath.CREDIT_CARD.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <CreditCards />
              </Suspense>
            }
          />
          <Route
            path={routerPath.LOANS.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <Loans />
              </Suspense>
            }
          />
          <Route
            path={routerPath.SERVICES.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path={routerPath.MY_PRIVILEGES.ROUTE}
            element={
              <Suspense fallback={<Spinner pageLoader={true} />}>
                <Privileges />
              </Suspense>
            }
          />
          <Route
            path={routerPath.SETTINGS.ROUTE}
            element={
              <SettingsProvider>
                <Suspense fallback={<Spinner pageLoader={true} />}>
                  <Settings />
                </Suspense>
              </SettingsProvider>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
