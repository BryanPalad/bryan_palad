import React from "react";

const AppTextArea = (props) => {
const {className, name, value, onChange, placeholder} = props;
  return (
    <>
      <textarea
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default AppTextArea;
