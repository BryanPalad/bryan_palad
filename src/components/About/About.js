import React from "react";
import { Link } from "react-scroll";

// import image
import Image from "../../assets/img/about.webp";

const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto mt-5">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto  lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                About
              </h2>
              <p className="mt-4 mb-4 text-accent flex gap-x-2 text-center justify-center lg:justify-start">
                Front-End Web Developer{" "}
                <span className="hidden md:block"> &gt; </span> Aspiring FullStack
                Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                BS Information Technology graduate year 2019, became a lead
                programmer on our 2 thesis projects and had an experience using
                C#, MySQL and PHP despite not having enough resources such as
                stable internet connection for self learning. Landed my first
                job in a non-tech company where i spent almost 2 years and 3
                months as an Admin Staff. I suddenly thought to myself, it's
                about time to get back to coding and so i've decided to leave my current job,
                move forward and pursue this programming career.
              </p>
            </div>

            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              <button className="mt-5 btn btn-md bg-accent hover:bg-accent-hover transition-all">
                Hire me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
