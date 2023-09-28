import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full h-full px-8 py-6  border-b border-gray-50 ">
        <div className="text-white font-extrabold text-2xl">
          get<span className="text-[#D434FE]">linked</span>
        </div>
        <div style={{ fontFamily: "regular" }}>
          <ul className="hidden md:flex">
            <li className="text-white px-8 py-2 font-thin hover:underline hover:text-[#D434FE]">
              <a href="/#timeline">Timeline</a>
            </li>
            <li className="text-white px-8 py-2 font-thin hover:underline hover:text-[#D434FE]">
              <a href="/#overview">Overview</a>
            </li>
            <li className="text-white px-8 py-2 font-thin hover:underline hover:text-[#D434FE]">
              <a href="/#fqa">FQAs</a>
            </li>
            <li className="text-white px-8 py-2 font-thin hover:underline hover:text-[#D434FE]">
              <Link to="/contact">Contact</Link>
            </li>

            <button
              className="bg-[#903AFF] text-white px-8 py-2 rounded-sm transform transition-transform hover:scale-110"
              style={linearGradientBg}
            >
              <Link to="/register">Register</Link>
            </button>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden text-white">
            <RiMenu4Fill size={28} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#150E28]  p-10 ease-in duration-500 z-50"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white border border-[#903AFF] ml-40 "
              >
                <FaTimes />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col text-white font-[regular]]">
            <ul>
              <a href="/#timeline">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Timeline
                </li>
              </a>
              <a href="/#overview">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Overview
                </li>
              </a>
              <a href="/#fqa">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  FQAs
                </li>
              </a>
              <Link to="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>

              <Link to="/register">
                <button
                  onClick={() => setNav(false)}
                  className="py-4 text-sm bg-[#903AFF] text-white px-8 py-2 rounded-sm transform transition-transform hover:scale-110"
                  style={linearGradientBg}
                >
                  Register
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
