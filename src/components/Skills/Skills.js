import React from "react";
// import skills data
import { skills } from "../../data";
import { Fade } from "react-reveal";
const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="mx-auto px-1">
        <Fade left>
        <div className="grid grid-cols-2 md:grid-flow-row md:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-5">
          {skills.map((item, index) => {
            return (
              <div className="flex item-center justify-center" key={index}>
                <img className="h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]" src={item.image} alt="skill" />
              </div>
            );
          })}
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
