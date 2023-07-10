"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { logo } from "@/assets";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="py-8 relative"
    >
      <div className="" />

      <div className="w-[90%] mx-auto">
        <div className="my-[40px] h-[2px] bg-gunmetal opacity-20" />

        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-4">
          <Image src={logo} width={90} alt="logo" />
          <p className="font-normal text-[12px] text-teal text-center">
            Copyright ©️ 2021 - 2022 Aymane Errahmani. All rights reserved.
          </p>

          <div className="flex flex-row gap-[20px] text-2xl text-gunmetal">
            <Link
              href="https://www.linkedin.com/in/aymane-er-rrahmani-27502522a"
              className="duration-500 hover:scale-90"
            >
              <BsLinkedin />
            </Link>
            <Link href="#" className="duration-500 hover:scale-90">
              <BsInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100008360777807&mibextid=LQQJ4d"
              className="duration-500 hover:scale-90"
            >
              <BsFacebook />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
