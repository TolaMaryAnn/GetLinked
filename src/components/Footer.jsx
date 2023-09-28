import React from "react";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import { HiPhone } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";
const Footer = () => {
  return (
    <div>
      {/* web and tablet screen */}
      <div className="hidden md:block">
        <footer className="bg-[#100B20] text-white px-32 py-12">
          <div className="container mx-auto flex justify-between ">
            <div className="w-1/2">
              <div className="text-white font-extrabold text-2xl">
                get<span className="text-[#D434FE]">linked</span>
              </div>
              <div
                className="text-base tracking-wider font-thin mt-4"
                style={{ fontFamily: "regular" }}
              >
                Getlinked Tech Hackathon is a technology innovation program{" "}
                <br />
                established by a group of organizations with the aim of
                showcasing <br />
                young and talented individuals in the field of technology <br />
              </div>

              <div
                className="text-base tracking-wider font-bold mt-16"
                style={{ fontFamily: "regular" }}
              >
                Terms of Use/Privacy Policy
              </div>
            </div>
            <div className="w-1/7" style={{ fontFamily: "regular" }}>
              <div className="text-lg font-bold mb-4 text-[#D434FE]">
                Useful Links
              </div>
              <ul>
                <li>
                  <a href="/#overview">Overview</a>
                </li>
                <li>
                  <a href="/#timeline">Timeline</a>
                </li>
                <li>
                  <a href="/#fqa">FAQs</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </ul>
              <div className="flex items-center mt-12">
                <div className="flex-1 text-right pr-4 text-[#D434FE] text-base font-bold">
                  Follow us
                </div>
                <div className="space-x-2">
                  <img
                    src={insta}
                    alt="Instagram"
                    className="inline-block w-6 h-6"
                  />
                  <img src={x} alt="X" className="inline-block w-4 h-4" />
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="inline-block w-4 h-4"
                  />
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="inline-block w-6 h-6"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5" style={{ fontFamily: "regular" }}>
              <div className="text-lg font-semibold mb-4 text-[#D434FE]">
                Contact us
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="mr-2">
                    <HiPhone />
                  </div>
                  <div>+234 6707653444</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-2">
                    <FaLocationDot />
                  </div>
                  <div>
                    27, Alara Street
                    <br />
                    Yaba 100012
                    <br />
                    Lagos State
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-4 text-center text-white text-sm mt-12 tracking-wide">
            <p>All rights reserved. © getlinked Ltd.</p>
          </div>
        </footer>
        <img
          src={star}
          alt="star"
          className="absolute -mt-48    w-4 h-4"
          style={{ marginLeft: "72rem" }}
        />

        <img
          src={starr}
          alt="star"
          className="absolute -mt-96   w-4 h-4"
          style={{ marginLeft: "35rem" }}
        />

        <img
          src={pstar}
          alt="Pstar"
          className="absolute ml-52 -mt-32  w-4 h-4"
        />
      </div>
      {/* mobile screen  */}
      <div className="md:hidden bg-[#100B20] ">
        <footer className="text-white px-4 ">
          <div className="text-white font-extrabold text-2xl">
            get<span className="text-[#D434FE]">linked</span>
          </div>
          <div
            className="text-base tracking-wider font-thin mt-4"
            style={{ fontFamily: "regular" }}
          >
            Getlinked Tech Hackathon is a technology <br /> innovation program
            established by a group <br /> of organizations with the aim of
            showcasing
            <br />
            young and talented individuals in the field of technology <br />
          </div>

          <div
            className="text-base tracking-wider font-bold mt-8"
            style={{ fontFamily: "regular" }}
          >
            Terms of Use/Privacy Policy
          </div>

          <div className="text-lg font-bold mb-4 mt-8 text-[#D434FE]">
            Useful Links
          </div>
          <ul>
                <li>
                  <a href="/#overview">Overview</a>
                </li>
                <li>
                  <a href="/#timeline">Timeline</a>
                </li>
                <li>
                  <a href="/#fqa">FAQs</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </ul>
          <div className="flex mt-8">
            <div className="text-right pr-4 text-[#D434FE] text-base font-bold">
              Follow us
            </div>
            <div className="space-x-2">
              <img
                src={insta}
                alt="Instagram"
                className="inline-block w-6 h-6"
              />
              <img src={x} alt="X" className="inline-block w-4 h-4" />
              <img
                src={facebook}
                alt="Facebook"
                className="inline-block w-4 h-4"
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                className="inline-block w-6 h-6"
              />
            </div>
          </div>

          <div className="text-lg font-semibold mb-4 text-[#D434FE] mt-8">
            Contact us
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <HiPhone />
              </div>
              <div>+234 6707653444</div>
            </div>

            <div className="flex items-center">
              <div className="mr-2">
                <FaLocationDot />
              </div>
              <div>
                27, Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </div>
            </div>
          </div>
          <div className=" py-8 text-center text-white text-sm mt-8  tracking-wide">
            <p>All rights reserved. © getlinked Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
