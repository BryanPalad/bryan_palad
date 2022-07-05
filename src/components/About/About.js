import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
// import image
import Image from "../../assets/img/anonymous.jpg";
import { BsEmojiSmile } from "react-icons/bs";
import { MdImportantDevices } from "react-icons/md";

const About = () => {
  const date = new Date();
  const year = date.getFullYear();
  const birthYear = 1999;
  const age = year - birthYear;

  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto mt-5">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto  lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <Fade bottom>
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  About Me
                </h2>
                <p className="mt-4 mb-4 text-accent flex flex-col gap-x-2 text-center justify-center md:flex-row lg:justify-start">
                  Front-End Web Developer{" "}
                  <span className="hidden md:block"> &gt; </span>
                  <span> Aspiring FullStack Developer</span>
                </p>
              </Fade>
              <hr className="mb-8 opacity-5" />
              <p className="mb-2 text-justify">
                {age} years old, BS Information Technology graduate year 2019,
                became a lead programmer on our 2 thesis projects and had an
                experience using C#, MySQL and PHP despite not having enough
                resources such as stable internet connection for self learning.
                Landed my first job in a non-tech company where i spent almost 2
                years and 3 months as an Admin Staff. I suddenly thought to
                myself, it's about time to get back to coding and i've decided
                to leave my current job, move forward and pursue this
                programming career.
              </p>
            </div>
            <Fade bottom>
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
                  <button className="mt-5 btn btn-md bg-accent hover:bg-accent-hover transition-all gap-1.5">
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
                  <button className="mt-5 btn btn-md bg-accent hover:bg-accent-hover transition-all gap-1.5">
                    Projects <MdImportantDevices className="hidden lg:block" />
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
