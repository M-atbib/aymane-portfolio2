"use client";

import { motion } from "framer-motion";
import { textVariant, textVariant2 } from "../../utils/motion";

export const BigTitle = ({ title, classN }) => (
  <motion.h1 variants={textVariant(1.1)} className={classN}>
    {title}
  </motion.h1>
);

export const Title = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="title"
  >
    {title}
  </motion.h2>
);
