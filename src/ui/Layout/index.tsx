import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Navbar from "../NavBar";
import currentUser from "../../assets/currentUser.svg";
import "../globalStyles.scss";

const Layout = () => {
  const { isFlyoutOpen } = useGlobalContext();

  return (
    <div
      className={`layout-container transition-transform duration-300 ${
        isFlyoutOpen ? "md:ml-64" : ""
      } h-full flex flex-col`}
    >
      <Navbar
        userImage={currentUser}
        onSearch={(query) => {
          console.log("query:", query);
        }}
      />
      <div className="main-content p-4 bg-gray-100 flex-grow">
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
