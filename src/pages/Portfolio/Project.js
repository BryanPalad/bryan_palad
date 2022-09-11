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
// import college project modal
import { collegeProjectModal as modalObj } from "../../core/utils/Portfolio";
//import components
import {AppChip, AppAccordion, AppSlide} from "../../components";

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
  },
  "@media (max-width: 467px)": {
    width: 300,
    height: 610,
  },
};

const Project = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <img className="rounded-xl dark:bg-white bg-none hover:scale-105 duration-300" src={item.image} alt="" />
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
                      <AppSlide slideArray={modalObj[0].sliderImg} duration={2000} transitionDuration={800}/>
                      <hr className="mb-2" />
                      <h1 className="text-black text-2xl md:text-2xl font-logo mt-2 text-center mb-2">
                        Main Functions
                      </h1>
                      <AppAccordion title={'What Patients can do?'} accordionArray={modalObj[1].patientsFunction}/>
                      <AppAccordion title={'What Dentists can do?'} accordionArray={modalObj[2].dentistsFunction}/>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
              <p
                onClick={handleOpen}
                className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent dark:hover:text-accent"
              >
                View Details <RiSearchEyeLine />
              </p>
              <a href={item.github} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent dark:hover:text-accent">
                  Github <FiGithub />
                </p>
              </a>
            </>
          ) : (
            <>
              <a href={item.demo} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent dark:hover:text-accent">
                  Live Demo <FiExternalLink />
                </p>
              </a>
              <a href={item.github} target="_blank" rel="noreferrer">
                <p className="flex justify-center text-lg text-black dark:text-white font-semibold items-center gap-1 cursor-pointer hover:text-accent dark:hover:text-accent">
                  Github <FiGithub />
                </p>
              </a>
            </>
          )}
        </div>
        <AppChip chipArray={item.description} style={{color: "#42cef5", fontWeight: 400}} variant={'outlined'} direction={'row'} spacing={0.5}/>
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
