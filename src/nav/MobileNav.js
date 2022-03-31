import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';

function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        height: "8vh",
      }}
    >
      <IconButton disableRipple onClick={toggle} size="large">
        <MenuIcon />
      </IconButton>
      <Drawer disableRibble anchor="right" open={open} onClose={toggle}>
        <Box
          sx={{
            width: "200px",
          }}
        >
          <div style={{ display: "flex", margin: "1rem 0" }}>
            <AccountCircleIcon
              sx={{
                margin: "0 1rem",
              }}
            />
            <Typography>About</Typography>
          </div>
          <div style={{ display: "flex", margin: "1rem 0" }}>
            <CodeIcon
              sx={{
                margin: "0 1rem",
              }}
            />
            <Typography>Projects</Typography>
          </div>
          <div style={{ display: "flex", margin: "1rem 0" }}>
            <PsychologyIcon
              sx={{
                margin: "0 1rem",
              }}
            />
            <Typography>More</Typography>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
