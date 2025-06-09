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
    image: "/Images/thumbnail.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dante-hu/PortfolioWebsite",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Mindful Moments",
    description:
      "Developed and fine-tuned YOLOv8n models on Balanced Speed Sign (4,000 images) and LISA Traffic Sign (11,000 images) datasets using Python, PyTorch, and OpenCV, achieving a 93% mAP, with a 7% accuracy boost via Weighted Boxes Fusion, class imbalance correction through OpenCV augmentation, and optimized 30 FPS evaluation on Google Colab T4 GPU.",
    image: "/Images/projects/mental_health.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dante-hu/Mindful-Moments",
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
  {
    id: 4,
    title: "Travel Diary App",
    description:
      "The Travel Diary App is a mobile application designed for users to document and preserve their travel experiences, including locations, photos, and personal notes, with a focus on privacy and simplicity.",
    image: "/Images/projects/journal.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/harveyliao/Mobile_course_project",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Music Recommendation",
    description:
      "Developed a Music Recommendation AI using Python, PyTorch, and NLP to deliver personalized Spotify song suggestions based on user emotions, achieving 99% accuracy with a custom EmotionNet model and an interactive Streamlit web app.",
    image: "/Images/projects/music.jpg",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/Dante-hu/Music-Recommendation-System",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Steam Clone",
    description:
      "A dynamic Steam clone web app replicating the gaming platform’s core features, allowing users to browse, and manage a library of games with a sleek, responsive interface.",
    image: "/Images/projects/gaming.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dante-hu/Steam-Clone",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  <section id="projects" className="py-16"></section>;
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
    <section id="projects">
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
        <ProjectTag
          onClick={handleTagchange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagchange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
