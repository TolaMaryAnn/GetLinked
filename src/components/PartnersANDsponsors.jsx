import React from "react";
import Liberty from "../assets/Liberty.png";
import Libertypay from "../assets/Libertypay.png";
import Paybox from "../assets/Paybox.png";
import Vuzual from "../assets/Vuzual.png";
import Winwise from "../assets/Winwise .png";
import wisper from "../assets/wisper.png";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";
const PartnersANDsponsors = () => {
  return (
    <div className="border-b border-gray-50  shadow-[#D434FE] shadow-lg">
      {/* web and tablet screen */}
      <div className="p-20  hidden md:block">
        <div className="text-center text-white text-3xl font-extrabold ">
          Partners and Sponsors
        </div>
        <div
          className="text-center text-white text-base font-normal mt-4"
          style={{ fontFamily: "regular" }}
        >
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center mt-12 px-32 py-12  border border-[#D434FE]">
          <img src={Liberty} alt="Image 1" className=" rounded-lg" />
          <img src={Libertypay} alt="Image 2" className=" rounded-lg mt-12" />
          <img src={Winwise} alt="Image 3" className=" rounded-lg" />
          <img src={wisper} alt="Image 4" className=" rounded-lg mt-8" />
          <img src={Paybox} alt="Image 5" className=" rounded-lg mt-16" />
          <img src={Vuzual} alt="Image 6" className=" rounded-lg mt-16" />
        </div>
        <img
          src={star}
          alt="star"
          className="absolute -mt-16    w-8 h-8"
          style={{ marginLeft: "40rem" }}
        />

        <img
          src={starr}
          alt="star"
          className="absolute -mt-80   w-4 h-4"
          style={{ marginLeft: "35rem" }}
        />

        <img
          src={pstar}
          alt="Pstar"
          className="absolute -mt-96 ml-52   w-8 h-8"
          style={{ marginTop: "-32rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="p-4 md:hidden mt-8">
        <div className="text-center text-white text-2xl font-extrabold ">
          Partners and Sponsors
        </div>
        <div
          className="text-center text-white text-base font-normal mt-4"
          style={{ fontFamily: "regular" }}
        >
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </div>

        <div className="grid grid-cols-3 gap-4 p-8  text-center border border-[#D434FE] mt-8">
          <div className="col-span-1 w-15 h-15">
            <img
              src={Liberty}
              alt="Image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1 w-15 h-15 mt-12">
            <img
              src={Libertypay}
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1 w-15 h-15">
            <img
              src={Winwise}
              alt="Image 3"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="col-span-1 w-15 h-15 mt-4">
            <img
              src={wisper}
              alt="Image 4"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1 w-15 h-15 mt-12">
            <img
              src={Paybox}
              alt="Image 5"
              className="w-full h-auto rounded-lg "
            />
          </div>
          <div className="col-span-1 w-15 h-15 mt-12">
            <img
              src={Vuzual}
              alt="Image 6"
              className="w-full h-auto rounded-lg "
            />
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
          style={{ marginTop: "-45rem" }}
        />

        <img src={star} alt="star" className="absolute mt-2  ml-12  w-4 h-4" />

        {/* <img
          src={starr}
          alt="star"
          className="absolute   w-4 h-4"
          style={{ marginLeft: "20rem", marginTop: "-38rem" }}
        /> */}
      </div>
    </div>
  );
};

export default PartnersANDsponsors;
