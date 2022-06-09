import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import { NavLink } from "react-router-dom";

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
    </Box>
  );
}

export default DesktopNav;
