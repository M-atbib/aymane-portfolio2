import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Tool = ({ title, progression, icon }) => {
  return (
    <div className="tools-container_list-item">
      <div className="tools-container_list-item_icons">{icon}</div>
      <div className="tools-container_list-item_content">
        <h2>{title}</h2>
        <div className="progress-bg">
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="progress-fill"
            style={{ width: progression }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
