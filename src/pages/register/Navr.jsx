import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navr = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };

  return (
    <nav className="px-8 py-4 items-center  hidden lg:flex font-custom">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-extrabold text-2xl">
            get<span className="text-[#D434FE]">linked</span>
          </div>
        </div>

        <div className="lg:flex space-x-8 text-sm">
          <a href="#" className="text-white px-8 py-2 font-thin">
            Timeline
          </a>
          <a href="#" className="text-white px-8 py-2 font-bold">
            Overview
          </a>
          <a href="#" className="text-white px-8 py-2 font-thin">
            FAQs
          </a>
          <Link to="/contact" className="text-[#903AFF] px-8 py-2 font-bold">
            Contact
          </Link>
          <button className="border border-[#903AFF] text-white px-8 py-2 rounded-sm">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navr;
