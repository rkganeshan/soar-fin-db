import { forwardRef, useRef, useState } from "react";
import { useDashboardContext } from "../../../context/dashboardContext";
import Card from "../../../ui/Card";
import ShimmerCard from "../../../ui/Card/ShimmerCard";
import { scrollStyleClasses } from "../../../constants";
import "./MyCards.scss";

const MyCards = forwardRef<HTMLElement>((_, ref) => {
  const { isLoadingDashboard, isSuccessDashboard, cards } =
    useDashboardContext();
  const [showScroll, setShowScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (element: HTMLElement, to: number, duration: number) => {
    if (!element) return;

    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
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
      smoothScroll(containerRef.current, 100, 500);
    } else {
      smoothScroll(containerRef.current, 0, 500);
    }

    setShowScroll((prev) => !prev);
  };

  const renderCardsShimmer = () => (
    <>
      <ShimmerCard ref={ref} aria-label="Loading card" />
      <ShimmerCard aria-label="Loading card" />
    </>
  );

  const renderCards = () => (
    <>
      {cards?.map((card, index) => (
        <Card
          key={index}
          {...card}
          {...(index === 0 && { ref })}
          aria-label={`Card ${index + 1}`}
        />
      ))}
    </>
  );

  return (
    <div className="my-cards" aria-live="polite">
      <div className="flex justify-between items-center mb-2">
        <h2
          className="text-lg font-semibold"
          style={{ color: "#343C6A" }}
          aria-label="My Cards Heading"
        >
          My Cards
        </h2>
        {isSuccessDashboard && (
          <div
            className="see-more-less-btn cursor-pointer font-semibold"
            onClick={handleSeeAllClick}
            aria-label={showScroll ? "See Less Cards" : "See All Cards"}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleSeeAllClick();
              }
            }}
            tabIndex={0}
          >
            {showScroll ? "See Less" : "See All"}
          </div>
        )}
      </div>
      <div
        ref={containerRef}
        className={`cards-container flex pt-2 space-x-4 ${
          showScroll ? "overflow-x-auto" : "overflow-x-hidden"
        } ${scrollStyleClasses}`}
        aria-live="polite"
        aria-label="Cards Container"
      >
        {isLoadingDashboard ? renderCardsShimmer() : renderCards()}
      </div>
    </div>
  );
});

export default MyCards;
