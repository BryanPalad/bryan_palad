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
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title normal font-body text-3xl tracking-normal text-black dark:text-white lg:uppercase lg:tracking-wider lg:text-5xl">
              What other people say
            </h2>
            <p className="subtitle text-black dark:text-white">
              As i don't have testimonials yet, here are some motivational
              mottos of the best founders of famous technologies in the world.
            </p>
          </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
