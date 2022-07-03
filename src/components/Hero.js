import React from "react";

// import woman image
import WomanImg from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left-side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Bryan 👋
            </p>
            <h1 className="text-4xl text-white leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 text-white md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilitis quis ad.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              Work with me
            </button>
          </div>
          {/* right-side */}
          {/* <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
