import React from "react";
// import spinner
import { ClipLoader } from "react-spinners";
// import reusable component
import {AppTextField, AppTextArea} from "../../components";

const ContactFields = (props) => {
  const {
    form,
    handleSubmit,
    formValues,
    handleChange,
    formErrors,
    ing,
    loading,
    audioPlayer,
    NotificationSound,
  } = props;
  return (
    <>
      {/* FORM */}
      <form
        ref={form}
        className="space-y-8 w-full max-w-[780px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 lg:flex-row w-full lg:gap-8">
          <div className="w-full">
            <AppTextField
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
            <AppTextField
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
        <AppTextField
          type="text"
          name="subject"
          className="input"
          value={formValues.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
        <p className="errorTextArea"> {formErrors.subject}</p>
        <AppTextArea
          className="textarea"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="Your message"
        />
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
    </>
  );
};

export default ContactFields;
