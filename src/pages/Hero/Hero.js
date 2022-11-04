import React from "react";
// import downloadble resume
import CV from "../../assets/files/Bryan_Palad.pdf";
// import profile image
import profile from "../../assets/img/my_pic.png";
// import typing effect data
import { typing } from "../../core/utils/Hero";

import {TypingEffect} from "../../components";

const Hero = () => {

  return (
    <section
      id="home"
      className="h-[100vh] flex flex-col items-center bg-primaryWhite dark:bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container bg-fixed mx-auto h-full flex flex-col justify-between lg:justify-center">
        <div className="flex flex-col items-center h-1/2 gap-4 pt-0 lg:gap-0 lg:pt-8 lg:flex-row lg:h-full ">
          {/* left-side */}
            <div className="order-2 flex-1 flex flex-col items-center lg:items-start lg:order-1">
              <p className="flex text-xl font-subtitle text-black dark:text-white mb-[22px] lg:text-3xl">
                Hi, I'm Bryan Palad
              </p>
              <h1 className="text-3xl text-center text-black dark:text-white font-bold leading-[44px] md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-[1.2] md:tracking-[-2px]">
                I Build & Design <br /> Web Interfaces.
              </h1>
              <p className="font-subtitle pt-4 pb-8 text-lg text-black dark:text-white md:pt-6 md:pb-8 max-w-[480px] lg:text-3xl text-center lg:text-left ">
                I'm a <span className="-ml-2">&nbsp;</span>
                <TypingEffect typingText={typing}/>
              </p>
              {/* </p> */}
              <a href={CV} download>
              <button>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Download CV
                </span>
              </button>
                {/* <button className="btn btn-md text-white bg-accent rounded-full hover:bg-accent-hover md:btn-lg transition-all">
                  Download CV
                </button> */}
              </a>
            </div>
            {/* right-side */}
            <div className="order-1 lg:flex flex-1 justify-center items-center h-full lg:order-2">
              <img className="h-[90%] heroBannerImg grayscale hover:grayscale-0 duration-500 rounded-3xl lg:h-[50%]" src={profile} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
