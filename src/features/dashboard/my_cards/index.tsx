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

  const renderCardsShimmer = () => (
    <>
      <ShimmerCard ref={ref} />
      <ShimmerCard />
    </>
  );

  const renderCards = () => (
    <>
      {cards?.map((card, index) => (
        <Card key={index} {...card} {...(index === 0 && { ref })} />
      ))}
    </>
  );

  return (
    <div className="my-cards">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold" style={{ color: "#343C6A" }}>
          My Cards
        </h2>
        {isSuccessDashboard && (
          <div
            className="see-more-less-btn cursor-pointer font-semibold"
            onClick={handleSeeAllClick}
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
      >
        {isLoadingDashboard ? renderCardsShimmer() : renderCards()}
      </div>
    </div>
  );
});

export default MyCards;
