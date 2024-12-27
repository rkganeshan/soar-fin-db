import { useEffect, useRef } from "react";
import "./Tabs.scss";

interface Tab {
  key: string;
  label: string;
}

interface TabsProps<T extends string> {
  tabs: Tab[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

const Tabs = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: TabsProps<T>) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (tabsRef.current) {
      // Calculate the scroll position to center the active tab
      const activeTabElement = tabsRef.current.querySelector(
        `.tab[data-active="${activeTab}"]`
      );

      if (activeTabElement) {
        const tabRect = activeTabElement.getBoundingClientRect();
        const containerRect = tabsRef.current.getBoundingClientRect();

        const scrollLeft =
          tabRect.left -
          containerRect.left +
          tabRect.width / 2 -
          containerRect.width / 2;

        tabsRef.current.scrollLeft = scrollLeft;
      }
    }
  }, [activeTab]);
  return (
    <div
      ref={tabsRef}
      className="tabs flex justify-start mb-6 overflow-x-auto whitespace-nowrap"
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          data-active={tab.key}
          className={`tab mr-4 p-2 font-medium ${
            activeTab === tab.key ? "active border-b-2 border-black" : ""
          }`}
          onClick={() => onTabChange(tab.key as T)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
