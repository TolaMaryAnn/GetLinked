import React from "react";

import idea from "../assets/idea.png";
import star from "../assets/star.png";
import pstar from "../assets/pstar.png";
import Lottie from "lottie-react";
import arrowAnimation from "../assets/lottie/arrow.json";

const Introduction = () => {
  return (
    <div
      className="border-b border-gray-50  shadow-[#D434FE] shadow-lg"
      id="overview"
    >
      {/* web and tablet screen */}
      <div className="py-12 relative  hidden md:block">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-24 mt-12">
            <img src={idea} alt="Idea" />
          </div>
          <div className="mt-48 text-white">
            <div className="text-3xl font-extrabold tracking-wider">
              Introduction to getlinked <br />
              <span className="text-[#D434FE]">tech Hackathon 1.0</span>
            </div>
            <div
              className="mt-4 text-base font-thin tracking-wide"
              style={{ fontFamily: "regular" }}
            >
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as <br />
              clear as day: to shape the future. Whether you're a coding genius,
              a <br />
              design maverick, or a concept wizard, you'll have the chance to
              transform <br />
              your ideas into reality. Solving real-world problems, pushing the
              boundaries <br />
              of technology, and creating solutions that can change the world,
              <br />
              that's what we're all about!
            </div>
          </div>
        </div>
        <div
          className="text-center absolute inset-0 flex items-center justify-center -ml-48"
          style={{ transform: "scale(0.5)", marginTop: "30rem" }}
        >
          <Lottie animationData={arrowAnimation} width={30} height={30} />
        </div>

        <img
          src={pstar}
          alt="Pstar"
          className="absolute -mt-72 ml-8   w-8 h-8"
        />

        <img
          src={pstar}
          alt="Pstar"
          className="absolute  -mt-80 w-8 h-8"
          style={{ marginLeft: "75rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="px-6 mt-4">
          <img src={idea} alt="Idea" />
        </div>
        <div
          className="text-center inset-0 flex items-center justify-center -mt-4"
          style={{ transform: "scale(0.3)" }}
        >
          <Lottie animationData={arrowAnimation} width={10} height={10} />
        </div>
        <div className="mt-4 px-4 text-center  text-white">
          <div className="text-2xl font-extrabold ">
            Introduction to getlinked <br />
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </div>
          <div
            className="mt-4 text-base font-thin break-words mb-14"
            style={{ fontFamily: "regular" }}
          >
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </div>
        </div>
        <img
          src={pstar}
          alt="Pstar"
          className="absolute  ml-8   w-4 h-4"
          style={{ marginTop: "-40rem" }}
        />

        {/* <img
          src={pstar}
          alt="Pstar"
          className="absolute  -mt-72 w-4 h-4"
          style={{ marginLeft: "21rem" }}
        /> */}
      </div>
    </div>
  );
};

export default Introduction;
