import React from "react";
// import contact data
import { contact } from "../../core/utils/Contact";
// import contactfield component
import ContactFields from "./ContactFields";

const Contact = ({
  form,
  handleSubmit,
  formValues,
  handleChange,
  formErrors,
  ing,
  loading,
  audioPlayer,
  NotificationSound,
}) => {
  return (
    <section id="contact" className="section bg-primaryWhite dark:bg-primary">
      <div className="container mx-auto">
        {/* section title */}
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title text-black font-body normal text-3xl tracking-normal dark:text-white lg:uppercase lg:tracking-wider lg:text-5xl">
              Contact Me
            </h2>
            <p className="subtitle text-black dark:text-white">
              You can directly connect me from here, Just fill up the
              information below, I am very responsive to messages...
            </p>
          </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* INFO */}
          <div className="flex flex-1 flex-col space-y-8 mb-12 lg:items-left lg:justify-start lg:mb-0 lg:pt-2 lg:text-left lg:items-start">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1 text-black dark:text-white">
                      {title}
                    </h4>
                    <p className="mb-1 text-black dark:text-white">
                      {subtitle}
                    </p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ContactFields
            form={form}
            handleSubmit={handleSubmit}
            formValues={formValues}
            handleChange={handleChange}
            formErrors={formErrors}
            ing={ing}
            loading={loading}
            audioPlayer={audioPlayer}
            NotificationSound={NotificationSound}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
