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
        <li>Python</li>
        <li>JavaScript</li>
        <li>C++</li>
        <li>Java</li>
        <li>React</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>PyTorch</li>
        <li>Scikit-learn</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ontario Tech University, BSc(Hons) in Computer Science</li>
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
            I’m a dedicated Computer Science student at Ontario Tech University,
            fueled by a passion for crafting innovative software solutions that
            make a difference. Immersed in full-stack development, I thrive on
            building seamless, responsive web applications using tools like
            Python, JavaScript, TypeScript, Next.js, Node.js, and Tailwind CSS,
            knowing each line of code shapes user experiences profoundly. My
            excitement extends to the dynamic fields of artificial intelligence
            and machine learning, where I’ve honed skills with PyTorch,
            Scikit-learn, TensorFlow, and OpenCV to tackle real-world
            challenges. From optimizing performance to designing intuitive
            interfaces, I’m driven to create impactful projects, continuously
            expanding my expertise to push the boundaries of technology and
            empower users.
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
