import React from "react";
// import smooth scrolling
import { Link } from "react-scroll";
// import icons
import { BsEmojiSmile } from "react-icons/bs";
import { SiSemanticweb } from "react-icons/si";
// import components
import AboutMe from "./AboutMe";
import aboutMe from "../../assets/img/about/aboutme.svg";

import { motion } from "framer-motion";

// import Experience from "./Experience";
// import Trainings from "./Trainings";

// import {AppTabPanel} from "../../components";

const About = () => {
  const date = new Date();
  const year = date.getFullYear();
  const birthYear = 1999;
  const age = year - birthYear;

  return (
    <section id="about" className="section bg-secondaryWhite dark:bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto mt-2 flex lg:flex-row flex-col"
      >
        <div className="flex flex-col xl:flex-row gap-24 lg:w-2/3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="uppercase drop-shadow-lg shadow-black text-3xl tracking-normal text-black dark:text-white font-body mb-3 lg:text-6xl lg:tracking-wider lg:font-extrabold">
                About Me
              </h2>
              <p className="mt-4 mb-4 text-accent flex flex-col gap-x-2 text-center justify-center font-semibold md:flex-row lg:justify-start">
                Front-End Web Developer{" "}
                <span className="hidden md:block"> 🚀 </span>
                <span> Aspiring Full Stack Developer</span>
              </p>
              <hr className="mb-6 opacity-5" />
              <img
                src={aboutMe}
                alt="about me"
                className="block bounce mb-8 lg:hidden"
              />
              <AboutMe age={age} />
            </div>
            <div className="flex gap-3 lg:flex-row">
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                <button className="mt-5 btn btn-md text-white bg-accent hover:bg-accent-hover transition-all gap-1.5">
                  Hire me <BsEmojiSmile className="hidden lg:block" />
                </button>
              </Link>

              <Link
                to="portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                <button className="mt-5 btn btn-md text-white bg-accent hover:bg-accent-hover transition-all gap-1.5">
                  Projects <SiSemanticweb className="hidden lg:block" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-14 gap-24 w-full xl:flex-row lg:w-1/2 lg:ml-20 lg:mt-0">
          <img
            src={aboutMe}
            alt="about me"
            className="hidden bounce lg:block"
          />
          {/* <AppTabPanel
            TabTitle1={"🔓 Experience"}
            TabTitle2={"📃 Trainings / Cert"}
            Tab1={<Experience />}
            Tab2={<Trainings />}
          /> */}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
