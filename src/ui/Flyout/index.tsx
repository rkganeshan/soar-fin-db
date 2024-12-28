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

  const handleNavigate = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <div
      className={`flyout-menu fixed inset-y-0 left-0 transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!isOpen}
      aria-label="Flyout menu"
    >
      <div className="flyout-content bg-white w-64 sm:w-full md:w-64 lg:w-64 xl:w-64 max-w-xs h-full shadow-lg">
        <div
          className="flyout-header p-6 flex items-center space-x-2 cursor-pointer"
          onClick={onClose}
          role="button"
          aria-label="Close menu"
        >
          <FlyoutHeader className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold" style={{ color: "#343C6A" }}>
            Soar Task
          </h2>
        </div>
        <div className="flyout-body p-4">
          <ul role="menu">
            <li
              className="flyout-item flex items-center p-2 cursor-pointer"
              onClick={() => {
                handleNavigate(routerPath.DASHBOARD.ROUTE);
              }}
              role="menuitem"
              aria-label="Dashboard"
              aria-current={
                pathname == routerPath.DASHBOARD.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.TRANSACTIONS.ROUTE);
              }}
              role="menuitem"
              aria-label="Transactions"
              aria-current={
                pathname == routerPath.TRANSACTIONS.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.ACCOUNTS.ROUTE);
              }}
              role="menuitem"
              aria-label="Accounts"
              aria-current={
                pathname == routerPath.ACCOUNTS.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.INVESTMENTS.ROUTE);
              }}
              role="menuitem"
              aria-label="Investments"
              aria-current={
                pathname == routerPath.INVESTMENTS.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.CREDIT_CARD.ROUTE);
              }}
              role="menuitem"
              aria-label="Credit Cards"
              aria-current={
                pathname == routerPath.CREDIT_CARD.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.LOANS.ROUTE);
              }}
              role="menuitem"
              aria-label="Loans"
              aria-current={
                pathname == routerPath.LOANS.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.SERVICES.ROUTE);
              }}
              role="menuitem"
              aria-label="Services"
              aria-current={
                pathname == routerPath.SERVICES.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.MY_PRIVILEGES.ROUTE);
              }}
              role="menuitem"
              aria-label="My Privileges"
              aria-current={
                pathname == routerPath.MY_PRIVILEGES.ROUTE ? "page" : undefined
              }
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
                handleNavigate(routerPath.SETTINGS.ROUTE);
              }}
              role="menuitem"
              aria-label="Settings"
              aria-current={
                pathname == routerPath.SETTINGS.ROUTE ? "page" : undefined
              }
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
