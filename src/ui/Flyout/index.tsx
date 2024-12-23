import React from "react";
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
  // TODO : After adding react router, set the current tab appropriately
  const currentTab: string = "dashboard";
  return (
    <div
      className={`flyout-menu fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={onClose}
    >
      <div
        className="flyout-content bg-white w-64 sm:w-full md:w-64 lg:w-64 xl:w-64 max-w-xs h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flyout-header p-6 border-b flex items-center space-x-2 cursor-pointer"
          onClick={onClose}
        >
          <FlyoutHeader className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold" style={{ color: "#343C6A" }}>
            Soar Task
          </h2>
        </div>
        <div className="flyout-body p-4">
          <ul>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <DashboardIcon
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "dashboard" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Dashboard</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Transactions
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "transactions" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Transactions</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Accounts
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "accounts" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Accounts</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Investments
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "investments" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Investments</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <CreditCard
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "creditcard" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Credit Cards</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Loans
                className="h-5 w-5 mr-4"
                style={{ fill: currentTab == "loans" ? "#232323" : "#B1B1B1" }}
              />
              <span>Loans</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Services
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "services" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>Services</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <MyPrivileges
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "myprivileges" ? "#232323" : "#B1B1B1",
                }}
              />
              <span>My Privileges</span>
            </li>
            <li className="flyout-item flex items-center p-2 cursor-pointer">
              <Settings
                className="h-5 w-5 mr-4"
                style={{
                  fill: currentTab == "settings" ? "#232323" : "#B1B1B1",
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
