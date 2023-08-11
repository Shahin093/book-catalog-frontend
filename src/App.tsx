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
          className="bg-[url('https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1532012197267-da84d127e765%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8Mjl8fGxpYnJhcnklMjBvd2x8ZW58MHx8fHwxNjQ3Mjg2OTc0%26ixlib%3Drb-1.2.1%26q%3D90%26w%3D2000%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral')]  w-full h-[550px] object-cover"
          style={{
            backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            padding: "20px",
            color: "#fff",
          }}
        >
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
