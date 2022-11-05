import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ThemeSwitch = ({ mobile }) => {
  const mobileTheme = mobile;
  const [theme, setTheme] = useState("fa-sun");

  const dayNight = () => {
    setTheme("fa-moon");
    document.body.classList.toggle("dark");
    if (theme === "fa-moon") {
      setTheme("fa-sun");
      document.body.classList.toggle("sun");
    }
  };
  return (
    <div>
      {mobileTheme ? (
        <>
          <FormGroup className="mb-10">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Dark Mode</Typography>
              <label class="switch">
                <input type="checkbox" onClick={dayNight} />
                <span class="slider"></span>
              </label>
              <Typography>Light Mode</Typography>
            </Stack>
          </FormGroup>
        </>
      ) : (
        <>
          <div className="day-night s-icon cursor-pointer">
            <label class="switch">
              <input type="checkbox" onClick={dayNight} />
              <span class="slider"></span>
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
