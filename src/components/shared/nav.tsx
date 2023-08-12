import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import LogoutModal from "./logoutModal";
import { decodeToken } from "../../lib/utils";
import { IDecodedToken } from "../../types/globalTypes";

const Nav = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const userInfo = cookies.get("token");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // Decoding the JWT token
  const user = decodeToken() as IDecodedToken | null;
  const logout = () => {
    cookies.remove("token", { path: "/" });
    navigate("/login");
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <header className="sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
        <Link
          className={`w-3/12 font-bold text-2xl ${
            isMobileMenuOpen && "hidden"
          }  lg:block md:block`}
          to={"/"}
        >
          <h1>BooK Catalog</h1>
        </Link>

        {/* navigation */}
        <nav className="nav font-semibold text-lg hidden md:block ">
          <ul className="flex items-center">
            <Link
              to={"/all-books"}
              className="mb-4 lg:mb-0 lg:pr-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
            >
              <a
                className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
              >
                All Books
              </a>
            </Link>

            {userInfo && (
              <Link
                to={"/add-new-book"}
                className="mb-4 lg:mb-0 lg:pr-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
              >
                <a
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Add New
                </a>
              </Link>
            )}
            {userInfo && (
              <Link
                to={"/wishlist"}
                className="mb-4 lg:mb-0 lg:pr-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
              >
                <a
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  WishList
                </a>
              </Link>
            )}

            <Link
              to={"/signup"}
              className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Sign Up
                </a>
              </li>
            </Link>

            {userInfo ? (
              <button
                className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
                onClick={handleOpenModal}
              >
                <li>
                  <a className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                    LogOut
                  </a>
                </li>
              </button>
            ) : (
              <Link
                to={"/login"}
                className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Sign In
                  </a>
                </li>
              </Link>
            )}
          </ul>
        </nav>

        {/* Mobile navigation */}
        {/* Mobile navigation */}
        <nav className="nav font-semibold text-lg md:hidden">
          <button
            className="text-green-500 hover:text-green-600 focus:outline-none flex justify-end"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Mobile menu content */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-center justify-center">
              <Link
                to={"/all-books"}
                className="mb-4 lg:mb-0 lg:pr-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
              >
                <a
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  All Books
                </a>
              </Link>

              {userInfo && (
                <Link
                  to={"/add-new-book"}
                  className="mb-4 lg:mb-0 lg:pr-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
                >
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Add New
                  </a>
                </Link>
              )}

              <Link
                to={"/signup"}
                className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Sign Up
                  </a>
                </li>
              </Link>

              {userInfo ? (
                <button
                  className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
                  onClick={() => logout()}
                >
                  <li
                    className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
                    data-te-nav-item-ref
                  >
                    <a className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                      LogOut
                    </a>
                  </li>
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
                >
                  <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      Sign In
                    </a>
                  </li>
                </Link>
              )}
            </ul>
          )}
        </nav>

        {/* buttons */}
        <div className="w-3/12  justify-end hidden md:block lg:block">
          {/* <a href="">
            <svg
              className="h-8 p-1 hover:text-green-500 duration-200"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              //   className="svg-inline--fa fa-search fa-w-16 fa-9x"
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                className=""
              ></path>
            </svg>
          </a> */}
          <a href="">
            <svg
              className="h-8 p-1 hover:text-green-500 duration-200"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="shopping-cart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              //   className="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
            >
              <path
                fill="currentColor"
                d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </header>

      {/* logout modal    */}
      <LogoutModal
        id={user?.userId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></LogoutModal>
    </div>
  );
};

export default Nav;
