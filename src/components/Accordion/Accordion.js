import React from "react";
// import for drop down tab // accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const AppAccordion = (props) => {
const {title, accordionArray } = props;
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-md">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {accordionArray.map((item, index) => {
                return (
                  <p
                    className="text-black font-logo text-md md:text-lg"
                    key={index}
                  >
                    {item.function}
                  </p>
                );
              })}
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AppAccordion;
