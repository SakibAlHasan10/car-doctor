import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Services from "../Layout/Services/Services";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/SignUp/SignUp";

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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ],
  },
]);
export default router;
