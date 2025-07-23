import React, { createRef } from "react";
import useFetch from "../Utils/useFetch";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { user, exist } = useFetch();

  const location = useLocation();
  // load the data
  if (exist === null)
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl font-semibold text-gray-600">
        Checking authentication...
      </div>
    );

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/app/logout", null, {
        withCredentials: true,
      });

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full h-[8vh] lg:h-[10vh] shadow-sm flex items-center justify-between text-[#FFF9E5] bg-[#004030]">
      {/* options */}
      <ul className="w-[60%] lg:w-[40%] lg:text-xl h-full flex justify-around sm:justify-center sm:gap-20 items-center font-bold text-sm">
        <li
          className={`py-2 ${
            location.pathname === "/dashboard" ? "border-b-2 border-white" : ""
          }`}
        >
          <Link to={"/dashboard"}>LoginLogs</Link>
        </li>
        <li
          className={`py-2 ${
            location.pathname === "/adminDashboard"
              ? "border-b-2 border-white"
              : ""
          }`}
        >
          <Link to={"/adminDashboard"}>UserLogs</Link>
        </li>
        <li onClick={logout} className="text-red-600">
          {" "}
          LogOut
        </li>
      </ul>

      {/* profile */}
      <div className="flex justify-center items-center lg:w-[20%]">
        <div className="flex gap-1 items-center justify-center  rounded-2xl px-2 py-1  lg:rounded-full bg-[#FFF9E5]">
          <div className="h-7 w-7 lg:h-10 lg:w-10 rounded-full overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://picsum.photos/200/300"
              alt="pfp"
            />
          </div>
          <p className="text-sm lg:text-xl font-bold text-[#004030]">
            {user.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
