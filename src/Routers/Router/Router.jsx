import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Layout/Home/Home";
import Services from "../../Layout/Services/Services";
import ErrorPage from "../../Layout/ErrorPage/ErrorPage";
import Login from "../../Layout/Login/Login";
import SignUp from "../../Layout/SignUp/SignUp";
import CheckOut from "../../Layout/CheckOut/CheckOut";
import Booking from "../../Layout/Booking/Booking";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
        element: <PrivateRouter><Services></Services></PrivateRouter>,
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
        element: <PrivateRouter><CheckOut /></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <PrivateRouter><Booking></Booking></PrivateRouter>
      }
    ],
  },
]);
export default router;
