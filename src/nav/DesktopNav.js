import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function DesktopNav() {
  return (
    <Box
      sx={{
        height: "8vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "920px",
        margin: "0 auto",
      }}
    >
      <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
        <Typography
          sx={{
            margin: "0 1rem",
          }}
        >
          Home
        </Typography>
      </NavLink>
      <a style={{ textDecoration: "none", color: "black" }} href="/#projects">
        <Typography
          sx={{
            margin: "0 1rem",
          }}
        >
          Projects
        </Typography>
      </a>
      <a style={{ textDecoration: "none", color: "black" }} href="/#about">
        <Typography
          sx={{
            margin: "0 1rem",
          }}
        >
          About
        </Typography>
      </a>
      <NavLink style={{ textDecoration: "none", color: "black" }} to="/library">
        <Typography
          sx={{
            margin: "0 1rem",
          }}
        >
          Library
        </Typography>
      </NavLink>
      <a
        style={{ textDecoration: "none", color: "black" }}
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/kylelynds/"
      >
        <LinkedInIcon sx={{
            margin: "0 1rem",
          }} />
      </a>
      <a
        style={{ textDecoration: "none", color: "black" }}
        rel="noreferrer"
        target="_blank"
        href="https://www.github.com/kplynds"
      >
        <GitHubIcon sx={{
            margin: "0 1rem",
          }} />
      </a>
    </Box>
  );
}

export default DesktopNav;
