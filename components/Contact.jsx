"use client";

import { BigTitle } from "./subcomponent/CustomComponents";
import { socials } from "@/constants";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <BigTitle title="Let's Work Together" classN="contact-title" />

        <motion.div variants={slideIn("left", "tween", 1.3, 1)}>
          <p>Email: contact@gmail.com</p>
        </motion.div>

        <motion.div variants={slideIn("left", "tween", 1.4, 1)}>
          <p>Number: +212 63 20 15 14</p>
        </motion.div>

        <motion.div variants={slideIn("left", "tween", 1.5, 1)}>
          <div className="contact-socials">
            {socials.map(({ id, content, url }) => (
              <Link href={url} className="social" key={id}>
                {content}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
