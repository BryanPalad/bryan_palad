import React from "react";
// import icon
import { SiNintendogamecube } from "react-icons/si";
// import fade effect
import { Fade } from "react-reveal";
//import social data
import { social } from "../../core/utils/Header";

const Footer = () => {
  return (
    <footer className="bg-tertiaryWhite dark:bg-tertiary py-12">
      <div className="container mx-auto">
        <Fade bottom>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
            {/* social icons    */}
            <div className="flex space-x-6 items-center">
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <a
                    className="text-black dark:text-white text-3xl text-base hover:text-accent-hover dark:hover:text-accent-hover"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
            {/* copyright */}
            <p className="text-black dark:text-white">
              &copy; 2022 Bryan Palad. All rights reserved.
            </p>
            {/* LOGO */}
            <div>
              <p className="text-3xl font-logo text-black dark:text-white flex items-center gap-2">
                Bryan Palad <SiNintendogamecube />
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
