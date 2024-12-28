import { SetStateAction } from "react";
import { Recipient } from "../../../types/Recipient";
import { scrollStyleClasses } from "../../../constants";
import { UsersInView } from "../../../types/enums/UsersInView";

interface RecipientList {
  recipients: Recipient[] | undefined;
  visibleUsers: Recipient[] | null;
  isDefaultAllUsersInView: UsersInView;
  isShowingAll: boolean;
  selectedRecipient: Recipient | null;
  setIsShowingAll: React.Dispatch<SetStateAction<boolean>>;
  setSelectedRecipient: React.Dispatch<SetStateAction<Recipient | null>>;
}

const RecipientsList = ({
  recipients,
  visibleUsers,
  isDefaultAllUsersInView,
  isShowingAll,
  selectedRecipient,
  setIsShowingAll,
  setSelectedRecipient,
}: RecipientList) => {
  const renderShowToggleBtn = () => {
    if (
      recipients &&
      visibleUsers &&
      isDefaultAllUsersInView === UsersInView.NO
    ) {
      return (
        <div
          onClick={() => setIsShowingAll((prev) => !prev)}
          className={`show-more-btn shadow-md ${
            isShowingAll ? "show-less" : "show-more"
          }`}
        >
          <span className="users-slider arrow">{isShowingAll ? "<" : ">"}</span>
        </div>
      );
    }
  };
  return (
    <div
      className={`users-container  ${
        isShowingAll ? "overflow-x-auto" : "overflow-x-hidden"
      } ${scrollStyleClasses}`}
    >
      {visibleUsers?.map((user, index) => (
        <div
          key={index}
          className={`user ${
            user.name === selectedRecipient?.name ? "font-bold" : ""
          }`}
          onClick={() => {
            if (user.name === selectedRecipient?.name) {
              setSelectedRecipient(null);
            } else {
              setSelectedRecipient(user);
            }
          }}
          onBlur={() => {
            setSelectedRecipient(null);
          }}
        >
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
      ))}
      {renderShowToggleBtn()}
    </div>
  );
};

export default RecipientsList;
