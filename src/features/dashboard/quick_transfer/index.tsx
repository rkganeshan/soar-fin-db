import React, { useState } from "react";
import { scrollStyleClasses } from "../../../constants";
import Person1 from "../../../assets/person-1.png";
import Person2 from "../../../assets/person-2.png";
import Person3 from "../../../assets/person-3.png";
import Person4 from "../../../assets/person-4.png";
import Person5 from "../../../assets/person-5.png";
import SendIcon from "../../../assets/send.png";
import "./QuickTransfer.scss";

interface User {
  name: string;
  role: string;
  profilePic: string;
}

const users: User[] = [
  { name: "Livia Bator", role: "CEO", profilePic: Person1 },
  { name: "Randy Press", role: "Director", profilePic: Person2 },
  { name: "Workman", role: "Designer", profilePic: Person3 },
  { name: "John Doe", role: "Manager", profilePic: Person4 },
  { name: "Jane Smith", role: "Developer", profilePic: Person5 },
];

const QuickTransfer: React.FC = () => {
  const [visibleUsers, setVisibleUsers] = useState<User[]>(users.slice(0, 3));
  const [amount, setAmount] = useState<string>("");

  const handleClickMoreUsers = () => {
    if (visibleUsers.length === 3) {
      setVisibleUsers(users);
    } else {
      setVisibleUsers(users.slice(0, 3));
    }
  };

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
        <div
          className={`users-container flex  
            ${
              visibleUsers.length > 3 ? "overflow-x-auto" : "overflow-x-hidden"
            } ${scrollStyleClasses}}
            `}
        >
          {visibleUsers.map((user, index) => (
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
          ))}
          {users.length > 3 && (
            <div
              onClick={handleClickMoreUsers}
              className={`show-more-btn shadow-md ${
                visibleUsers.length < users.length ? "show-more" : "show-less"
              }`}
            >
              <span className="users-slider arrow">
                {visibleUsers.length < users.length ? ">" : "<"}
              </span>
            </div>
          )}
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
      </div>
    </div>
  );
};

export default QuickTransfer;
