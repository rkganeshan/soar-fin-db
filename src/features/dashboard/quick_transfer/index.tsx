import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../../../context/dashboardContext";
import Spinner from "../../../ui/Spinner";
import { Recipient } from "../../../types/Recipient";
import { scrollStyleClasses } from "../../../constants";
import SendIcon from "../../../assets/send.png";
import "./QuickTransfer.scss";

const QuickTransfer: React.FC = () => {
  const { isLoadingDashboard, isSuccessDashboard, recipients } =
    useDashboardContext();
  const [visibleUsers, setVisibleUsers] = useState<Recipient[] | null>(null); //users.slice(0, 3)
  const [amount, setAmount] = useState<string>("");

  const isRecipientsMoreThanThree =
    recipients && visibleUsers && recipients.length > 3;

  const handleClickMoreUsers = () => {
    if (recipients && visibleUsers) {
      if (visibleUsers.length === 3) {
        setVisibleUsers(recipients);
      } else {
        setVisibleUsers(recipients.slice(0, 3));
      }
    }
  };

  const renderShowToggleBtn = () => {
    if (isRecipientsMoreThanThree) {
      return (
        <div
          onClick={handleClickMoreUsers}
          className={`show-more-btn shadow-md ${
            visibleUsers.length < recipients.length ? "show-more" : "show-less"
          }`}
        >
          <span className="users-slider arrow">
            {visibleUsers.length < recipients.length ? ">" : "<"}
          </span>
        </div>
      );
    }
  };

  useEffect(() => {
    if (isSuccessDashboard && !isLoadingDashboard && recipients) {
      setVisibleUsers(recipients.slice(0, 3));
    }
  }, [isLoadingDashboard, isSuccessDashboard, recipients]);

  return (
    <div className="quick-transfer">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Quick Transfer
      </h2>
      <div
        className="trf-box bg-white rounded-2xl shadow"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "16px",
          paddingBottom: "16px",
          height: "276px",
        }}
      >
        {isLoadingDashboard ? (
          <Spinner expand={false} />
        ) : (
          <>
            <div
              className={`users-container flex  
            ${
              isRecipientsMoreThanThree
                ? "overflow-x-auto"
                : "overflow-x-hidden"
            } ${scrollStyleClasses}}
            `}
            >
              {visibleUsers?.map((user, index) => {
                console.log(
                  "user.name::",
                  user.name,
                  " user.profilePic:",
                  user.profilePic
                );
                return (
                  <div key={index} className="user">
                    <img
                      src={user.profilePic}
                      alt={user.name}
                      className="user-img rounded-full"
                    />
                    <div className="user-info text-center">
                      <div className="user-name">{user.name}</div>
                      <div className="user-role">{user.role}</div>
                    </div>
                  </div>
                );
              })}
              {renderShowToggleBtn()}
            </div>
            <div className="transfer-section mt-8 flex items-center space-x-4">
              <span className="write-amount">Write Amount</span>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="525.50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="amount-input"
                />
                <button className="send-btn" style={{ fontSize: "16px" }}>
                  Send&nbsp;
                  <img
                    src={SendIcon}
                    style={{
                      width: "26px",
                      height: "22.6px",
                    }}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuickTransfer;
