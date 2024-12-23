import React, { useState } from "react";
import navigationHamburger from "../../assets/navigationHamburger.svg";
import searchSVG from "../../assets/search.svg";
import settingsSVG from "../../assets/settings.svg";
import notificationSVG from "../../assets/notification.svg";
import FlyoutMenu from "../Flyout";

interface NavbarProps {
  userImage: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ userImage, onSearch }) => {
  const [isFlyoutOpen, setFlyoutOpen] = useState(false);

  // TODO : After adding react router, make appropriate changes to title
  const navbarTitle = "Overview";

  const toggleFlyout = () => {
    setFlyoutOpen(!isFlyoutOpen);
  };

  return (
    <>
      <div className="navbar-container p-4 bg-white shadow">
        <div className="navbar-content flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="navbar-left flex items-center justify-between space-x-4">
            <button
              className="navbar-hamburger p-2 hover:bg-gray-200"
              onClick={toggleFlyout}
            >
              <img
                src={navigationHamburger}
                alt="navigation"
                className="h-5 w-5"
              />
            </button>
            <div className="navbar-title text-xl font-semibold text-gray-800">
              {navbarTitle}
            </div>
            <img
              src={userImage}
              alt="User"
              className="navbar-user-image w-10 h-10 rounded-full md:hidden"
            />
          </div>
          <div className="navbar-search md:hidden flex justify-center mt-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search for something"
                className="navbar-search-input w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => onSearch(e.target.value)}
              />
              <div className="navbar-search-icon absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={searchSVG} alt="Search Icon" className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="navbar-right hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for something"
                className="navbar-search-input pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => onSearch(e.target.value)}
              />
              <div className="navbar-search-icon absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={searchSVG} alt="Search Icon" className="h-5 w-5" />
              </div>
            </div>
            <button className="navbar-settings p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <img src={settingsSVG} alt="Settings Icon" />
            </button>
            <button className="navbar-notifications p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <img src={notificationSVG} alt="Notification Icon" />
            </button>
            <img
              src={userImage}
              alt="User"
              className="navbar-user-image w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
      <FlyoutMenu isOpen={isFlyoutOpen} onClose={toggleFlyout} />
    </>
  );
};

export default Navbar;
