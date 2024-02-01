import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="flex gap-3">
        <div className="nav-bar w-56 hidden sm:block">
          <SideBar />
        </div>
        <div className="main-content px-3 flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
