import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

//import services data
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* SECTION TITLE */}
        <Fade bottom>
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title mt-10 before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[160px] before:hidden before:lg:block">
              What i can do
            </h2>
            <p className="subtitle">I will accept projects in the future...</p>
          </div>
        </Fade>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { name, description, img } = service;
            return (
              <div
                className="bg-secondary p-6 rounded-2xl hover:translate-y-3 duration-300 cursor-pointer"
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
                  <h4 className="text-xl font-medium mb-2">{name}</h4>
                  <p className="text-justify">{description}</p>
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
