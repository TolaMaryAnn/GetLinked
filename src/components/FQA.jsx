import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";
import question from "../assets/question.png";
import fqa from "../assets/fqa.png";

const FQA = () => {
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "This is the answer to the first question.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "This is the answer to the second question.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "This is the answer to the third question.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "This is the answer to the fourth question.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "This is the answer to the fifth question.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "This is the answer to the sixth question.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border-b border-gray-50  shadow-[#D434FE] shadow-lg" id="fqa">
      {/* Web and tablet screen */}
      <div className="hidden md:block">
        <div className="flex items-center px-16">
          <div className="w-1/2 px-4 p-2 mt-24">
            <img src={pstar} alt="Star" className="w-8 h-8" />
          </div>

          <div className="w-1/2 ml-10 relative mt-8">
            <div className="grid grid-cols-3">
              <div className="col-span-1 mt-24 relative">
                <img
                  src={question}
                  alt="Question"
                  className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                  width={50}
                  height={50}
                />
              </div>

              <div className="col-span-1 relative">
                <img
                  src={question}
                  alt="Question"
                  className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                  width={80}
                  height={80}
                />
              </div>

              <div className="col-span-1 mt-20 relative">
                <img
                  src={question}
                  alt="Question"
                  className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mt-8 text-white px-20">
            <div className="text-3xl font-extrabold tracking-wider">
              Frequently Ask <br />
              <span className="text-[#D434FE]">Questions</span>
            </div>
            <div
              className="mt-4 text-base font-thin"
              style={{ fontFamily: "regular" }}
            >
              We got answers to the questions that you might <br />
              want to ask about getlinked Hackathon 1.0
            </div>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer mt-8 "
                onClick={() => toggleAccordion(index)}
                style={{ fontFamily: "regular" }}
              >
                <div className="flex justify-between items-center mt-4 ">
                  <h3 className="text-white text-base ">{faq.question}</h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-[#D434FE] text-sm" />
                  ) : (
                    <FaPlus className="text-[#D434FE] text-sm" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-gray-100 mt-2">{faq.answer}</p>
                )}
                <div className="border-b border-[#D434FE] mt-4"></div>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <img src={fqa} alt="FQA" />
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute -mt-12    w-8 h-8"
          style={{ marginLeft: "72rem" }}
        />

        <img
          src={starr}
          alt="star"
          className="absolute -mt-80   w-8 h-8"
          style={{ marginLeft: "42rem"}}
        />

        <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-8 h-8"
          style={{marginTop:'-45rem',marginLeft:'68rem'}}
        />
         <img
          src={pstar}
          alt="Pstar"
          className="absolute   w-8 h-8"
          style={{marginTop:'-42rem' ,marginLeft:'56rem'}}
        />
      </div>

      {/* mobile screen */}
     <div className="md:hidden py-8">
        <div className="w-1/2 ml-10 relative ">
          <div className="grid grid-cols-3">
            <div className="col-span-1 mt-24 ml-8 relative">
              <img
                src={question}
                alt="Question"
                className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                width={50}
                height={50}
              />
            </div>

            <div className="col-span-1 ml-4 mt-8 relative">
              <img
                src={question}
                alt="Question"
                className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                width={80}
                height={80}
              />
            </div>

            <div className="col-span-1 mt-14 ml-8 relative">
              <img
                src={question}
                alt="Question"
                className="mx-auto absolute left-1/2 transform -translate-x-1/2"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="mt-2">
       
          <img src={fqa} alt="FQA" />
        </div>

        <div className="mt-8 text-white px-4">
          <div className="text-2xl font-extrabold tracking-wider text-center">
            Frequently Ask <br />
            <span className="text-[#D434FE]">Questions</span>
          </div>
          <div
            className="mt-2 text-base font-thin text-center"
            style={{ fontFamily: "regular" }}
          >
            We got answers to the questions that you might <br />
            want to ask about getlinked Hackathon 1.0
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer mt-8 "
              onClick={() => toggleAccordion(index)}
              style={{ fontFamily: "regular" }}
            >
              <div className="flex justify-between items-center mt-4 ">
                <h3 className="text-white text-base ">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaMinus className="text-[#D434FE] text-sm" />
                ) : (
                  <FaPlus className="text-[#D434FE] text-sm" />
                )}
              </div>
              {activeIndex === index && (
                <p className="text-gray-100 mt-2">{faq.answer}</p>
              )}
              <div className="border-b border-[#D434FE] mt-4"></div>
            </div>
          ))}
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
export default FQA;
