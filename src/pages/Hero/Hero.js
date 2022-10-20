import React, { useState, useEffect } from "react";
// import downloadble resume
import CV from "../../assets/files/Bryan_Palad.pdf";
// import profile image
import profile from "../../assets/img/my_pic.png";
// import fade effect
import Fade from "react-reveal/Fade";
//import down icon
import { CgChevronDown } from "react-icons/cg";
// import typing effect data
import { typing } from "../../core/utils/Hero";
// import smooth scrolling
import { Link } from "react-scroll";
import {TypingEffect} from "../../components";

const Hero = () => {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 20 ? setArrow(true) : setArrow(false);
    });
  });

  return (
    <section
      id="home"
      className="h-[100vh] flex items-center bg-primaryWhite dark:bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container bg-fixed mx-auto h-full flex flex-col justify-center">
        <div className="flex items-center h-full pt-8">
          {/* left-side */}
          <Fade left>
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className="flex text-xl text-black dark:text-white mb-[22px] lg:text-3xl">
                Hi, I'm Bryan Palad
              </p>
              <h1 className="text-3xl text-center text-black dark:text-white font-bold leading-[44px] md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-[1.2] md:tracking-[-2px]">
                I Build & Design <br /> Web Interfaces.
              </h1>
              <p className="pt-4 pb-8 text-lg text-black dark:text-white md:pt-6 md:pb-8 max-w-[480px] lg:text-3xl text-center lg:text-left ">
                I'm a <span className="-ml-2">&nbsp;</span>
                <TypingEffect typingText={typing}/>
              </p>
              {/* </p> */}
              <a href={CV} download>
                <button className="btn btn-md text-white bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                  Download CV
                </button>
              </a>
            </div>
          </Fade>
          <Fade right>
            {/* right-side */}
            <div className="hidden lg:flex flex-1 justify-center items-center h-full">
              <img className="h-[50%] heroBannerImg grayscale hover:grayscale-0 duration-500 rounded-3xl" src={profile} alt="" />
            </div>
          </Fade>
        </div>
        {/* down-arrow */}
        <div className="flex justify-center w-full items-center">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            <CgChevronDown
              className={`${
                arrow ? "opacity-0" : ""
              } mb-2 h-14 w-20 text-black dark:text-white cursor-pointer animate-bounce transition delay-300`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
