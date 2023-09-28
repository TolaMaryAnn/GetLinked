import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import star from "../assets/star.png";
import Creative from "../assets/Creative.png";
import man from "../assets/man.png";
import overlay from "../assets/overlay.png";
import line from "../assets/line.png";

const Hero = () => {
  const linearGradientBg = {
    backgroundImage: "linear-gradient(90deg, #D434FE, #903AFF)",
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const controls = useAnimation();

  useEffect(() => {
    const targetDate = new Date("2023-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    controls.start({ opacity: 1, y: 0 });

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
      className="border-b border-gray-50 shadow-[#D434FE] shadow-lg"
    >
      {/* web and tablet screen */}
      <div className="hidden md:block ">
        <div className="flex items-center px-16">
          <div className="w-1/2 px-4 p-2 mt-14">
            <img src={star} alt="Star" className="w-6 h-6" />
          </div>

          <div className="w-1/2 p-4 ml-10 relative">
            <h1 className="text-white text-2xl font-bold italic tracking-wider mt-4">
              Igniting a Revolution in{" "}
              <span className="relative inline-block">
                HR Innovation{" "}
                <img
                  src={line}
                  style={{
                    position: "absolute",

                    left: 0,
                    width: "100%",
                  }}
                />
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center px-8">
          <div className="w-1/2 p-4 text-white mt-20 relative">
            <div className="text-6xl font-extrabold bold tracking-wider ">
              getlinked{" "}
              <span className="relative inline-block">
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 translate-x-2">
                  <img src={Creative} alt="Creative" className="w-10 h-12" />
                </span>
                Tech
              </span>{" "}
              Hackathon <span className="text-[#D434FE]">1.0</span>
            </div>
            <div style={{ fontFamily: "regular" }}>
              <div className="font-thin mt-4">
                Participate in getlinked tech Hackathon 2023 stand <br /> a
                chance to win a Big prize
              </div>

              <button
                className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-10"
                style={linearGradientBg}
              >
                <a href="register">Register</a>
              </button>

              <div className="text-3xl font-bold mt-10">
                {String(timeLeft.hours).padStart(2, "0")}{" "}
                <span className="text-sm">H</span> :{" "}
                {String(timeLeft.minutes).padStart(2, "0")}{" "}
                <span className="text-sm">M</span> :{" "}
                {String(timeLeft.seconds).padStart(2, "0")}{" "}
                <span className="text-sm">S</span>
              </div>
            </div>
          </div>

          <div className="w-1/2 px-4 relative">
            <img src={man} alt="Man" className="relative z-0" />

            <img
              src={overlay}
              alt="Overlay"
              className="absolute top-0 left-0 w-full h-full z-10"
            />
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="text-center px-2 relative">
          <h1 className="text-white text-xl font-bold italic mt-2">
            Igniting a Revolution in{" "}
            <span className="relative inline-block">
              HR Innovation{" "}
              <img
                src={line}
                style={{
                  position: "absolute",

                  left: 0,
                  width: "100%",
                }}
              />
            </span>
          </h1>
        </div>

        <div className="text-white mt-12 relative text-center">
          <div className="text-4xl font-extrabold bold px-4 ">
            getlinked{" "}
            <span className="relative inline-block">
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 translate-x-2">
                <img src={Creative} alt="Creative" className="w-6 h-8" />
              </span>
              Tech
            </span>{" "}
            Hackathon <span className="text-[#D434FE]">1.0</span>
          </div>
          <div style={{ fontFamily: "regular" }}>
            <div className="font-thin mt-4 text-base px-4  break-words">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </div>

            <button
              className="bg-[#903AFF] text-white px-8 py-2 rounded-sm mt-10"
              style={linearGradientBg}
            >
              <a href="register">Register</a>
            </button>

            <div className="text-3xl font-thin mt-10">
              {String(timeLeft.hours).padStart(2, "0")}{" "}
              <span className="text-sm">H</span> :{" "}
              {String(timeLeft.minutes).padStart(2, "0")}{" "}
              <span className="text-sm">M</span> :{" "}
              {String(timeLeft.seconds).padStart(2, "0")}{" "}
              <span className="text-sm">S</span>
            </div>
          </div>
        </div>

        <div className=" relative items-center mt-8">
          <img src={man} alt="Man" className="relative z-0" />

          <img
            src={overlay}
            alt="Overlay"
            className="absolute top-0 left-0 w-full h-full z-10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
