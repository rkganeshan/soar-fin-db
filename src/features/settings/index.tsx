import React from "react";
import { useSettingsContext } from "../../context/settingsContext";
import Tabs from "../../ui/Tabs";
import EditProfile from "./edit_profile";
import Preferences from "./preferences";
import Security from "./security";
import { SettingsTab } from "../../types/enums";
import { settingsTabs } from "../../constants/settingsTabs";
import "./Settings.scss";

const Settings: React.FC = () => {
  const { activeTab } = useSettingsContext();

  const getTransitionClass = (currentTab: SettingsTab, tab: SettingsTab) => {
    if (currentTab === tab) return "active";
    return currentTab < tab ? "exit-right" : "exit-left";
  };

  return (
    <div className="settings-page bg-white h-auto rounded-2xl shadow px-8 py-4 pb-8 mt-2">
      <Tabs />
      <div className="tab-content-wrapper">
        {settingsTabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-content ${getTransitionClass(activeTab, tab.key)}`}
          >
            {activeTab === tab.key && (
              <>
                {tab.key === SettingsTab.EditProfile && <EditProfile />}
                {tab.key === SettingsTab.Preferences && <Preferences />}
                {tab.key === SettingsTab.Security && <Security />}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
