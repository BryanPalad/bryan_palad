import React from "react";
//import component
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section bg-secondaryWhite dark:bg-secondary min-h-[1400px]"
    >
      <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title normal font-body text-3xl tracking-normal text-black dark:text-white lg:text-5xl lg:tracking-wider lg:uppercase">
              My projects
            </h2>
            <p className="subtitle mb-10 lg:mb-20 text-black dark:text-white">
              Here are some of my built projects...
            </p>
          </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
