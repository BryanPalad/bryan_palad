import React, { useState } from "react";
//import icons
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RiSearchEyeLine } from "react-icons/ri";
// import for modal
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
// import for skills chip
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import for image sliders
import { Slide } from "react-slideshow-image";
// import college project modal
import { collegeProjectModal as modalObj } from "../../constants/Portfolio";
// import for drop down tab // accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import for react-slideshow
import "react-slideshow-image/dist/styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 670,
  maxHeight: 900,
  bgcolor: "background.paper",
  border: "2px solid #fffff",
  borderRadius: "5px",
  overflow: "scroll",
  display: "block",
  p: 4,
  "@media (max-width: 1367px)": {
    width: 400,
    maxHeight: 680,
  },
  "@media (max-width: 767px)": {
    width: 400,
    maxHeight: 610,
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
                    <div className="flex justify-center items-center">
                      <h1 className="text-black mt-2 font-logo items-center md:mb-2 text-center text-2xl md:text-2xl lg:text-center">
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
                      <h1 className="text-black text-2xl md:text-2xl font-logo mt-2 text-center mb-2">
                        Main Functions
                      </h1>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="text-md">
                            What Patients can do?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <h3>
                              {modalObj[1].patientsFunction.map(
                                (item, index) => {
                                  return (
                                    <p
                                      className="text-black font-logo text-md md:text-lg"
                                      key={index}
                                    >
                                      {item.function}
                                    </p>
                                  );
                                }
                              )}
                            </h3>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>What Dentists can do?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <h3>
                              {modalObj[2].dentistsFunction.map(
                                (item, index) => {
                                  return (
                                    <p
                                      className="text-black font-logo text-md md:text-lg"
                                      key={index}
                                    >
                                      {item.function}
                                    </p>
                                  );
                                }
                              )}
                            </h3>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
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
        <Stack direction="row" spacing={0.5}>
          {item.description.map((desc, index) => {
            return (
              <div key={index}>
                <Chip
                  label={desc}
                  style={{ color: "#42cef5", fontWeight: 400 }}
                  variant="outlined"
                />
              </div>
            );
          })}
        </Stack>

        <p className="capitalize text-accent text-sm mb-3">
          {/* {item.description} */}
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3 text-black dark:text-white">
          {item.name}
        </h3>
      </div>
    </>
  );
};

export default Project;
