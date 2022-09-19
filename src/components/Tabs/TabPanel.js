import React from 'react'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

const AppTabPanel = (props) => {
    const {Tab1, Tab2 , TabTitle1, TabTitle2} = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { backgroundColor: "#fc3d3d" } }}
                centered
              >
                <Tab
                  label={
                    <span className="text-black dark:text-white">
                      {TabTitle1}
                    </span>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <span className="text-black dark:text-white">
                      {TabTitle2}
                    </span>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {Tab1}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {Tab2}
            </TabPanel>
          </Box>
  )
}

export default AppTabPanel