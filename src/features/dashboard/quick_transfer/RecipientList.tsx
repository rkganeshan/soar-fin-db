import { SetStateAction } from "react";
import LazyImage from "../../../ui/LazyImage";
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
  const handleSelectRecipient = (user: Recipient) => {
    if (user.name === selectedRecipient?.name) {
      setSelectedRecipient(null);
    } else {
      setSelectedRecipient(user);
    }
  };
  const renderShowToggleBtn = () => {
    if (
      recipients &&
      visibleUsers &&
      isDefaultAllUsersInView === UsersInView.NO
    ) {
      return (
        <div
          tabIndex={0}
          onClick={() => setIsShowingAll((prev) => !prev)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault(); // Prevent default scroll behavior for space
              setIsShowingAll((prev) => !prev);
            } else if (event.key === "Tab" && !isShowingAll) {
              event.preventDefault(); // Prevent default Tab behavior
              const firstUserElement = document.querySelector(".user");
              if (firstUserElement) {
                (firstUserElement as HTMLDivElement).focus(); // Shift focus to the first .user element
              }
            }
          }}
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
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault(); // Prevent default scroll behavior for space
              handleSelectRecipient(user);
              const amountInput = document.querySelector(".amount-input");
              if (amountInput) {
                (amountInput as HTMLDivElement).focus(); // Shift focus to the first .user element
              }
            }
          }}
          onClick={() => handleSelectRecipient(user)}
          onBlur={(event) => {
            // Check if the blur event is caused by focusing another `user` element
            if (
              !event.relatedTarget ||
              !event.relatedTarget.classList.contains("amount-input")
            ) {
              setSelectedRecipient(null);
            }
          }}
        >
          <LazyImage
            image={{
              alt: user.name,
              src: user.profilePic ?? "",
              className: "user-img rounded-full",
            }}
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
