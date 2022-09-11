import React from "react";
//import fade effect
import { Fade } from "react-reveal";
// import smooth scroll
import { Link } from "react-scroll";
//import services data
import { services } from "../../core/utils/Services";

const Services = () => {
  return (
    <section
      id="services"
      className="section bg-tertiaryWhite dark:bg-tertiary"
    >
      <div className="container mx-auto">
        {/* SECTION TITLE */}
        <Fade bottom>
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title mt-10 text-black dark:text-white dark:before:content-services before:content-services2 relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[160px] before:hidden before:lg:block">
              What i can do
            </h2>
            <p className="subtitle text-black dark:text-white">
              I will accept projects in the future...
            </p>
          </div>
        </Fade>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { name, description, img } = service;
            return (
              <div
                className="dark:bg-secondary bg-secondaryWhite p-6 rounded-2xl hover:translate-y-3 duration-300 cursor-pointer"
                key={index}
              >
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  <img className="mb-4" src={img} alt="services-img" />
                  <h4 className="text-xl font-semibold mb-2 dark:text-white text-black text-center">
                    {name}
                  </h4>
                  <p className="text-justify dark:text-white tracking-tighter text-black">
                    {description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
