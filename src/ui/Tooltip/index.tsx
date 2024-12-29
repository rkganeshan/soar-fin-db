import React, { ReactNode, useEffect, useState } from "react";
import "./Tooltip.scss";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle tooltip visibility on hover
  const handleMouseEnter = () => {
    if (content) setIsVisible(true);
  };
  const handleMouseLeave = () => setIsVisible(false);

  useEffect(() => {
    if (!content && isVisible) {
      setIsVisible(false);
    }
  }, [content]);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className="tooltip-content">
          {content}
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
