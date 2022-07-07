import React from "react";
import "./about.css";
import { experience } from "../../data";

import { FiCalendar } from "react-icons/fi";
const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="timeline">
        {experience.map((item, index) => {
          return (
            <div className="timeline-item"  key={index}>
            <div className="circle-dot"></div>
            <h3 className="timeline-date flex flex-row gap-x-2 mb-2">
              <FiCalendar/> <span className="mt-[-3px]">{item.date}</span>
            </h3>
            <h4 className="timeline-title mb-2 font-body text-md text-white">{item.designation}</h4>
            <p className="timeline-text text-md text-justify" style={{ marginBottom: "20px" }}>
              <b>{item.subtitle}</b> - {item.desc1}
            </p>
            <p className="timeline-text text-md text-justify">
              <b>{item.subtitle2}</b> - {item.desc2}
            </p>
          </div>
          ) 
        })}
       
      </div>
    </div>
  );
};

export default Experience;
