"use client";

import { projects } from "@/constants";
import video from "next-videos";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { BigTitle } from "@/components/subcomponent/CustomComponents";
import { playButton } from "@/assets";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Contact } from "@/components";

const ProjectPage = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(".projectP-list_content");

    projects.forEach((project) => {
      const video = project.querySelector(".projectP-list_content-video");
      const thumbnail = project.querySelector(
        ".projectP-list_content-thumbnail"
      );
      const close = project.querySelector(".close");

      thumbnail.addEventListener("click", () => {
        if (video.style.display !== "block") {
          video.style.display = "block";
        } else {
          video.style.display = "none";
        }
      });

      close.addEventListener("click", () => {
        video.style.display = "none";
      });
    });
  }, []);

  return (
    <main className="projectP">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <BigTitle title="My Work" classN="projectP-title" />

        <div className="projectP-list">
          {projects.map(
            ({ id, name, description, thumbnail, video, tools }) => (
              <motion.div
                key={id}
                variants={fadeIn("up", "spring", id * 0.8, 1)}
                className="mb-[35px]"
              >
                <div className="projectP-list_content">
                  <div className="projectP-list_content-video ">
                    <AiOutlineClose className="close" />
                    <video src={video} alt="video" controls />
                  </div>

                  <div className="projectP-list_content-thumbnail">
                    <Image src={thumbnail} alt="thumbnail" className="img" />
                    <Image
                      src={playButton}
                      alt="play button"
                      className="play"
                    />
                  </div>

                  <div className="projectP-list_content-desc">
                    <h2>{name}</h2>
                    <p>{description}</p>

                    <ul className="projectP-list_content-desc_tools">
                      {tools.map(({ id, tech }) => (
                        <li
                          key={id}
                          className="text-sm bg-gunmetal text-lavender font-light py-[5px] px-[10px] rounded-[20px] hover:border hover:border-gunmetal hover:border-solid hover:bg-transparent hover:text-gunmetal cursor-default duration-500"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
        <Contact />
      </motion.div>
    </main>
  );
};

export default ProjectPage;
