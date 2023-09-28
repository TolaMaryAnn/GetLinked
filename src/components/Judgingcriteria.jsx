import React from "react";
import judge from "../assets/judge.png";
import star from "../assets/star.png";
import starr from "../assets/starr.png";
import pstar from "../assets/pstar.png";

const Judgingcriteria = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };
  return (
    <div className="border-b border-gray-50   shadow-[#D434FE] shadow-lg">
      {/* web and tablet screen */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-4 py-12">
          <div className="px-24 mt-48">
            <img src={judge} alt="judge" />
          </div>
          <div className="mt-16 text-white">
            <div className="text-3xl font-extrabold tracking-wider">
              Judging Criteria
              <br />
              <span className="text-[#D434FE]">Key attributes</span>
            </div>
            <div
              className="mt-4 text-base font-thin tracking-wide"
              style={{ fontFamily: "regular" }}
            >
              <div>
                <span className="text-[#FF26B9] font-extrabold">
                  Innovation and Creativity:
                </span>{" "}
                Evaluate the uniqueness and creativity of the <br />
                solution. Consider whether it addresses a real-world problem in
                a novel <br />
                way or introduces innovative features.
              </div>

              <div className="mt-6">
                <span className="text-[#FF26B9] font-extrabold">
                  Functionality:
                </span>{" "}
                Assess how well the solution works. Does it perform its <br />
                intended functions effectively and without major issues? Judges
                would
                <br />
                consider the completeness and robustness of the solution.
                <br />
              </div>

              <div className="mt-6">
                <span className="text-[#FF26B9] font-extrabold">
                  Impact and Relevance:
                </span>{" "}
                Determine the potential impact of the solution <br />
                in the real world. Does it address a significant problem, and is
                it relevant <br />
                to the target audience? Judges would assess the potential
                social, <br />
                economic, or environmental benefits.
              </div>

              <div className="mt-6">
                <span className="text-[#FF26B9] font-extrabold">
                  Technical Complexity:
                </span>{" "}
                Evaluate the technical sophistication of the solution. <br />
                Judges would consider the complexity of the code, the use of
                advanced <br />
                technologies or algorithms, and the scalability of the solution.{" "}
                <br />
              </div>

              <div className="mt-6">
                <span className="text-[#FF26B9] font-extrabold">
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered <br />
                to the rules and guidelines of the hackathon, including
                deadlines, use of <br />
                specific technologies or APIs, and any other
                competition-specific requirements <br />
              </div>
            </div>

            <div style={{ fontFamily: "regular" }}>
              <button
                className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-8"
                style={linearGradientBg}
              >
                Register
              </button>
            </div>
          </div>
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
          className="absolute -mt-96   w-8 h-8"
          style={{ marginLeft: "35rem" }}
        />

        <img
          src={pstar}
          alt="Pstar"
          className="absolute -mt-96 ml-52   w-8 h-8"
          style={{ marginTop: "-45rem" }}
        />
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className=" mt-20">
          <img src={judge} alt="judge" />
        </div>

        <div className="mt-4 text-white px-4 text-center py-8">
          <div className="text-2xl font-extrabold">
            Judging Criteria
            <br />
            <span className="text-[#D434FE]">Key attributes</span>
          </div>
          <div
            className="mt-4 text-base font-thin text-center"
            style={{ fontFamily: "regular" }}
          >
            <div className="break-words">
              <span className="text-[#FF26B9] font-extrabold ">
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </div>

            <div className="mt-4 break-words">
              <span className="text-[#FF26B9] font-extrabold">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </div>

            <div className="mt-4 break-words">
              <span className="text-[#FF26B9] font-extrabold">
                Impact and Relevance:
              </span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </div>

            <div className="mt-4 break-words">
              <span className="text-[#FF26B9] font-extrabold">
                Technical Complexity:
              </span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.{" "}
              <br />
            </div>

            <div className="mt-4 break-words">
              <span className="text-[#FF26B9] font-extrabold">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements
            </div>
          </div>

          <div style={{ fontFamily: "regular" }}>
            <button
              className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-4"
              style={linearGradientBg}
            >
              Register
            </button>
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
          style={{ marginTop: "-73rem" }}
        />

        <img
          src={star}
          alt="star"
          className="absolute -mt-12  ml-12  w-4 h-4"
        />

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

export default Judgingcriteria;
