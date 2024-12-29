import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { useCurrentURL, useMediaQuery } from "../../hooks";
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
import "./Flyout.scss";

interface FlyoutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    label: "Dashboard",
    route: routerPath.DASHBOARD.ROUTE,
    Icon: DashboardIcon,
  },
  {
    label: "Transactions",
    route: routerPath.TRANSACTIONS.ROUTE,
    Icon: Transactions,
  },
  { label: "Accounts", route: routerPath.ACCOUNTS.ROUTE, Icon: Accounts },
  {
    label: "Investments",
    route: routerPath.INVESTMENTS.ROUTE,
    Icon: Investments,
  },
  {
    label: "Credit Cards",
    route: routerPath.CREDIT_CARD.ROUTE,
    Icon: CreditCard,
  },
  { label: "Loans", route: routerPath.LOANS.ROUTE, Icon: Loans },
  { label: "Services", route: routerPath.SERVICES.ROUTE, Icon: Services },
  {
    label: "My Privileges",
    route: routerPath.MY_PRIVILEGES.ROUTE,
    Icon: MyPrivileges,
  },
  { label: "Settings", route: routerPath.SETTINGS.ROUTE, Icon: Settings },
];

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({ isOpen, onClose }) => {
  const screenWidth = useMediaQuery();
  const { isFlyoutOpen } = useGlobalContext();
  const { pathname } = useCurrentURL();
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    if (screenWidth < 1024) {
      onClose();
    }
    navigate(to);
  };

  if (!isFlyoutOpen) {
    return null;
  }

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
          <h2
            className="flyout-head-text text-lg font-semibold"
            style={{ color: "#343C6A" }}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClose();
              }
            }}
          >
            Soar Task
          </h2>
        </div>
        <div className="flyout-body p-4 pl-0">
          <ul role="menu">
            {menuItems.map(({ label, route, Icon }) => {
              const isActive = pathname === route;
              return (
                <li
                  key={label}
                  className={`flyout-item flex items-center gap-4 p-2 pl-0 cursor-pointer ${
                    isActive ? "flyout-item--active" : ""
                  }`}
                  onClick={() => handleNavigate(route)}
                  role="menuitem"
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleNavigate(route);
                    }
                  }}
                >
                  <Icon
                    className={`h-5 w-5  ${
                      isActive ? "text-primary ml-4" : "text-secondary ml-6"
                    }`}
                    style={{
                      fill: isActive ? "#232323" : "#B1B1B1",
                    }}
                  />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlyoutMenu;
