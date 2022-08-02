import React from "react";

const AppTextField = (props) => {
  const { className, name, type, value, onChange, placeholder } = props;
  return (
    <>
      <input
        className={className}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default AppTextField;
