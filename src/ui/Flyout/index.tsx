import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentURL } from "../../hooks";
import { routerPath } from "../../constants";
import FlyoutHeader from "../../assets/flyoutHeader.svg?react";
import DashboardIcon from "../../assets/dashboard.svg?react";
import Transactions from "../../assets/transactions.svg?react";
import Accounts from "../../assets/accounts.svg?react";
import CreditCard from "../../assets/creditcard.svg?react";
import Investments from "../../assets/investments.svg?react";
import Loans from "../../assets/loans.svg?react";
import MyPrivileges from "../../assets/myprivileges.svg?react";
import Services from "../../assets/services.svg?react";
import Settings from "../../assets/settingssolid.svg?react";

interface FlyoutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({ isOpen, onClose }) => {
  const { pathname } = useCurrentURL();
  const navigate = useNavigate();

  return (
    <div
      className={`flyout-menu fixed inset-y-0 left-0 transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flyout-content bg-white w-64 sm:w-full md:w-64 lg:w-64 xl:w-64 max-w-xs h-full shadow-lg">
        <div
          className="flyout-header p-6 flex items-center space-x-2 cursor-pointer"
          onClick={onClose}
        >
          <FlyoutHeader className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold" style={{ color: "#343C6A" }}>
            Soar Task
          </h2>
        </div>
        <div className="flyout-body p-4">
          <ul>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.DASHBOARD.ROUTE);
              }}
            >
              <DashboardIcon
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.DASHBOARD.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Dashboard</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.TRANSACTIONS.ROUTE);
              }}
            >
              <Transactions
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.TRANSACTIONS.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Transactions</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.ACCOUNTS.ROUTE);
              }}
            >
              <Accounts
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.ACCOUNTS.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Accounts</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.INVESTMENTS.ROUTE);
              }}
            >
              <Investments
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.INVESTMENTS.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Investments</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.CREDIT_CARD.ROUTE);
              }}
            >
              <CreditCard
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.CREDIT_CARD.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Credit Cards</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.LOANS.ROUTE);
              }}
            >
              <Loans
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.LOANS.ROUTE ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Loans</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.SERVICES.ROUTE);
              }}
            >
              <Services
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.SERVICES.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Services</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.MY_PRIVILEGES.ROUTE);
              }}
            >
              <MyPrivileges
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.MY_PRIVILEGES.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>My Privileges</span>
            </li>
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                navigate(routerPath.SETTINGS.ROUTE);
              }}
            >
              <Settings
                className="h-5 w-5 mr-4"
                style={{
                  fill:
                    pathname == routerPath.SETTINGS.ROUTE
                      ? "#232323"
                      : "#B1B1B1",
                }}
              />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlyoutMenu;
