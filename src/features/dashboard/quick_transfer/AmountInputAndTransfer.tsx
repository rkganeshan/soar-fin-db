import { SetStateAction, useState } from "react";
import { useToast } from "../../../context";
import Tooltip from "../../../ui/Tooltip";
import { ToastType } from "../../../types/enums";
import { Recipient } from "../../../types/Recipient";
import SendIcon from "../../../assets/send.png";

interface AmountInputAndTransferProps {
  recipient: Recipient | null;
  setSelectedRecipient: React.Dispatch<SetStateAction<Recipient | null>>;
}

const AmountInputAndTransfer = ({
  recipient,
  setSelectedRecipient,
}: AmountInputAndTransferProps) => {
  const [amount, setAmount] = useState<string>("");
  const [helperText, setHelperText] = useState<string>("");
  const [fakeTransferring, setFakeTransferring] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers with decimals
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value)) {
      setAmount(value);
      setHelperText("");
    } else {
      setHelperText("Please enter a valid amount, numbers only.");
    }
  };

  const handleBlur = () => {
    setHelperText("");
  };

  const handleSend = () => {
    setFakeTransferring(true);
    setTimeout(() => {
      setFakeTransferring(false);
      setAmount("");
      setSelectedRecipient(null);
      showToast({
        message: `$${amount} sent to ${recipient?.name}.`,
        type: ToastType.Success,
      });
    }, 2000);
  };

  const isSendBtnDisabled = !(recipient && amount) || fakeTransferring;

  const tooltipText = (() => {
    if (!recipient && !amount) return "Select user and enter amount";
    if (!recipient) return "Select a user";
    if (!amount) return "Enter the amount";
    return "";
  })();

  return (
    <>
      <div
        className={`transfer-section mt-8 flex items-center space-x-4`}
        aria-live="polite"
      >
        <span className="write-amount" aria-label="Write Amount">
          Write Amount
        </span>
        <div className="input-container">
          <input
            type="text"
            placeholder="525.50"
            value={amount}
            onChange={handleAmountChange}
            onBlur={handleBlur}
            className="amount-input"
            aria-label="Amount Input"
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={isSendBtnDisabled}
            aria-label="Send Button"
          >
            <Tooltip content={tooltipText}>
              <span className="flex">
                {fakeTransferring ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send&nbsp;
                    <img
                      src={SendIcon}
                      style={{
                        width: "26px",
                        height: "22.6px",
                      }}
                      alt="Send Icon"
                    />
                  </>
                )}
              </span>
            </Tooltip>
          </button>
        </div>
      </div>
      {helperText && (
        <div
          className="text-red-500 text-sm mt-2 text-left w-full"
          aria-live="assertive"
        >
          {helperText}
        </div>
      )}
    </>
  );
};

export default AmountInputAndTransfer;
