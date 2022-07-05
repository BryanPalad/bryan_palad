import React from "react";

//import components
import Projects from "./Projects";
import { Fade } from "react-reveal";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-secondary min-h-[1400px]">
      <div className="container mx-auto">
        <Fade bottom>
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-right-[220px] before:hidden before:lg:block">
            My projects
          </h2>
          <p className="subtitle mb-10 lg:mb-20">Here are some of my built projects...</p>
        </div>
        </Fade>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
