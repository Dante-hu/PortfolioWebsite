"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimate } from "motion/react";

const HeroSection = () => {
  return (
    <section>
      <div className="sm:grid-cols-12 lg:justify-center items-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mr-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "            Dante Cornelius",
                1000,
                "a Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={3}
              style={{ fontSize: "60px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#90e0fc] text-base sm:text-lg mb-6 lg:text-4xl font-extrabold justify-center items-center place-self-center text-center">
            I am software developer and I enjoy building new projects
          </p>
          <div className="place-self-center text-center">
            <a download href="./Resume/resume.pdf">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  mt-4">
                <span className="block hover:bg-slate-800 rounded-full">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
