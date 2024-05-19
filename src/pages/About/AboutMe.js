import React from "react";

const AboutMe = ({ age, yearsOfWork, monthsOfWork }) => {
  
  return (
    <div>
      <p className="font-subtitle mb-2 text-justify text-black dark:text-white">
        Hello! I'm a {age}-year-old with a passion for technology and programming. I earned my
        BS in Information Technology in 2019, and my journey into the world of coding began
        when I took on the role of lead programmer for two challenging capstone projects.
        Working extensively with languages like C#, PHP and MySQL, during this time 
        ignited my love for programming.
        <br />
        <br />
        My first job was as an Admin Staff for over 2 years, where I learned about efficiency and organization. 
        But I soon realized my passion was coding, so I dove back into it, 
        learning all the latest tech. Now, with {yearsOfWork} year and {monthsOfWork} months of dev work experience, 
        I specialize in web development, focusing on creating sleek and user-friendly interfaces.
      </p>
    </div>
  );
};

export default AboutMe;
