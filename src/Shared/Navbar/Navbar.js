import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthProvider);
  const menuBar = (
    <>
      <li>
        <Link className=" hover:text-green-500" to="/home">
          HOME
        </Link>
      </li>
      <li className=" hover:text-green-500" tabIndex={0}>
        <a>MOVIE</a>
        <ul className="p-2 bg-green-500 text-white border">
          <li className="hover:bg-white hover:text-green-500">
            <a>ALL MOVIES</a>
          </li>
          <li className="hover:bg-white hover:text-green-500">
            <a>MOVIE DETAILS</a>
          </li>
        </ul>
      </li>
      <li className=" hover:text-green-500">
        <Link to="/shows">TV SHOWS</Link>
      </li>

      <li className=" hover:text-green-500">
        <Link to="/pricing">PRICING</Link>
      </li>
      <li className=" hover:text-green-500">
        <Link to="/blog">BLOG</Link>
      </li>
      <li className=" hover:text-green-500">
        <Link to="/contact">CONTACT</Link>
      </li>
      <li>
        <div>
          <input
            className=" rounded-sm border-green-500 font-semibold text-white w-32 p-1 border"
            type="search"
            placeholder="search"
            id="search"
            name="search"
          />
        </div>
      </li>
    </>
  );
  const handelLogOut = () => {
    logout()
      .then(() => {
        toast.success("Logout successfully!");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      className="navbar"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500 text-white font-bold rounded-box  border-2 "
          >
            {menuBar}
          </ul>
        </div>
        <div className="flex items-center justify-center font-extrabold font-mono text-xl md:text-2xl text-green-500">
          <Link to="/" className=" ">
            <BiCameraMovie className="text-3xl"></BiCameraMovie>
          </Link>
          <Link to="/">CINEMA</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold">{menuBar}</ul>
      </div>
      <div className="navbar-end">
        <>
          {user?.email ? (
            <Link
              to="/"
              onClick={handelLogOut}
              className=" py-1 md:py-2 px-2 md:px-3 bg-green-500 hover:bg-green-700 text-white font-extrabold font-mono rounded-sm"
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              to="/login"
              className=" py-1 md:py-2 px-2 md:px-3 bg-green-500 hover:bg-green-700 text-white font-extrabold font-mono rounded-sm"
            >
              LOGIN
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
