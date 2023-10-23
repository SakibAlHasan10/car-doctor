import { Outlet } from "react-router-dom";
import Navbar from "../../Sheare/Navbar/Navbar";
import Footer from "../../Sheare/Footer/Footer";

const Root = () => {
    return (
        <div >
            <div className="max-w-6xl mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;