import { forwardRef, LegacyRef } from "react";
import ChipLight from "../../assets/card-chip-light.png";
import ChipDark from "../../assets/card-chip-dark.png";
import CardLogo from "../../assets/card-logo.svg?react";
import "./Card.scss";

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: "dark" | "light";
}

const Card = forwardRef<HTMLElement, CardProps>(
  ({ balance, cardHolder, validThru, cardNumber, theme }, ref) => {
    const cardClass =
      theme === "dark"
        ? "bg-gradient-to-r from-gray-800 to-black text-white"
        : "bg-white text-black";
    const balanceTextClass =
      theme === "dark" ? "text-gray-300" : "text-gray-600";

    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={`card rounded-2xl shadow ${cardClass} w-full`}
        role="group"
        aria-label="Credit Card"
      >
        <div className="card-header p-4 flex justify-between items-start">
          <div className={`card-balance`}>
            <div
              className={`text-sm ${balanceTextClass}`}
              style={{ fontSize: "12px" }}
              aria-label="Balance Label"
            >
              Balance
            </div>
            <div
              className="font-bold"
              style={{ fontSize: "20px" }}
              aria-label="Balance"
            >
              {balance}
            </div>
          </div>
          <img
            src={theme === "dark" ? ChipLight : ChipDark}
            style={{
              width: "34.7px",
              height: "34.7px",
            }}
            alt="Card Chip"
          />
        </div>
        <div className="card-holder-valid-thru p-4 flex gap-16 justify-start text-sm mb-2">
          <div className="card-holder">
            <div
              className={balanceTextClass}
              style={{ fontSize: "12px" }}
              aria-label="Card Holder Label"
            >
              CARD HOLDER
            </div>
            <div style={{ fontSize: "18px" }} aria-label="Card Holder Name">
              {cardHolder}
            </div>
          </div>
          <div className="valid-thru">
            <div
              className={balanceTextClass}
              style={{ fontSize: "12px" }}
              aria-label="Valid Thru Label"
            >
              VALID THRU
            </div>
            <div style={{ fontSize: "18px" }} aria-label="Valid Thru Date">
              {validThru}
            </div>
          </div>
        </div>
        <div
          className={`p-4 card-number-section border-t pt-4 flex justify-between items-center rounded-b-2xl ${
            theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : ""
          }`}
          style={
            theme === "dark"
              ? { borderTop: "1px solid rgba(255, 255, 255, 0.2)" }
              : {}
          }
        >
          <div
            className="card-number text-lg font-medium"
            aria-label="Card Number"
          >
            {cardNumber}
          </div>
          <div className="toggle-icon" aria-label="Card Logo">
            <CardLogo
              style={{
                width: "44px",
                height: "30px",
                fill: theme === "dark" ? "white" : "#9199AF",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
