import React from "react";
import { Fade } from "react-reveal";

import { ClipLoader } from "react-spinners";

// import contact data
import { contact } from "../../data";


const iframe = '<iframe class="ml-0 md:ml-16" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1149.7606347999063!2d121.13808394661991!3d14.234640126486074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1657019013675!5m2!1sen!2sph" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'; 
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

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
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        {/* section title */}
        <Fade bottom>
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opcaity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle">
           You can directly connect me from here, Just fill up the information below, I am very responsive to messages...
          </p>
        </div>
        </Fade>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* INFO */}
          <div className="flex justify-center items-center flex-1 flex-col space-y-8 mb-12 lg:items-left lg:justify-start lg:mb-0 lg:pt-2 lg:text-left lg:items-start">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
            <Iframe iframe={iframe}/>
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
