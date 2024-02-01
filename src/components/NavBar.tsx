import logo from "../assets/IGDb_logo.png";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <>
      <div className="app-navbar navbar justify-between bg-base-200 px-3">
        <div className="drawer inline-block sm:hidden w-auto">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-sm drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <a>
                  <label htmlFor="my-drawer">Sidebar Item 1</label>
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="my-drawer">Sidebar Item 2</label>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <Link to="/">
            <div className="flex items-center app-logo">
              <img src={logo} />
              <h1 className="hidden md:block ml-3 text-3xl font-bold">
                Internet Game Database
              </h1>
            </div>
          </Link>
        </div>
        <div className="">
          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default NavBar;
