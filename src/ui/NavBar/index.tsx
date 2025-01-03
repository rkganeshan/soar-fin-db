import React, { lazy, Suspense } from "react";
import { useGlobalContext } from "../../context";
import { useCurrentURL } from "../../hooks";
import { getPageTitleByPathName } from "../../utils";
import LazyImage from "../LazyImage";
import navigationHamburger from "../../assets/navigationHamburger.svg";
import searchSVG from "../../assets/search.svg";
import settingsSVG from "../../assets/settings.svg";
import notificationSVG from "../../assets/notification.svg";
import "./NavBar.scss";

const FlyoutMenu = lazy(() => import("../Flyout"));

interface NavbarProps {
  userImage: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ userImage, onSearch }) => {
  const { isFlyoutOpen, currentUserUpdatedImg, toggleFlyout } =
    useGlobalContext();
  const { pathname } = useCurrentURL();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default scrolling behavior on Space key
      toggleFlyout();

      // Wait for flyout to render, then set focus
      setTimeout(() => {
        const flyoutHeadText =
          document.querySelector<HTMLElement>(".flyout-head-text");
        if (flyoutHeadText) {
          flyoutHeadText.focus();
        }
      }, 0);
    }
  };

  return (
    <>
      <div className="navbar-container p-4 bg-white shadow">
        <div className="navbar-content flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="navbar-left flex items-center justify-between space-x-4">
            <button
              className={`navbar-hamburger p-2 hover:bg-gray-200 ${
                isFlyoutOpen ? "md:hidden" : ""
              }`}
              onClick={toggleFlyout}
              onKeyDown={handleKeyDown}
              aria-label="Toggle navigation menu"
              aria-expanded={isFlyoutOpen}
            >
              <LazyImage
                image={{
                  alt: "Navigation",
                  src: navigationHamburger,
                  className: "h-5 w-5",
                }}
              />
            </button>
            <div
              className={`navbar-title ${
                isFlyoutOpen ? "flyout-open" : ""
              } text-xl font-semibold text-gray-800`}
              aria-live="polite"
              aria-atomic="true"
            >
              {getPageTitleByPathName(pathname)}
            </div>
            <img
              src={currentUserUpdatedImg || userImage}
              alt="User"
              className="navbar-user-image w-10 h-10 rounded-full md:hidden"
              aria-hidden="true"
            />
          </div>
          <div className="navbar-search md:hidden flex justify-center mt-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search for something"
                className="navbar-search-input w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => onSearch(e.target.value)}
                aria-label="Search"
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
                aria-label="Search"
              />
              <div className="navbar-search-icon absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={searchSVG} alt="Search Icon" className="h-5 w-5" />
              </div>
            </div>
            <button
              className="navbar-settings p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Settings"
            >
              <img src={settingsSVG} alt="Settings Icon" />
            </button>
            <button
              className="navbar-notifications p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Notifications"
            >
              <img src={notificationSVG} alt="Notification Icon" />
            </button>
            <LazyImage
              image={{
                alt: "User",
                src: currentUserUpdatedImg || userImage,
                className: "navbar-user-image w-10 h-10 rounded-full",
                transitionDelay: "1s",
              }}
            />
          </div>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <FlyoutMenu isOpen={isFlyoutOpen} onClose={toggleFlyout} />
      </Suspense>
    </>
  );
};

export default Navbar;
