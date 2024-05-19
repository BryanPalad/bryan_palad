import React from "react";
// import smooth scrolling
import { Link } from "react-scroll";
// import icons
import { BsCheckCircleFill} from "react-icons/bs";
import { SiSemanticweb } from "react-icons/si";
// import components
import AboutMe from "./AboutMe";
import aboutMe from "../../assets/img/about/aboutme.svg";

import { motion } from "framer-motion";

// import Experience from "./Experience";
// import Trainings from "./Trainings";

// import {AppTabPanel} from "../../components";

const About = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const birthYear = 1999;
  const age = year - birthYear;

  // Software||Web Development Career start day month and year.
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the month starting from 1 (January is 1)
  
  const jobStartDate = new Date('2022-12-12'); // Start date in YYYY-MM-DD format
  const jobStartYear = jobStartDate.getFullYear();
  const jobStartMonth = jobStartDate.getMonth() + 1; // Adding 1 to get the month starting from 1 (January is 1)
  const jobStartDay = jobStartDate.getDate();
  
  let yearsOfWork = currentYear - jobStartYear;
  let monthsOfWork = currentMonth - jobStartMonth;
  
  // Adjust years and months if current day is earlier than job start day or month
  if (currentDate.getDate() < jobStartDay) {
      monthsOfWork--;
  }
  if (monthsOfWork < 0) {
      yearsOfWork--;
      monthsOfWork += 12;
  }

  return (
    <section id="about" className="section bg-secondaryWhite dark:bg-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto mt-2 flex lg:flex-row flex-col"
      >
        <div className="flex flex-col xl:flex-row gap-24 lg:w-2/3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="uppercase drop-shadow-lg shadow-black text-3xl tracking-normal text-black dark:text-white font-body mb-3 lg:text-6xl lg:tracking-wider lg:font-extrabold">
                About Me
              </h2>
              <p className="mt-4 mb-4 text-accent flex flex-col gap-x-2 text-center justify-center font-semibold md:flex-row lg:justify-start">
                Software Developer
                <span className="hidden md:block"> 🚀 </span>
                <span> Front End Engineer</span>
              </p>
              <hr className="mb-6 opacity-5" />
              <img
                src={aboutMe}
                alt="about me"
                className="block bounce mb-8 lg:hidden"
              />
              <AboutMe age={age} yearsOfWork={yearsOfWork} monthsOfWork={monthsOfWork}/>
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
                <button className="mt-5">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">
                    {" "}
                    <div className="flex items-center gap-1.5">
                      Hire me <BsCheckCircleFill className="hidden lg:block" />
                    </div>
                  </span>
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
                <button className="mt-5">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">
                    {" "}
                    <div className="flex items-center gap-1.5">
                      Projects <SiSemanticweb className="hidden lg:block" />
                    </div>
                  </span>
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
