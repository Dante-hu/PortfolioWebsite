"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Ontario Tech, BSc(Hons) in Computer Science</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTranstition] = useTransition();
  const handleTabchange = (id) => {
    startTranstition(() => {
      setTab(id);
    });
  };
  return (
    <section className=" text-white ">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/adobe_coding_pic.png"
          width={500}
          height={500}
          alt="Coding Image Picture"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            ## About Me I am a dedicated Computer Science student at Ontario
            Tech University, graduating in April 2026. My expertise spans
            multiple programming languages, including Java, Python, C++, and
            JavaScript, alongside proficiency in web development with HTML/CSS
            and React-Native. I have hands-on experience with various developer
            tools like Git, Visual Studio, IntelliJ, and Jupyter Notebook. My
            technical acumen extends to data analysis using libraries such as
            Pandas, NumPy, and Matplotlib. I am adept at both front-end and
            back-end development, employing techniques like multi-threading and
            socket programming to create robust client/server architectures.
            With a strong foundation in software development and data science, I
            am passionate about leveraging my skills to solve complex problems
            and contribute to innovative technological solutions. Explore my
            work and connect with me on my socials.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabchange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabchange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
