import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Services from "../Layout/Services/Services";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/services',
                element:<Services></Services>
            }
        ]
    }
])
export default router