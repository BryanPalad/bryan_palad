import React from "react";
import { skills } from "../../core/utils/Skills";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="bg-tertiaryWhite dark:bg-tertiary py-12">
      <div className="mx-auto px-1">
        <h2 className="text-3xl text-center text-black dark:text-white font-medium font-subtitle mt-[-10px] mb-10">
          Technical Skills
        </h2>
        <div className="grid flex-col grid-cols-2 md:grid-flow-row md:grid-cols-8 lg:grid-cols-16 gap-y-8">
          {skills.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center gap-2.5"
                key={index}
              >
                <img
                  className="h-[70px] w-[70px] lg:h-[80px] lg:w-[85px] transition hover:scale-110 duration-300"
                  src={item.image}
                  alt="skill"
                />
                <h2 className="text-lg font-subtitle font-medium text-black dark:text-white">
                  {item.title}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
