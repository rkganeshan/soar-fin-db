import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { useCurrentURL } from "../../hooks";
import Navbar from "../NavBar";
import { routerPath } from "../../constants";
import currentUser from "../../assets/currentUser.svg";
import "../globalStyles.scss";

const Layout = () => {
  const { isFlyoutOpen } = useGlobalContext();
  const { pathname } = useCurrentURL();

  return (
    <div
      className={`layout-container transition-transform duration-300 ${
        isFlyoutOpen ? "md:ml-64" : ""
      } h-full flex flex-col`}
    >
      <Navbar userImage={currentUser} onSearch={(_) => {}} />
      <div
        className={`main-content p-4 ${
          pathname == routerPath.SETTINGS.ROUTE
            ? "bg-gray-100"
            : "md:bg-gray-100"
        } flex-grow`}
      >
        <div
          className={`content-wrapper ${isFlyoutOpen ? "ml-4" : "lg:ml-12"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
