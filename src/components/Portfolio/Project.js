import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RiSearchEyeLine } from "react-icons/ri";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Slide } from "react-slideshow-image";
import { collegeProjectModal as modalObj } from "../../data";
import "react-slideshow-image/dist/styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 670,
  bgcolor: "background.paper",
  border: "2px solid #fffff",
  borderRadius: "5px",
  overflow: 'hidden',
  p: 4,
  "@media (max-width: 767px)": {
    width: 400,
    marginTop: "15px",
  },
  "@media (max-width: 467px)": {
    width: 300,
    height: 610,
    marginTop: "15px",
  },
};

const Project = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-4 relative ease-out hover:ease-in">
          <img className="rounded-xl" src={item.image} alt="" />
          <video
            className="clip rounded-xl absolute opacity-0 z-1 top-0 object-cover h-full hover:opacity-100 "
            loop
            muted
            autoPlay
            controls=""
          >
            <source src={item.clip} type="video/mp4" />
            <source src={item.clip} type="video/ogg" />
          </video>
        </div>
        <div className="flex gap-8 mb-2">
          {item.pointer ? (
            <>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <div className="flex items-center">
                      <h1 className="text-black mt-2 font-logo md:mb-2 text-center text-lg md:text-2xl lg:text-left">
                        Online Appointment System for Fernandez Dental Clinic
                      </h1>
                      <AiOutlineClose
                        onClick={handleClose}
                        className="text-black text-3xl cursor-pointer absolute top-2 right-2"
                      />
                    </div>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Slide duration={2000} transitionDuration={800}>
                        {modalObj[0].sliderImg.map((item, index) => {
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
                      <hr className="mb-2" />
                      <h1 className="text-black dark:text-white text-lg md:text-2xl font-logo mt-2">
                        Main Functions
                      </h1>
                      <h3>
                        {modalObj[1].functionsList.map((item, index) => {
                          return (
                            <p
                              className="text-black dark:text-white font-logo text-md md:text-lg"
                              key={index}
                            >
                              {item.function}
                            </p>
                          );
                        })}
                      </h3>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
              <p
                onClick={handleOpen}
                className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent"
              >
                View Details <RiSearchEyeLine />
              </p>
              <a href={item.github} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                  Github <FiGithub />
                </p>
              </a>
            </>
          ) : (
            <>
              <a href={item.demo} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                  Live Demo <FiExternalLink />
                </p>
              </a>
              <a href={item.github} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                  Github <FiGithub />
                </p>
              </a>
            </>
          )}
        </div>
        <p className="capitalize text-accent text-sm mb-3">
          {item.description}
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3 text-black dark:text-white">{item.name}</h3>
      </div>
    </>
  );
};

export default Project;
