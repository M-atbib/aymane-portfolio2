"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { sneakerAdBreakdownV } from "@/assets";
import { video } from "next-videos";
import { tools } from "@/constants";
import { Title } from "./subcomponent/CustomComponents";
import Tool from "./subcomponent/Tool";

const Technologies = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className="tools"
      id="tech"
    >
      <Title title="Tools" />
      <div className="tools-container">
        <motion.div variants={zoomIn(0.4, 1)} className="tools-container_video">
          <video
            src={sneakerAdBreakdownV}
            autoPlay
            muted
            controls
            className="rounded-[40px]"
          />
        </motion.div>

        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <div className="tools-container_list">
            {tools.map((tools) => (
              <Tool key={tools.id} {...tools} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
