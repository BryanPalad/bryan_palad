import React from "react";
import "./about.css";
// import experience data
import { experience } from "../../core/utils/About";
// import icon
import { FiCalendar } from "react-icons/fi";
const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="timeline">
        {experience.map((item, index) => {
          return (
            <div className="timeline-item"  key={index}>
            <div className="circle-dot"></div>
            <h3 className="timeline-date flex flex-row gap-x-2 mb-2 text-accent font-semibold dark:font-normal">
              <FiCalendar/> <span className="mt-[-3px] font-body">{item.date}</span>
            </h3>
            <h4 className="timeline-title mb-2 font-black font-body text-md text-black dark:text-white uppercase">{item.designation}</h4>
            <p className="timeline-text tracking-tight text-justify text-black dark:text-white" style={{ marginBottom: "20px" }}>
              <span className='font-medium text-lg text-accent'>{item.subtitle}</span> - {item.desc1}
            </p>
            <p className="timeline-text tracking-tight text-black dark:text-white text-md text-justify">
              <span className='font-medium text-lg text-accent'>{item.subtitle2}</span> - {item.desc2}
            </p>
          </div>
          ) 
        })}
       
      </div>
    </div>
  );
};

export default Experience;
