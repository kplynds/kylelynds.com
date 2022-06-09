import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <div onClick={toggle} style={{ display: "flex", margin: "1rem 0" }}>
              <AccountCircleIcon
                sx={{
                  margin: "0 1rem",
                }}
              />
              <Typography>About</Typography>
            </div>
          </Link>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/#projects"
          >
            <div onClick={toggle} style={{ display: "flex", margin: "1rem 0" }}>
              <CodeIcon
                sx={{
                  margin: "0 1rem",
                }}
              />
              <Typography>Projects</Typography>
            </div>
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/#about"
          >
          <div onClick={toggle} style={{ display: "flex", margin: "1rem 0" }}>
            <PsychologyIcon
              sx={{
                margin: "0 1rem",
              }}
            />
            <Typography>More</Typography>
          </div>
          </a>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/library"
          >
            <div onClick={toggle} style={{ display: "flex", margin: "1rem 0" }}>
              <MenuBookIcon
                sx={{
                  margin: "0 1rem",
                }}
              />
              <Typography>Library</Typography>
            </div>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
