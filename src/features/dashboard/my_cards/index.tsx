import { forwardRef, useRef, useState } from "react";
import Card from "../../../ui/Card";
import { scrollStyleClasses } from "../../../constants";

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: "dark" | "light";
}

const MyCards = forwardRef<HTMLElement>((_, ref) => {
  const [showScroll, setShowScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards: CardProps[] = [
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      theme: "dark",
    },
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      theme: "light",
    },
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      theme: "dark",
    },
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      theme: "light",
    },
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      theme: "dark",
    },
  ];

  const smoothScroll = (element: HTMLElement, to: number, duration: number) => {
    if (!element) return;

    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't exceed 1
      element.scrollLeft = start + change * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    requestAnimationFrame(animateScroll);
  };

  const handleSeeAllClick = () => {
    if (!containerRef.current) return;

    if (!showScroll) {
      // Scroll a bit to indicate more content
      smoothScroll(containerRef.current, 100, 500); // Scroll 100px over 500ms
    } else {
      // Scroll back to the start
      smoothScroll(containerRef.current, 0, 500); // Scroll to 0px over 500ms
    }

    setShowScroll((prev) => !prev);
  };

  return (
    <div className="my-cards">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold" style={{ color: "#343C6A" }}>
          My Cards
        </h2>
        <div
          className="text-blue-600 cursor-pointer font-semibold"
          onClick={handleSeeAllClick}
          style={{ color: "#343C6A" }}
        >
          {showScroll ? "See Less" : "See All"}
        </div>
      </div>
      <div
        ref={containerRef}
        className={`cards-container flex pt-2 space-x-4 ${
          showScroll ? "overflow-x-auto" : "overflow-x-hidden"
        } ${scrollStyleClasses}`}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} {...(index === 0 && { ref })} />
        ))}
      </div>
    </div>
  );
});

export default MyCards;
