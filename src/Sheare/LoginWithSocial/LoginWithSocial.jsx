import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
const LoginWithSocial = () => {
  return (
    <div>
      <p className="text-lg font-medium">Or Sign In with</p>
      <div className="flex gap-4 mt-7 mb-10 justify-center">
        <div className="w-12 h-12 p-3 bg-[#F5F5F8] rounded-full">
        <FaFacebookF className="w-full h-full text-blue-600 "/>
        </div>
        <div className="w-12 h-12 p-3 bg-[#F5F5F8] rounded-full">
        <FaLinkedinIn className="w-full h-full text-blue-500 "/>
        </div>
        <div className="w-12 h-12 p-3 bg-[#F5F5F8] text-red-400 rounded-full">
        <FaGoogle className="w-full h-full "/>
        </div>
        
      </div>
      <p className="text-lg font-normal">
        Have an account?{" "}
        <Link to={"/signup"} className="text-primary">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default LoginWithSocial;
