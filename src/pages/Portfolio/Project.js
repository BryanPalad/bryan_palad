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
import {
  AppChip,
  AppAccordion,
  AppSlide,
  ApplicationCard,
} from "../../components";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ApplicationCard
        className="h-[100%] w-full rounded-xl"
        children={
          <>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="portfolio images"
            />
            <CardContent>
              {item.pointer ? (<>
                <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              </>):(<>
                <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              </>)}
              <Box className="flex flex-col gap-4">
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <AppChip
                  chipArray={item.techStacks}
                  style={{ color: "#fc3d3d", fontWeight: 600 }}
                  variant={"outlined"}
                  direction={"row"}
                  spacing={0.2}
                />
              </Box>
            </CardContent>
            <CardActions>
              {item.pointer ? (
                <>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-techStacks"
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
                          <h1 className="text-black mt-2 font-logo items-center md:mb-2 text-center text-lg md:text-2xl lg:text-center">
                            Patient Information and Online Appointment System for Fernandez Dental
                            Clinic
                          </h1>
                          <AiOutlineClose
                            onClick={handleClose}
                            className="text-black text-3xl cursor-pointer absolute top-2 right-2"
                          />
                        </div>
                        <Typography
                          id="transition-modal-techStacks"
                          sx={{ mt: 2 }}
                        >
                          <AppSlide
                            slideArray={modalObj[0].sliderImg}
                            duration={2000}
                            transitionDuration={800}
                          />
                          <hr className="mb-2" />
                          <h1 className="text-black text-2xl md:text-2xl font-logo mt-2 text-center mb-2">
                            Main Functions
                          </h1>
                          <AppAccordion
                            title={"What Patients can do?"}
                            accordionArray={modalObj[1].patientsFunction}
                          />
                          <AppAccordion
                            title={"What Dentists can do?"}
                            accordionArray={modalObj[2].dentistsFunction}
                          />
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
                  <Box className="flex justify-between w-full gap-4 px-4">
                    <p
                      onClick={handleOpen}
                      className="flex justify-center text-lg text-black font-semibold items-center gap-1 cursor-pointer hover:text-accent"
                    >
                      View Details <RiSearchEyeLine />
                    </p>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <p className="flex justify-center text-lg text-black font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                        Github <FiGithub />
                      </p>
                    </a>
                  </Box>
                </>
              ) : (
                <Box className="flex justify-between w-full gap-4 px-4">
                  <a href={item.demo} target="_blank" rel="noreferrer">
                    <p className="flex justify-center text-lg text-black font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                      Live Demo <FiExternalLink />
                    </p>
                  </a>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <p className="flex justify-center text-lg text-black font-semibold items-center gap-1 cursor-pointer hover:text-accent">
                      Github <FiGithub />
                    </p>
                  </a>
                </Box>
              )}
            </CardActions>
          </>
        }
      />
    </motion.div>
  );
};

export default Project;
