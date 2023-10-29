import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../src/assets/images/login/login.svg";
import LoginWithSocial from "../../Sheare/LoginWithSocial/LoginWithSocial";
import useApi from "../../ContextApi/useApi";
const Login = () => {
  const { signInWithEmail } = useApi();
  const location =useLocation()
  const navigate = useNavigate()
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInWithEmail(email, password)
      .then((res) => {
        navigate(location?.state? location.state : "/")
        res && alert("Your login successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero-content gap-10 flex-col lg:flex-row">
      <div className="flex-1">
        <img src={login} alt="" className="w-[460px] h-[520px]" />
      </div>
      <div className="hero w-full flex-1">
        <div className="w-full">
          <div className="card flex-shrink-0 w-full max-w-md border bg-base-100">
            <div className="text-center ">
              <h1 className="text-3xl font-bold mt-8">Login now!</h1>
            </div>
            <form onSubmit={handleLoginForm} className="pb-7 card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mb-10">
              <LoginWithSocial />
              <p className="text-lg font-normal">
                Have an account?{" "}
                <Link to={"/signup"} className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
