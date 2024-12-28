import React, { useEffect, useState, useRef } from "react";
import { useDashboardContext } from "../../../context/dashboardContext";
import Spinner from "../../../ui/Spinner";
import AmountInputAndTransfer from "./AmountInputAndTransfer";
import RecipientsList from "./RecipientList";
import { Recipient } from "../../../types/Recipient";
import "./QuickTransfer.scss";
import { UsersInView } from "../../../types/enums/UsersInView";

const QuickTransfer: React.FC = () => {
  const { isLoadingDashboard, isSuccessDashboard, recipients } =
    useDashboardContext();

  // If all users are visible by default, we should not show the toggle at all.
  const [isDefaultAllUsersInView, setIsDefaultAllUsersInView] =
    useState<UsersInView>(UsersInView.UNKNOWN);
  // Total users visible(in the entire scroll)
  const [visibleUsers, setVisibleUsers] = useState<Recipient[] | null>(null);
  // Toggle state (See more and less)
  const [isShowingAll, setIsShowingAll] = useState(false);

  const trfBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateVisibleUsers = (isResize?: boolean) => {
      if (recipients && trfBoxRef.current) {
        // 40 units of width - is approximately for the toggler
        const trfBoxWidth =
          trfBoxRef.current.offsetWidth - (isDefaultAllUsersInView ? 0 : 40);
        const userWidth = 100;
        const maxUsers = Math.floor(trfBoxWidth / userWidth);

        // Show all users if toggled or default to maxUsers possible to show
        const calculatedVisibleUsers = isShowingAll
          ? recipients
          : recipients.slice(0, maxUsers);
        setVisibleUsers(calculatedVisibleUsers);

        if (
          (isResize && !isShowingAll) ||
          isDefaultAllUsersInView === UsersInView.UNKNOWN
        ) {
          if (recipients.length === calculatedVisibleUsers.length) {
            setIsDefaultAllUsersInView(UsersInView.YES);
          } else {
            setIsDefaultAllUsersInView(UsersInView.NO);
          }
        }
      }
    };

    // Calculate on mount and whenever the dashboard data updates
    if (isSuccessDashboard && !isLoadingDashboard && recipients) {
      calculateVisibleUsers();
    }

    // Resize event listener to handle dynamic resizing
    const handleResize = () => {
      calculateVisibleUsers(true);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoadingDashboard, isSuccessDashboard, recipients, isShowingAll]);

  return (
    <div className="quick-transfer">
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#343C6A" }}>
        Quick Transfer
      </h2>
      <div className="trf-box bg-white rounded-2xl shadow" ref={trfBoxRef}>
        {isLoadingDashboard && <Spinner expand={false} />}
        {Boolean(!isLoadingDashboard && recipients) && (
          <>
            <RecipientsList
              recipients={recipients}
              isDefaultAllUsersInView={isDefaultAllUsersInView}
              isShowingAll={isShowingAll}
              setIsShowingAll={setIsShowingAll}
              visibleUsers={visibleUsers}
            />
            <AmountInputAndTransfer />
          </>
        )}
      </div>
    </div>
  );
};

export default QuickTransfer;
