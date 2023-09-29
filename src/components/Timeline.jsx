import React from "react";
import starr from "../assets/starr.png";
import star from "../assets/star.png";
import pstar from "../assets/pstar.png";

const Timeline = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };
  return (
    <div id="timeline" className=" shadow-[#D434FE] shadow-lg">
      {/* web and tablet */}
      <div className="p-12 hidden md:block">
        <div className="text-center text-white text-3xl font-extrabold ">
          Timeline
        </div>
        <div
          className="text-center text-white text-base font-normal mt-4"
          style={{ fontFamily: "regular" }}
        >
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </div>

        <div style={{ fontFamily: "regular" }}>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-2 px-8 mt-8">
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-[#D434FE] text-xl font-extrabold py-2 text-right">
                  Hackathon Announcement
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs text-right">
                  The getlinked tech hackathon 1.0 is formally announced <br />
                  to the general public and teams begin to get ready to register
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full  z-10 text-white text-center"
                style={linearGradientBg}
              >
                1
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE] text-xl mt-8 font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE] text-xl mt-8 text-right font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full  z-10 text-white text-center"
                style={linearGradientBg}
              >
                2
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-xl font-extrabold py-2 text-[#D434FE] ">
                  Teams Registration begins
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Interested teams can now show their interest in the <br />
                  getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-2 px-8 mt-2">
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-[#D434FE]  text-xl font-extrabold py-2 text-right">
                  Teams Registration ends
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs text-right">
                  Interested Participants are no longer Allowed to <br />
                  register
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full  z-10 text-white text-center"
                style={linearGradientBg}
              >
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE]  text-xl font-extrabold mt-8">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE]  text-xl font-extrabold text-right mt-10">
                  November 18, 2023
                </div>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full z-10 text-white text-center"
                style={linearGradientBg}
              >
                4
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-[#D434FE] text-xl font-extrabold py-2">
                  Announcement of the accepted teams <br />
                  and ideas
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  All teams whom idea has been accepted into getlinked tech{" "}
                  <br />
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-2 px-8 mt-2">
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-[#D434FE] text-xl font-extrabold py-2 text-right">
                  Getlinked Hackathon 1.0 Offically Begins
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs text-right">
                  Accepted teams can now proceed to build their <br />
                  ground breaking skill driven solutions
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full  z-10 text-white text-center"
                style={linearGradientBg}
              >
                5
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE]  text-xl font-extrabold mt-8">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <div className="text-[#D434FE]  text-xl font-extrabold mt-10 text-right">
                  November 18, 2023
                </div>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-[#D434FE]"></div>
              <div
                className="absolute w-6 h-6 rounded-full  z-10 text-white text-center"
                style={linearGradientBg}
              >
                6
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full rounded-md p-2 md:pl-4">
                <h1 className="text-[#D434FE] text-xl font-extrabold py-2">
                  Demo Day
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Teams get the opportunity to pitch their projects to judges.{" "}
                  <br />
                  The winner of the hackathon will also be announced on <br />
                  this day
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-8 h-8"
          style={{ marginTop: "-46rem", marginLeft: "20rem" }}
        />
        <img
          src={starr}
          alt="star"
          className="absolute -mt-20 ml-48   w-8 h-8"
        />
        <img
          src={star}
          alt="star"
          className="absolute -mt-9    w-8 h-8"
          style={{ marginLeft: "60rem", marginTop: "-27rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="p-4 md:hidden">
        <div className="text-center text-white text-2xl font-extrabold ">
          Timeline
        </div>
        <div
          className="text-center text-white text-base font-normal mt-4"
          style={{ fontFamily: "regular" }}
        >
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </div>
        <div style={{ fontFamily: "regular" }}>
          <div className="max-w-7xl mx-auto w-full mt-8">
            <div className="flex items-start">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className="w-6 h-6 rounded-full bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                1
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-base font-extrabold py-2">
                  Hackathon Announcement
                </h1>
                <p className="text-gray-100  text-sm">
                  The getlinked tech hackathon 1.0 is formally <br /> announced
                  to the general public, and teams <br /> begin to get ready to
                  register
                </p>
                <div className="text-[#D434FE] text-base font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className=" w-6 h-6 rounded-full  bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                2
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-bse font-extrabold py-2">
                  Teams Registration begins
                </h1>
                <p className="text-gray-100  text-sm">
                  Interested teams can now show their interest <br /> in the
                  getlinked tech hackathon 1.0 2023 by <br /> proceeding to
                  register
                </p>
                <div className="text-[#D434FE] text-base  font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className=" w-6 h-6 rounded-full  bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                3
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-base font-extrabold py-2">
                  Teams Registration ends
                </h1>
                <p className="text-gray-100  text-sm">
                  Interested Participants are no longer Allowed <br />
                  to register
                </p>
                <div className="text-[#D434FE] text-base  font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className=" w-6 h-6 rounded-full  bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                4
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-base font-extrabold py-2">
                  Announcement of the accepted teams and ideas
                </h1>
                <p className="text-gray-100  text-sm">
                  All teams whom idea has been accepted into <br />
                  getlinked tech hackathon 1.0 2023 are formally <br />
                  announced
                </p>
                <div className="text-[#D434FE] text-base  font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className=" w-6 h-6 rounded-full  bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                5
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-base font-extrabold py-2">
                  Getlinked Hackathon 1.0 Offically Begins
                </h1>
                <p className="text-gray-100  text-sm">
                  Accepted teams can now proceed to build <br />
                  their ground breaking skill driven solutions
                </p>
                <div className="text-[#D434FE] text-base  font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div
                className="h-1 w-1 bg-[#D434FE] mr-4"
                style={{ height: "100px" }}
              ></div>

              <div
                className=" w-6 h-6 rounded-full  bg-[#D434FE] text-white text-center mt-28"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  marginLeft: "-29.5px",
                }}
              >
                6
              </div>

              <div className="w-full ml-4 -mt-4">
                <h1 className="text-[#D434FE] text-base font-extrabold py-2">
                  Demo Day
                </h1>
                <p className="text-gray-100  text-sm">
                  Teams get the opportunity to pitch their <br />
                  projects to judges. The winner of the <br />
                  hackathon will also be announced on this day
                </p>
                <div className="text-[#D434FE] text-base  font-extrabold">
                  November 18, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
