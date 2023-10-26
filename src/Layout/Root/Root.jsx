import { Outlet } from "react-router-dom";
import Navbar from "../../Sheare/Navbar/Navbar";
import Footer from "../../Sheare/Footer/Footer";
import { MdSunny, MdDarkMode } from "react-icons/md";
import useApi from "../../ContextApi/useApi";
const Root = () => {
  const { theme, setTheme } = useApi();
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="w-full">
      <div data-theme={`${theme ? "light" : "dark"}`}>
        <div className="max-w-6xl mx-auto px-5">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <div
            className={` w-10 h-10 rounded-md fixed top-1/2 border ${
              theme && "border-black"
            }  right-4`}
          >
            <span onClick={handleTheme} className=" cursor-pointer">
              {theme ? (
                <MdDarkMode className="w-8 h-8 mx-auto mt-1" />
              ) : (
                <MdSunny className="w-8 h-8 mx-auto mt-1" />
              )}
            </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
