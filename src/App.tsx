// import { Link } from "react-router-dom";
import "./index.css";
import Books from "./page/Books";
import Cookies from "universal-cookie";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const toggleButton = document.querySelector("[data-te-collapse-init]");
  const targetMenu = document.querySelector("#navbarSupportedContent1");
  const cookies = new Cookies();
  const userInfo = cookies.get("token");
  console.log("userInfo", userInfo);
  // Add a click event listener to the toggle button
  toggleButton?.addEventListener("click", () => {
    // Toggle the 'hidden' class on the target menu to show/hide it
    targetMenu?.classList.toggle("hidden");

    // Toggle the 'aria-expanded' attribute to reflect the current state
    const isMenuHidden = targetMenu?.classList.contains("hidden");
    toggleButton.setAttribute("aria-expanded", isMenuHidden ? "false" : "true");
  });

  return (
    <div>
      <MainLayout>
        <div
          className="bg-[url('https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1532012197267-da84d127e765%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8Mjl8fGxpYnJhcnklMjBvd2x8ZW58MHx8fHwxNjQ3Mjg2OTc0%26ixlib%3Drb-1.2.1%26q%3D90%26w%3D2000%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral')]  w-full h-[550px] object-cover opacity-95"
          style={{
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            padding: "20px",
            color: "#fff",
          }}
        >
          {/* <nav
            className="flex-no-wrap relative flex w-full items-center justify-between bg-[#280c0c] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref
          >
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <div
                className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-te-collapse-item
              >
                <a
                  className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="#"
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                    style={{ height: "15px" }}
                    alt="TE Logo"
                    loading="lazy"
                  />
                </a>

                <ul
                  className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                  data-te-navbar-nav-ref
                >
                  <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      Team
                    </a>
                  </li>
                  <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      Projects
                    </a>
                  </li>
                  <Link to={"/all-books"} className="mb-4 lg:mb-0 lg:pr-2">
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      All Books
                    </a>
                  </Link>

                  {userInfo && (
                    <Link to={"/add-new-book"} className="mb-4 lg:mb-0 lg:pr-2">
                      <a
                        className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                      >
                        Add New
                      </a>
                    </Link>
                  )}

                  <Link to={"/signup"}>
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
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                      <a
                        className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                      >
                        LogOut
                      </a>
                    </li>
                  ) : (
                    <Link to={"/login"}>
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
              </div>

              <div className="relative flex items-center">
                <a
                  className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                >
                  <span className="[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                  </span>
                </a>

                <div className="relative" data-te-dropdown-ref>
                  <a
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    <img
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                      className="rounded-full"
                      style={{ height: "25px", width: "25px" }}
                      alt=""
                      loading="lazy"
                    />
                  </a>

                  <ul
                    className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton2"
                    data-te-dropdown-menu-ref
                  >
                    <li>
                      <a
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="#"
                        data-te-dropdown-item-ref
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="#"
                        data-te-dropdown-item-ref
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="#"
                        data-te-dropdown-item-ref
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav> */}

          <div className="flex justify-center items-center h-full mt-16">
            <div className="text-center">
              <h2 className="text-3xl mb-2 font-bold">
                Welcome to Book Publishing
              </h2>
              <p className="lg:w-[900px]">
                The 501(c)(3) nonprofit Institute for Education, Research, and
                Scholarships (IFERS) conducts scientific and social research as
                well as supports disseminating knowledge around the world to
                empower individuals and freethinkers to change the world for the
                better.
              </p>
            </div>
          </div>
        </div>

        {/* books card  */}
        <h2 className="text-3xl flex justify-center items-center font-bold mt-4">
          Books
        </h2>
        <Books></Books>

        {/* footer  */}
      </MainLayout>
    </div>
  );
}

export default App;
