import { useState } from "react";
import SendIcon from "../../../assets/send.png";

const AmountInputAndTransfer = () => {
  const [amount, setAmount] = useState<string>("");

  return (
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
  );
};

export default AmountInputAndTransfer;
