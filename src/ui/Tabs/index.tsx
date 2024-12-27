import { useEffect, useRef } from "react";
import { useSettingsContext } from "../../context/settingsContext";
import { settingsTabs } from "../../constants/settingsTabs";
import "./Tabs.scss";

const Tabs = () => {
  const { activeTab, setActiveTab } = useSettingsContext();
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
      {settingsTabs.map((tab) => (
        <button
          key={tab.key}
          data-active={tab.key}
          className={`tab mr-4 p-2 font-medium ${
            activeTab === tab.key ? "active border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
