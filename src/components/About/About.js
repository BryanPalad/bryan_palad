import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";

import { BsEmojiSmile } from "react-icons/bs";
import { SiSemanticweb } from "react-icons/si";

// import image1 from "../../assets/img/about/tspc.jpg";
// mui tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Trainings from "./Trainings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const date = new Date();
  const year = date.getFullYear();
  const birthYear = 1999;
  const age = year - birthYear;

  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto mt-2 flex lg:flex-row flex-col">
        <div className="flex flex-col xl:flex-row gap-24 lg:w-2/3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <Fade bottom>
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  About Me
                </h2>
                <p className="mt-4 mb-4 text-accent flex flex-col gap-x-2 text-center justify-center md:flex-row lg:justify-start">
                  Front-End Web Developer{" "}
                  <span className="hidden md:block"> &gt; </span>
                  <span> Aspiring FullStack Developer</span>
                </p>
              </Fade>
              <hr className="mb-6 opacity-5" />
              <AboutMe age={age} />
            </div>
            <Fade bottom>
              <div className="flex gap-3 lg:flex-row">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  <button className="mt-5 btn btn-md bg-accent hover:bg-accent-hover transition-all gap-1.5">
                    Hire me <BsEmojiSmile className="hidden lg:block" />
                  </button>
                </Link>

                <Link
                  to="portfolio"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  <button className="mt-5 btn btn-md bg-accent hover:bg-accent-hover transition-all gap-1.5">
                    Projects <SiSemanticweb className="hidden lg:block" />
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>

        <div className="flex flex-col mt-14 gap-24 w-full xl:flex-row lg:w-1/2 lg:ml-20 lg:mt-0">
         <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} textColor="primary" aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor:'white'}}} centered>
                  <Tab label={<span className="text-white">Experience</span>} {...a11yProps(0)} />
                  <Tab label={<span className="text-white">Trainings / Certs</span>} {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Experience/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Trainings />
              </TabPanel>
            </Box>
        </div>

      </div>
    </section>
  );
};

export default About;
