"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const ProjectCard = ({
  id,
  index,
  name,
  description,
  thumbnail,
  video,
  tools,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center transition-[flex] duration-[1s] ease-out-flex cursor-pointer `}
      onClick={() => handleClick(id)}
    >
      {active !== id ? (
        <div className="projects-list_thumbnail">
          <Image src={thumbnail} alt={name} className="img" />
          <h3>{name}</h3>
        </div>
      ) : (
        <div className="projects-list_video">
          <video src={video} autoPlay controls muted />
          <div className="projects-list_video-info p-5 sm:p-8">
            <h2>{name}</h2>
            <p>{description}</p>
            <ul>
              {tools.map(({ tech, id }) => (
                <li
                  key={id}
                  className="text-sm bg-gunmetal text-lavender font-light py-[5px] px-[10px] rounded-[20px]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
