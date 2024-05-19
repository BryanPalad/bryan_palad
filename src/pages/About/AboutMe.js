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
        Following graduation, I transitioned on a different path, I worked for over 2 years
        as an Admin Staff, where I honed my skills in efficiency, organization, and attention to detail. 
        However, I soon realized that my true passion lay in the world of coding, where 
        I yearned for new challenges.
        <br/>
        <br/>
        I reacquainted myself with the latest technologies and fully embraced a career 
        in software/web development. Today, with {yearsOfWork} year and {monthsOfWork} months of dev work experience, 
        I specialize in crafting elegant and user-friendly front-end web interfaces, 
        bridging the gap between technology and human interaction.
      </p>
    </div>
  );
};

export default AboutMe;
