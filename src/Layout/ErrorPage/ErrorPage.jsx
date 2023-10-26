import Navbar from "../../Sheare/Navbar/Navbar";
import error from "../../../src/assets/Frame.png"
const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl px-8 mx-auto">
      <Navbar />
      <div className="w-full mt-10">
        <img src={error} alt="" className="w-[800px] h-[420px] mx-auto" />
      </div>
      </div>
  );
};

export default ErrorPage;
