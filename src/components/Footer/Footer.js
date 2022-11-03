import React from "react";
// import icon
import { SiNintendogamecube } from "react-icons/si";
// import fade effect
import { Fade } from "react-reveal";
//import social data
import { social } from "../../core/utils/Header";

const Footer = () => {
  return (
    <footer className="bg-tertiaryWhite dark:bg-tertiary py-10 lg:py-8">
      <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
            {/* social icons    */}
            <div className='flex flex-col gap-4 justify-center items-center'>
              <div>
                <p className='text-black dark:text-white font-medium'>Follow Me @</p>
              </div>
              <div className="flex space-x-6 items-center">
                {social.map((item, index) => {
                  const { href, icon } = item;
                  return (
                    <a
                      className="text-black dark:text-white text-3xl text-base bg-secondaryWhite dark:bg-secondary p-2 rounded-full hover:scale-110 duration-300"
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
            </div>

            {/* copyright */}
            <div className='flex flex-col gap-2'>
            <p className="text-black dark:text-white text-center">
              &copy; 2022 Bryan Palad. All rights reserved.
            </p>
            <p className="text-black dark:text-white text-center">
              Made with React Js and TailwindCSS
            </p>
            </div>
            {/* LOGO */}
            <div>
              <p className="text-3xl font-logo text-black dark:text-white flex items-center gap-2  cursor-pointer hover:text-accent duration-300">
              BRYAN<SiNintendogamecube />
              </p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
