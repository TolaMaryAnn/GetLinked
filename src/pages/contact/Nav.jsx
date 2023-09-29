import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };
  return (
    <nav className="px-8 py-6 items-center hidden lg:flex font-custom">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-extrabold text-2xl">
            get<span className="text-[#D434FE]">linked</span>
          </div>
        </div>

        <div className=" space-x-8 text-sm">
          <a href="#" className="text-white px-8 py-2 font-thin">
            Timeline
          </a>
          <a href="#" className="text-white px-8 py-2 font-bold">
            Overview
          </a>
          <a href="#" className="text-white px-8 py-2 font-thin">
            FAQs
          </a>
          <a href="#" className="text-[#903AFF] px-8 py-2 font-bold">
            Contact
          </a>
          <button
            className="bg-[#903AFF] text-white px-8 py-2 rounded-sm"
            style={linearGradientBg}
          >
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
