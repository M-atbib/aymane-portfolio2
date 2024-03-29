"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import { logo } from "@/assets";
import { navLinks, socials } from "@/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const path = usePathname();

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(false);
  }, [path]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="navbar"
    >
      <div className="navbar-content">
        <Link href="/">
          <Image src={logo} className="img" alt="logo" priority />
        </Link>

        <div
          className={`burger ${showNav && "active"}`}
          onClick={handleShowNav}
        />

        <div className={`navbar-content_items ${showNav && "active"}`}>
          <ul className="navbar-content_items-links">
            {navLinks.map(({ id, title, url }) => (
              <li className="item" key={id}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className="navbar-content_items-socials">
            {socials.map(({ id, content, url }) => (
              <Link
                href={url}
                className="social"
                key={id}
                onClick={() => setShowNav(false)}
              >
                {content}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
