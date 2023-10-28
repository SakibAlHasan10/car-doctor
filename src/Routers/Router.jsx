import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Services from "../Layout/Services/Services";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/SignUp/SignUp";
import CheckOut from "../Layout/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services/:id",
        element: <Services></Services>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/check-out/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
