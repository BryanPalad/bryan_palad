import React from "react";
import "./about.css";
// import icon
import { FiCalendar } from "react-icons/fi";
// import trainings data
import { trainings, internship } from "../../core/utils/About";

const Trainings = () => {
  return (
    <div className="flex flex-col">
      <div className="timeline">
        {internship.map((item, index) => {
          return (
            <div className="timeline-item" key={index}>
              <div className="circle-dot"></div>
              <h3 className="timeline-date flex text-black dark:text-white flex-row gap-x-2 mb-2">
                <FiCalendar />{" "}
                <span className="mt-[-3px] text-black dark:text-white font-body">
                  {item.date}
                </span>
              </h3>
              <h4 className="timeline-title mb-2 font-body text-md text-black dark:text-white">
                {item.title}
              </h4>
              <p className="timeline-text text-md text-justify text-black dark:text-white">
                {item.desc}
              </p>
            </div>
          );
        })}

        {trainings.map((item, index) => {
          return (
            <div className="timeline-item" key={index}>
              <div className="circle-dot"></div>
              <h3 className="timeline-date flex text-black dark:text-white flex-row gap-x-2 mb-2">
                <FiCalendar />{" "}
                <span className="mt-[-3px] text-black dark:text-white font-body">
                  {item.date}
                </span>
              </h3>
              <h4 className="timeline-title">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={item.style}
                    title={item.title}
                  ></img>
                </a>
              </h4>
              <p className="timeline-text">
                <div className="simplilearn text-black dark:text-white ">
                  <a href={item.cert1} target="_blank" rel="noreferrer">
                    {item.certName1}
                  </a>
                  <br />
                  <a href={item.cert2} target="_blank" rel="noreferrer">
                    {item.certName2}
                  </a>
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainings;
