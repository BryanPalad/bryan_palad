import React from "react";
// import for image sliders
import { Slide } from "react-slideshow-image";
// import for react-slideshow
import "react-slideshow-image/dist/styles.css";

const AppSlide = (props) => {
const {slideArray, duration, transitionDuration} = props;
  return (
    <>
      <Slide duration={duration} transitionDuration={transitionDuration}>
        {slideArray.map((item, index) => {
          return (
            <img
              className="mb-2"
              src={item.slide}
              alt="portfolio"
              key={index}
            />
          );
        })}
      </Slide>
    </>
  );
};

export default AppSlide;
