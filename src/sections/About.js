import React from "react";
import Box from "@mui/material/Box";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "920px",
          //   height: "100vh",
        },
        [theme.breakpoints.down("md")]: {
          width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "95%",
        },
      }}
      style={{ paddingBottom: "4rem" }}
    >
      {
        // eslint-disable-next-line
      }<a name="about"></a>
      <Typography
        sx={{
          fontWeight: "bold",
          width: "100%",
        }}
        variant="h5"
        align="center"
      >
        About me
      </Typography>
      <Box
        sx={{
          margin: "2rem 0",
          [theme.breakpoints.up("md")]: {
            width: "700px",
            margin: "0 auto",
          },
        }}
      >
        <Typography sx={{ marginTop: "1.5rem" }}>
          I am a rising junior business/economics student at Babson College who
          is interested in the world of startups. Following this interest, I’ve
          been teaching myself to code and completed BloomTech’s WebDev course.
        </Typography>
        <Typography sx={{ marginTop: "1rem" }}>
          Outside of work and school you can find me:
        </Typography>
        <ul>
          <li>
            <Typography>Working on a new side project</Typography>
          </li>
          <li>
            <Typography>Surfing</Typography>
          </li>
          <li>
            <Typography>Watching or Playing Pickup Basketball</Typography>
          </li>
          <li>
            <Typography>Running</Typography>
          </li>
          <li>
            <Typography>Playing poker and chess</Typography>
          </li>
          <li>
            <Typography>
              Listening to{" "}
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                to="/library"
              >
                music
              </Link>
            </Typography>
          </li>
        </ul>
        <Typography sx={{ marginTop: "1rem" }}>
          To see what I read and listen to, see my{" "}
          <Link
            style={{
              color: "inherit",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            to="/library"
          >
            Library page.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
