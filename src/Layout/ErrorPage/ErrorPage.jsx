import Navbar from "../../Sheare/Navbar/Navbar";
import error from "../../../public/frame.png"
const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl px-8 mx-auto">
      <Navbar />
      <div className="w-full">
        <img src={error} alt="" className="w-[800px] mx-auto" />
      </div>
      </div>
  );
};

export default ErrorPage;
