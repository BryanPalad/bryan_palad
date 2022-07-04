import React, {useState, useEffect} from "react";
import ReactTypingEffect from "react-typing-effect";
import CV from "../../assets/files/Bryan_Palad_CV.pdf";
import profile from "../../assets/img/gradpic.jpg";
import downArrow from "../../assets/img/down-arrow.svg";
import Fade from "react-reveal/Fade";
import { typing } from "../../data";
import { Link } from "react-scroll";
const Hero = () => {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 20 ? setArrow(true) : setArrow(false);
    })
  })
  return (
    <section
      id="home"
      className="h-[100vh] flex items-center bg-secondary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex items-center h-full pt-8">
          {/* left-side */}
          <Fade left>
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className="text-xl text-accent text-md mb-[22px]">
                Hi there, I'm Bryan 👋
              </p>
              <h1 className="text-3xl text-white font-bold leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] md:tracking-[-2px]">
                I Build & Design <br /> Web Interfaces.
              </h1>
              <p className="pt-4 pb-8 text-lg text-white md:pt-6 md:pb-8 max-w-[480px] lg:text-3xl text-center lg:text-left ">
                I'm a <span className="-ml-2">&nbsp;</span>
                <ReactTypingEffect
                  text={typing}
                  cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                  speed={50}
                  eraseSpeed={50}
                  eraseDelay={1000}
                  typingDelay={120}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text.split("").map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span key={key} className="text-accent">
                              {char}
                            </span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
              </p>
              {/* </p> */}
              <a href={CV} download>
                <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                  Download CV
                </button>
              </a>
            </div>
          </Fade>
          <Fade right>
            {/* right-side */}
            <div className="hidden lg:flex flex-1 justify-center items-center h-full">
              <img className="h-1/2 rounded-full" src={profile} alt="" />
            </div>
          </Fade>
        </div>
        {/* down-arrow */}
        <div className="flex justify-center w-full items-center">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            <img className={`${arrow ? 'opacity-0' : ''} mb-2 h-14 l-14 cursor-pointer animate-bounce transition delay-300`} src={downArrow} alt='down-arrow'/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
