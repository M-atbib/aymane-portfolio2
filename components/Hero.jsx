"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { trailer } from "@/assets";
import { BigTitle } from "./subcomponent/CustomComponents";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className="hero"
    >
      <div className="hero-content">
        <BigTitle
          title="Welcome to my personal portfolio"
          classN="hero-content_title"
        />
        <motion.div variants={textVariant(1.2)}>
          <p className="hero-content_text">
            Hi! I'm Aymane Er Rrahmani, a video editor and VFX artist. I'm
            passionate about visual storytelling and dedicated to creating
            captivating and immersive video content. I specialize in using a
            combination of industry-leading software, including Adobe Premiere
            Pro, After Effects, and Blender
          </p>
          <Link href="/about" className="button-gradient">
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.div variants={textVariant(1.2)} className="hero-video">
        <video
          src={trailer}
          autoPlay
          controls
          muted
          className="w-[100%] rounded-[20px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
