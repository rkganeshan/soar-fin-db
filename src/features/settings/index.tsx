import React, { useState } from "react";
import Tabs from "../../ui/Tabs";
import EditProfile from "./edit_profile";
import Preferences from "./preferences";
import Security from "./security";
import { SettingsTab } from "../../types/enums";
import "./Settings.scss";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>(
    SettingsTab.EditProfile
  );

  const tabs = [
    { key: SettingsTab.EditProfile, label: "Edit Profile" },
    { key: SettingsTab.Preferences, label: "Preferences" },
    { key: SettingsTab.Security, label: "Security" },
  ];

  const handleTabChange = (tab: SettingsTab) => {
    setActiveTab(tab);
  };

  const getTransitionClass = (currentTab: SettingsTab, tab: SettingsTab) => {
    if (currentTab === tab) return "active";
    return currentTab < tab ? "exit-right" : "exit-left";
  };

  return (
    <div className="settings-page bg-white h-auto rounded-2xl shadow px-8 py-4 pb-8 mt-2">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="tab-content-wrapper">
        {tabs.map((tab) => (
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
