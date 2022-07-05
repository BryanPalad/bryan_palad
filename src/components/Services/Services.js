import React from "react";
import { Fade } from "react-reveal";

//import services data
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* SECTION TITLE */}
        <Fade bottom>
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title mt-10 before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-right-[70px] before:hidden before:lg:block">
            What i can do for clients
          </h2>
          <p className="subtitle">
            
          </p>
        </div>
        </Fade>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { name, description, img } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <img className='mb-4' src={img} alt="services-img" />
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
