import React, { useState, useContext } from "react";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";
import starr from "../../assets/starr.png";
import pstar from "../../assets/pstar.png";
import star from "../../assets/star.png";
import { LiaLessThanSolid } from "react-icons/lia";
import { ContactContext } from "../../context/contact/ContactContext";
import Lottie from "lottie-react";
import congrat from "../../assets/lottie/Congrat.json";
import congratt from "../../assets/lottie/congratt.json";

const Contact = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };

  const { contact, setContactSuccess, contactSuccess } =
    useContext(ContactContext);

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contact(formData, setContactSuccess);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div>
      {/* web and tablet screen */}
      <div className="grid grid-cols-2 gap-4 p-20 hidden md:grid ">
        <div className="col-span-1">
          <div>
            <div className="text-[#D434FE] text-3xl font-extrabold">
              Get in touch
            </div>
            <div
              className="mt-4 text-white font-base font-thin"
              style={{ fontFamily: "regular" }}
            >
              Contact <br />
              Information
            </div>
            <div
              className="mt-4 text-white font-base font-thin"
              style={{ fontFamily: "regular" }}
            >
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </div>
            <div
              className="mt-4 text-white font-base font-thin"
              style={{ fontFamily: "regular" }}
            >
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </div>
            <div
              className="mt-6 text-[#D434FE] font-base font-bold"
              style={{ fontFamily: "regular" }}
            >
              Share on
            </div>

            <div className="space-x-2 ">
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

        <div className="col-span-1 relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <div className="border-transparent rounded-lg relative p-8">
            <div className=" text-[#D434FE] font-base font-normal">
              Questions or need assistance? <br />
              Let us know about it!
            </div>

            <div className="" style={{ fontFamily: "regular" }}>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
                  />
                </div>
                <div className=" mt-4">
                  <input
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
                  />
                </div>
                <div className="mb-4 mt-4">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
                  />
                </div>

                <div className="mb-4 ">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#903AFF] text-white px-8 py-2 rounded-sm"
                    style={linearGradientBg}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* First Star */}
              <img
                src={star}
                alt="Star"
                className="absolute mt-12 w-8 h-8"
                style={{ marginLeft: "36rem" }}
              />

              {/* Second Star */}
              <img
                src={starr}
                alt="Star"
                className="absolute  ml-96 w-8 h-8"
                style={{ marginTop: "-28rem" }}
              />

              {/* First Pstar */}
              <img
                src={pstar}
                alt="Pstar"
                className="absolute   w-8 h-8"
                style={{ marginLeft: "-40rem", marginTop: "-32rem" }}
              />

              {/* Second Pstar */}
              <img
                src={pstar}
                alt="Pstar"
                className="absolute -mt-32 -ml-20 w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}

      <div className="md:hidden p-8">
        <a href="/" className="text-white ">
          <LiaLessThanSolid className=" border border-[#903AFF]  text-white h-8 w-8 rounded-full " />
        </a>

        <div className=" text-[#D434FE] text-2xl font-extrabold mt-8">
          Questions or need <br /> assistance? <br />
          Let us know about it!
        </div>

        <div className="mt-4 text-white font-thin text-base">
          Email us below to any question related <br />
          to our event
        </div>
        <div className="" style={{ fontFamily: "regular" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleChange}
                className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
              />
            </div>
            <div className=" mt-4">
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                placeholder="Phone"
                value={formData.phone_number}
                onChange={handleChange}
                className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
              />
            </div>
            <div className="mb-4 mt-4">
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="px-8 py-2 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="px-8 py-8 w-full border border-white rounded focus:outline-none focus:ring focus:border-[#D434FE] "
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#903AFF] text-white px-8 py-2 rounded-sm"
                style={linearGradientBg}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>

          {/* First Star */}
          <img
            src={star}
            alt="Star"
            className="absolute -mt-32 ml-80 w-4 h-4"
            // style={{ marginLeft: "36rem" }}
          />

          {/* Second Star */}
          <img
            src={starr}
            alt="Star"
            className="absolute ml-72   w-4 h-4"
            style={{ marginTop: "-32rem" }}
          />

          {/* First Pstar */}
          <img
            src={pstar}
            alt="Pstar"
            className="absolute ml-36   w-4 h-4"
            style={{ marginTop: "-38rem" }}
          />

          {/* Second Pstar */}
          <img
            src={pstar}
            alt="Pstar"
            className="absolute -mt-12 -ml-4 w-4 h-4"
          />
          <div className="text-center">
            <div
              className="mt-6 text-[#D434FE] font-xl font-bold"
              style={{ fontFamily: "regular" }}
            >
              Share on
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
      </div>
      {contactSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dimmed overlay */}
          <div className="fixed inset-0 bg-black opacity-80"></div>

          <div className="border  border-[#903AFF] p-8 rounded-lg shadow-md relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <Lottie animationData={congratt} />
              </div>
              <div className="col-span-1 h-60 w-60 -ml-24">
                <Lottie animationData={congrat} />
              </div>
            </div>
            <div
              className="text-3xl font-extrabold text-center text-white tracking-wider"
              style={{ fontFamily: "regular" }}
            >
              Message successfully sent!
            </div>
            <button
              className="bg-[#903AFF] text-white px-52 py-2 text-base rounded-sm tracking-wider mt-4"
              style={linearGradientBg}
              onClick={() => setContactSuccess(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
