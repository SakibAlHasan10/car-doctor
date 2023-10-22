import { Outlet } from "react-router-dom";
import Navbar from "../../Sheare/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;