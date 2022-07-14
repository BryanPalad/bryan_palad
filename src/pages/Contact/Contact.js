import React from "react";
// import fade effect
import { Fade } from "react-reveal";
// import spinner
import { ClipLoader } from "react-spinners";
// import contact data
import { contact } from "../../constants/Contact";

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
        <Fade bottom>
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title text-black dark:text-white dark:before:content-contact before:content-contact2 relative before:absolute before:opcaity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
              Contact Me
            </h2>
            <p className="subtitle text-black dark:text-white">
              You can directly connect me from here, Just fill up the
              information below, I am very responsive to messages...
            </p>
          </div>
        </Fade>
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
          {/* FORM */}
          <form
            ref={form}
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-6 lg:flex-row w-full lg:gap-8">
              <div className="w-full">
                <input
                  className="input"
                  name="fullname"
                  type="text"
                  value={formValues.fullname}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                />
                <p className="errorTextInput"> {formErrors.fullname}</p>
              </div>
              <div className="w-full">
                <input
                  className="input"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                <p className="errorTextInput"> {formErrors.email}</p>
              </div>
            </div>
            <input
              type="text"
              name="subject"
              className="input"
              value={formValues.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            <p className="errorTextArea"> {formErrors.subject}</p>
            <textarea
              className="textarea"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
            <p className="errorTextArea"> {formErrors.message}</p>
            <button
              type="submit"
              className="btn btn-lg bg-accent hover:bg-accent-hover flex gap-2"
            >
              Send{ing} Message
              <ClipLoader
                className="pl-2"
                color={"white"}
                loading={loading}
                size={10}
              />
              <audio ref={audioPlayer} src={NotificationSound} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
