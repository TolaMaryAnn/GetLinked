import React from "react";
import prize from "../assets/prizeNreward.png";

import gold from "../assets/gold.png";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";
const PrizesANDrewards = () => {
  const cardData = [
    { position: "1st", prize: "N300,000" },
    { position: "2nd", prize: "N400,000" },
    { position: "3rd", prize: "N150,000" },
  ];
  return (
    <div className=" shadow-[#D434FE] shadow-lg">
      {/* web and tablet screen */}
      <div className="p-12 hidden md:block font-custom">
        <div className="grid grid-cols-2 gap-4 px-48 mt-14">
          <div className="">
            <img src={pstar} alt="star" />
          </div>
          <div>
            <div>
              <div className="text-3xl text-white font-extrabold tracking-wider">
                Prizes and <br />
                <span className="text-[#903AFF]">Rewards</span>
              </div>
              <div className="text-white mt-4 tracking-wider font-base">
                Highlights of the prizes or rewards for winners and <br /> for
                participants
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="w-1/2 px-4 p-2 mt-8">
              <img src={prize} alt="prize" />
            </div>

            <div className="flex  gap-8 mt-48">
              <div className=" rounded overflow-hidden shadow-lg px-10 py-20  border border-[#D434FE] text-center">
                <div className="font-bold text-3xl mb-2 text-white">
                  2nd <br />
                  Runner
                </div>
                <div className=" text-3xl font-bold text-[#D434FE] mt-4">
                  #300,000
                </div>
                <img
                  src={silver}
                  alt="silver Medal"
                  className="absolute -mt-80   h-65 w-65"
                  style={{ marginLeft: "-2.1rem" }}
                />
              </div>
              <div className=" rounded overflow-hidden shadow-lg px-10 py-20  border border-[#903AFF] text-center">
                <div className="font-bold text-3xl mt-4  text-white">
                  1st <br />
                  Runner
                </div>
                <div className=" text-3xl font-bold text-[#D434FE] mt-4 ">
                  #400,000
                </div>
                <img
                  src={gold}
                  alt="gold Medal"
                  className="absolute  h-65 w-65"
                  style={{ marginLeft: "-5.5rem", marginTop: "-26rem" }}
                />
              </div>
              <div className=" rounded overflow-hidden shadow-lg px-10 py-20 border border-[#D434FE]  text-center">
                <div className="font-bold text-3xl mb-2 text-white">
                  3rd <br />
                  Runner
                </div>
                <div className=" text-3xl font-bold text-[#D434FE] mt-4">
                  #150,000
                </div>
                <img
                  src={bronze}
                  alt="bronze Medal"
                  className="absolute -mt-80   h-65 w-65"
                  style={{ marginLeft: "-2.1rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <img
          src={star}
          alt="star"
          className="absolute     w-8 h-8"
          style={{ marginLeft: "40rem", marginTop: "-32rem" }}
        />
        <img
          src={star}
          alt="star"
          className="absolute     w-8 h-8"
          style={{ marginLeft: "78rem", marginTop: "-28rem" }}
        />
        <img src={star} alt="star" className="absolute ml-48     w-4 h-4" />
        <img
          src={starr}
          alt="star"
          className="absolute    w-8 h-8"
          style={{ marginLeft: "64rem" }}
        />
      </div>

      {/* mobile screen */}
      <div className="md:hidden mt-20 font-custom">
        <div className="text-center px-4 ">
          <div className="text-2xl text-white font-extrabold ">
            Prizes and <br />
            <span className="text-[#903AFF]">Rewards</span>
          </div>
          <div className="text-white mt-2 tracking-wider font-base">
            Highlights of the prizes or rewards for winners <br /> and for
            participants
          </div>
        </div>

        <div className=" px-4 p-2 mt-8">
          <img src={prize} alt="prize" />
        </div>

        <div>
          <div className="">
            <div className=" p-4  relative font-extrabold">
              <div className="flex gap-4 mt-24 mb-4">
                <div className=" rounded overflow-hidden shadow-lg px-10 py-12 border border-[#D434FE] text-center">
                  <div className="font-bold text-xl -ml-8  mb-2 text-white">
                    2nd <br />
                    Runner
                  </div>
                  <div className=" text-xl font-bold -ml-8  text-[#D434FE] mt-4">
                    #300,000
                  </div>
                </div>
                <div className=" rounded overflow-hidden shadow-lg px-10 py-12  border border-[#903AFF]">
                  <div className="font-bold text-xl mt-4 -ml-8  text-white">
                    1st <br />
                    Runner
                  </div>
                  <div className=" text-xl font-bold -ml-8  text-[#D434FE] mt-4 ">
                    #400,000
                  </div>
                </div>
                <div className=" rounded overflow-hidden shadow-lg px-10 py-12 border border-[#D434FE] ">
                  <div className="font-bold text-xl -ml-8  mb-2 text-white">
                    3rd <br />
                    Runner
                  </div>
                  <div className=" text-xl font-bold -ml-8  text-[#D434FE] mt-4">
                    #150,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute ml-48   w-4 h-4"
          style={{ marginTop: "-60rem" }}
        />
        <img
          src={pstar}
          alt="star"
          className="absolute ml-32   w-4 h-4"
          style={{ marginTop: "-70rem" }}
        />

        <img src={star} alt="star" className="absolute mt-2  ml-12  w-4 h-4" />
      </div>
    </div>
  );
};

export default PrizesANDrewards;
