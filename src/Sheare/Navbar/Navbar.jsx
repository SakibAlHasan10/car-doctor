import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.svg";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/about`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/services`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/blog`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/contact`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMiniBars3CenterLeft className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <img src={logo} alt="" className="h-14 w-28" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline text-primary">Appointment</Link>
      </div>
    </div>
  );
};

export default Navbar;
