import React from 'react'
// import for skills chip
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AppChip = (props) => {
const {chipArray, style, variant, direction, spacing} = props;
  return (
    <>
       <Stack direction={direction} spacing={spacing}>
          {chipArray.map((desc, index) => {
            return (
              <div key={index}>
                <Chip
                  label={desc}
                  style={style}
                  variant={variant}
                />
              </div>
            );
          })}
        </Stack> 
    </>
  )
}

export default AppChip