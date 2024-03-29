import React, { useState } from "react";
//import navigation data
import { navigation } from "../../core/utils/Header";
//import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
//import components
import Socials from "./Socials";
// import framer motion
import { motion } from "framer-motion";
// import Link
import { Link } from "react-scroll";
//import picture
import profile from "../../assets/img/profile.jpg";
// import darkk mode or light mode
import ThemeSwitch from "../ThemeSwitch";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-black dark:text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-white dark:bg-black fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>
        {/* profile image */}
        <img
          src={profile}
          className="navImg h-1/5 rounded-full mb-8 lg:hidden"
          alt=""
        />
        {/* mapping navigation data */}
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                onClick={() => setIsOpen(false)}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl font-body cursor-pointer text-black dark:text-white capitalize hover:text-accent-hover dark:hover:text-accent-hover"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <ThemeSwitch mobile />
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
