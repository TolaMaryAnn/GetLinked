import React from "react";
import lock from "../assets/lock.png";
import privacy from "../assets/privacy.png";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";
const PrivacypolicyANDterms = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };
  return (
    <div>
      {/* web and tablet screen */}
      <div className="hidden md:block py-32">
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="mt-32 text-white px-20 relative z-10">
            <div className="text-3xl font-extrabold tracking-wider">
              Privacy Policy and <br />
              <span className="text-[#903AFF]">Terms</span>
            </div>
            <div
              className="mt-4 text-base font-thin text-gray-400"
              style={{ fontFamily: "regular" }}
            >
              Last updated on September 12, 2023
            </div>
            <div
              className="mt-4 text-base font-thin text-white"
              style={{ fontFamily: "regular" }}
            >
              Below are our privacy & policy, which outline a lot of goodies.{" "}
              <br />
              it’s our aim to always take care of our participants.
            </div>

            <div
              className="mt-8  border rounded border-[#D434FE] p-12"
              style={{ fontFamily: "regular" }}
            >
              <div className=" font-thin text-base tracking-wider">
                At getlinked tech Hackathon 1.0, we value your privacy <br />
                and are committed to protecting your personal information.{" "}
                <br />
                This Privacy Policy outlines how we collect, use, disclose,{" "}
                <br />
                and safeguard your data when you participate in our tech <br />
                hackathon event. By participating in our event, you consent{" "}
                <br />
                to the practices described in this policy.
              </div>
              <div className="mt-4 text-[#D434FE] text-xl font-extrabold">
                Licensing Policy
              </div>
              <div className="mt-2 text-base font-extrabold">
                Here are terms of our Standard License:
              </div>

              <div className="mt-8">
                <ul className="list-disc">
                  <li>
                    The Standard License grants you a non-exclusive right to{" "}
                    <br />
                    navigate and register for our event
                  </li>
                  <li>
                    You are licensed to use the item available at any free
                    source <br />
                    sites, for your project developement
                  </li>
                </ul>
              </div>

              <button
                className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-10 ml-20"
                style={linearGradientBg}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="mt-12 relative">
            <img src={privacy} alt="privacy" className="relative z-0" />
            <img
              src={lock}
              alt="lock"
              className="absolute top-0 left-0 "
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <img
          src={star}
          alt="star"
          className="absolute   w-4 h-4"
          style={{ marginLeft: "78rem", marginTop: "-45em" }}
        />
        <img
          src={star}
          alt="star"
          className="absolute -mt-72    w-7 h-7"
          style={{ marginLeft: "52rem" }}
        />

        <img
          src={starr}
          alt="star"
          className="absolute  w-8 h-8"
          style={{ marginLeft: "24rem", marginTop: "-52rem" }}
        />
        <img
          src={starr}
          alt="star"
          className="absolute -mt-60   w-8 h-8"
          style={{ marginLeft: "82rem" }}
        />
        <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-8 h-8"
          style={{ marginTop: "-12rem" }}
        />
        <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-6 h-6"
          style={{ marginTop: "-48rem", marginLeft: "38rem" }}
        />
        <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-6 h-6"
          style={{ marginTop: "-28rem", marginLeft: "56rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="md:hidden py-8">
        <div className="mt-4 text-white px-4 relative z-10">
          <div className="text-2xl text-center font-extrabold ">
            Privacy Policy and <br />
            <span className="text-[#903AFF]">Terms</span>
          </div>
          <div
            className="mt-2 text-base font-thin text-gray-400 text-center"
            style={{ fontFamily: "regular" }}
          >
            Last updated on September 12, 2023
          </div>
          <div
            className="mt-4 text-base font-thin text-center text-white"
            style={{ fontFamily: "regular" }}
          >
            Below are our privacy & policy, which outline a <br /> lot of
            goodies. it’s our aim to always take care of our <br />{" "}
            participants.
          </div>

          <div
            className="mt-8  border rounded border-[#D434FE] p-8 "
            style={{ fontFamily: "regular" }}
          >
            <div className=" font-thin text-base tracking-wider break-words text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </div>
            <div className="mt-4 text-[#D434FE] text-xl font-extrabold">
              Licensing Policy
            </div>
            <div className="mt-2 text-base font-extrabold">
              Here are terms of our Standard License:
            </div>

            <div className="mt-8">
              <ul className="list-disc">
                <li>
                  The Standard License grants you a non-exclusive right to{" "}
                  <br />
                  navigate and register for our event
                </li>
                <li>
                  You are licensed to use the item available at any free source{" "}
                  <br />
                  sites, for your project developement
                </li>
              </ul>
            </div>

            <button
              className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-8 ml-16"
              style={linearGradientBg}
            >
              Read More
            </button>
          </div>

          <div className="mt-12 relative mb-12">
            <img src={privacy} alt="privacy" className="relative z-0" />
            <img
              src={lock}
              alt="lock"
              className="absolute top-0 left-0 "
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute ml-80  w-4 h-4"
          style={{ marginTop: "-60rem" }}
        />
        <img
          src={pstar}
          alt="star"
          className="absolute ml-32   w-4 h-4"
          style={{ marginTop: "-70rem" }}
        />

        <img src={star} alt="star" className="absolute mt-2  ml-12  w-4 h-4" />

        <img
          src={starr}
          alt="star"
          className="absolute   w-4 h-4"
          style={{ marginLeft: "20rem", marginTop: "-38rem" }}
        />
      </div>
    </div>
  );
};

export default PrivacypolicyANDterms;
