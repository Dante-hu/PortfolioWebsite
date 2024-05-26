"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "This portfolio website is a showcase of my skills, projects, and educational background as a software engineer. Built using Next.js and React, and styled with Tailwind CSS, the website demonstrates my proficiency in modern web development technologies",
    image: "/Images/projects/under_construction.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dante-hu/PortfolioWebsite",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BlackJack",
    description:
      "A full-stack Blackjack game featuring a JavaScript, CSS, and HTML frontend with a Java backend. Utilizes a RESTful API for resource management and supports multiple clients through multi-threading and socket programming. Developed in IntelliJ IDEA with version control via Git.",
    image: "/Images/projects/under_construction.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dante-hu/Blackjack",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "US-Homeschool-Enrollment-Analysis",
    description:
      "A data science exploration project that utilzes key tencique from data science such as data cleaning, Exploratory Data Analysis (EDA) and many more",
    image: "/Images/projects/US_map.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/Dante-hu/US-Homeschool-Enrollment-Analysis",
    previewUrl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagchange = (newTag) => {
    setTag(newTag);
  };
  const filterProjects = projectsdata.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-2">
        <ProjectTag
          onClick={handleTagchange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagchange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
