"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BLOGGER",
    description: (
      <ul>
        <li>React.js(Next.js) / JavaScript / MongoDB</li>
        <li>Google / Github OAuth</li>
      </ul>
    ),
    image: "project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TINGYUNLI/nextjs-blog",
    previewUrl: "https://nextjs-blog-ten-psi-28.vercel.app/",
  },
  {
    id: 2,
    title: "LET’S CHAT",
    description: (
      <ul>
        <li>React.js(Next.js) / TypeScript / MongoDB</li>
        <li>Real-time messaging using Pusher</li>
      </ul>
    ),
    image: "project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TINGYUNLI/nextjs-chat-app",
    previewUrl: "https://nextjs-chat-app-murex.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="md:pt-14 lg:px-0 xl:px-14">
      <h2 className="text-center text-3xl font-bold text-textColor mt-4 mb-6 md:mb-9 lg:mt-15">
        My Latest Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6 lg:mb-3">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul
        ref={ref}
        className="grid md:grid-cols-2 gap-8 lg:gap-12 md:gap-8 xl:px-11"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
