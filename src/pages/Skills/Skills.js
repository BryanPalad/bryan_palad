import React from "react";
import { skills } from "../../core/utils/Skills";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <section className="bg-tertiaryWhite dark:bg-tertiary py-12">
      <div className="mx-auto px-1">
        <Fade bottom>
          <h2 className="text-3xl text-center text-black dark:text-white font-medium mt-[-10px] mb-10 md:hidden">
            Technical Skills
          </h2>
          <div className="grid flex flex-col grid-cols-2 md:grid-flow-row md:grid-cols-7 lg:grid-cols-14 gap-y-5">
            {skills.map((item, index) => {
              return (
                <div className="flex item-center justify-center" key={index}>
                  <img
                    className="h-[70px] w-[70px] lg:h-[80px] lg:w-[85px] hover:scale-110 duration-300"
                    src={item.image}
                    alt="skill"
                  />
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
