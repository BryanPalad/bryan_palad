import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "gray",
    boxSizing: "border-box",
  },
}));

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
              <Typography>Light Mode</Typography>
              <AntSwitch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
                onClick={dayNight}
              />
              <Typography>Dark Mode</Typography>
            </Stack>
          </FormGroup>
        </>
      ) : (
        <>
          <div className="day-night s-icon cursor-pointer">
            <i
              onClick={dayNight}
              title={theme === "fa-sun" ? "Light Mode" : "Dark Mode"}
              className={`fas ${theme}`}
            ></i>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
