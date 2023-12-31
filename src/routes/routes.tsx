import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../page/NotFound";
import Home from "../page/Home";
import AllBooks from "../page/AllBooks";
import AddNewBook from "../page/AddNewBook";
import BookDetails from "../page/bookDetails";
import SingUp from "../page/singUp";
import Login from "../page/login";
import Logout from "../page/logout";
import WishList from "../page/wishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <App />,
      },

      // {
      //   path: '/product-details/:id',
      //   element: <ProductDetails />,
      // },
      // {
      //   path: '/checkout',
      //   element: <Checkout />,
      // },
    ],
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
  {
    path: "/add-new-book",
    element: <AddNewBook />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
