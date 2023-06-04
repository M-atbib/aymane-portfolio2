"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/utils/motion";
import ProjectCard from "./subcomponent/ProjectCard";
import { homePageProjects } from "@/constants";
import { Title } from "./subcomponent/CustomComponents";

const Projects = () => {
  const [active, setActive] = useState("2");

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="projects">
        <Title title="Projects" />

        <div className="projects-list">
          {homePageProjects.map((homeproject, index) => (
            <ProjectCard
              {...homeproject}
              key={homeproject.id}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
