import React from "react";
//import fade effect
import { Fade } from "react-reveal";
// import components
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section bg-secondaryWhite dark:bg-secondary"
    >
      <div className="container mx-auto">
        <Fade bottom>
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title text-black dark:text-white dark:before:content-testimonials before:content-testimonials2 relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
              What other people say
            </h2>
            <p className="subtitle text-black dark:text-white">
              As i don't have testimonials yet, here are some motivational
              mottos of the best founders of famous technologies in the world.
            </p>
          </div>
        </Fade>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
