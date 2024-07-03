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
        <li>Git</li>
        <li>Latex</li>
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
    <section className=" text-white " id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/Images/Designer.jpeg"
            width={1000}
            height={1000}
            alt="Coding Image Picture"
            className="w-1/2 md:w-full"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            I am an aspiring computer science student at Ontario Tech
            University, where I am expanding my journey by creating projects and
            developing my software skills. My expertise spans a multitude of
            areas that will further my web development and AI skills. I am
            particularly passionate about fullstack development and am venturing
            into the exciting fields of artificial intelligence and machine
            learning, continuously building and honing my skills.
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
