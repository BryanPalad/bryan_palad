import React from "react";

const AboutMe = ({ age }) => {
  return (
    <div>
      <p className="mb-2 text-justify text-black dark:text-white">
        {age} years old, BS Information Technology graduate year 2019, became a
        lead programmer on our 2 thesis projects and had a hands-on experience
        using C#, MySQL and PHP despite not having enough resources such as
        stable internet connection for self learning.
        <br />
        <br />
        Landed my first job in a non-tech company where i spent almost 2 years
        and 3 months as an Admin Staff (QMS Assistant and Inventory Controller).
        I learned so much about my role. But suddenly there was a feeling that
        it's not challenging anymore , and i think it's about time to get back
        to coding then i've decided to leave my current job, refresh my
        knowledge and pursue this programming career.
      </p>
    </div>
  );
};

export default AboutMe;
