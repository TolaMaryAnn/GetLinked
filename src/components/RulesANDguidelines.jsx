import React from "react";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import Rules from "../assets/RandR.png";
const RulesANDguidelines = () => {
  return (
    <div className="border-b border-gray-50  shadow-[#D434FE] shadow-lg">
      {/* web and tablet screen */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-72 text-white px-20">
            <div className="text-3xl font-extrabold tracking-wider">
              Rules and <br />
              <span className="text-[#D434FE]">Guidelines</span>
            </div>
            <div
              className="mt-4 text-base font-thin"
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
              of technology, and creating solutions that can change the world,{" "}
              <br />
              that's what we're all about!
            </div>
          </div>
          <div className="mt-12">
            <img src={Rules} alt="Idea" />
          </div>
        </div>

        <img
          src={star}
          alt="star"
          className="absolute -mt-52    w-8 h-8"
          style={{ marginLeft: "40rem" }}
        />

        <img
          src={starr}
          alt="star"
          className="absolute   w-8 h-8"
          style={{ marginLeft: "20rem", marginTop: "-30rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="mt-4">
          <img src={Rules} alt="Idea" />
        </div>

        <div className="mt-4 text-white px-4 text-center">
          <div className="text-2xl font-extrabold ">
            Rules and <br />
            <span className="text-[#D434FE]">Guidelines</span>
          </div>
          <div
            className="mt-4 text-base font-thin tracking-wide break-words mb-8"
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
          src={star}
          alt="star"
          className="absolute ml-4   w-4 h-4"
          style={{ marginTop: "-35rem" }}
        />

        <img src={star} alt="star" className="absolute -mt-8  ml-32  w-4 h-4" />

        {/* <img
          src={starr}
          alt="star"
          className="absolute   w-4 h-4"
          style={{ marginLeft: "20rem", marginTop: "-20rem" }}
        /> */}
      </div>
    </div>
  );
};

export default RulesANDguidelines;
