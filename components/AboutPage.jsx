"use client";

import { Contact } from "@/components";
import { BigTitle } from "@/components/subcomponent/CustomComponents";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <BigTitle title="Who are you hiring?" classN="about-title" />

        <motion.div variants={textVariant(1.2)}>
          <p className="about-text">
            Welcome to my portfolio website! I'm{" "}
            <span className="font-bold">Aymane Er Rrahmani</span>, a video
            editor and VFX artist. I'm passionate about visual storytelling and
            dedicated to creating captivating and immersive video content. I
            specialize in using a combination of industry-leading software,
            including{" "}
            <span className="font-bold">
              {" "}
              Adobe Premiere Pro, After Effects, and Blender
            </span>
            . With Adobe Premiere Pro, I bring together footage, audio, and
            effects to craft seamless and engaging videos. After Effects allows
            me to take my work a step further by adding stunning visual effects,
            motion graphics, and animations. Additionally, my proficiency in
            Blender enables me to create 3D models, animations, and VFX
            elements, adding another dimension to my creative visuals.
            Throughout my career, I have worked on a diverse range of projects,
            including <span className="font-bold">commercials</span>, and{" "}
            <span className="font-bold">promotional</span> videos. Thank you for
            visiting my portfolio website. Please take the time to explore my
            collection of projects, which will provide you with a comprehensive
            understanding of my creative work.
          </p>
        </motion.div>
        <Contact />
      </motion.div>
    </main>
  );
};

export default AboutPage;
