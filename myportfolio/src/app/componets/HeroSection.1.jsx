"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via- to-blue-200">
              Hello, I'm{" "}
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
          <p className="text-[#90e0fc] text-base sm:text-lg mb-6 lg:text-xl">
            I am software developer and I enjoy building new projects
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black">
              Contact Me
            </button>
            <a download href="./Resume/Dante_resume.pdf">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mg-6 mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* <Image
              src="/Images/Field_Picture.jpg"
              alt="coding field picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
