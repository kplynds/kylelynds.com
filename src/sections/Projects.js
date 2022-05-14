import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../theme";
import { FaEthereum } from "react-icons/fa";

const Projects = () => {
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
    >
      {
        // eslint-disable-next-line
      }<a name="projects"></a>
      <Typography
        sx={{
          fontWeight: "bold",
          width: "100%",
        }}
        variant="h5"
        align="center"
      >
        Projects
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
        <Typography>
          🎵&nbsp;&nbsp;yamber —{" "}
          <a
            style={{ color: "inherit", fontWeight: "bold" }}
            rel="noreferrer"
            target="_blank"
            href="https://yamber.co/"
          >
            yamber.co
          </a>{" "}
          —{" "}
          <a
            style={{ color: "inherit", fontWeight: "bold" }}
            rel="noreferrer"
            target="_blank"
            href="https://github.com/kplynds/flume"
          >
            Github
          </a>
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Full-Stack web app to see and share music taste
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Tech Stack:</Typography>
            <ul>
              <li>
                <Typography variant="body2">FE: React, Redux, MUI</Typography>
              </li>
              <li>
                <Typography variant="body2">
                  BE: Node.js/Express, Firestore DB, Cloud Functions
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="body2">
              First full stack project. Integrates Spotify Web API and{" "}
              <a
                style={{ color: "inherit", fontWeight: "bold" }}
                rel="noreferrer"
                target="_blank"
                href="https://stytch.com/"
              >
                Stytch
              </a>{" "}
              for auth management and text verification
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              In process of building iOS front-end (React-Native) and
              integrating Apple Music API
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        sx={{
          margin: "2rem 0",
          [theme.breakpoints.up("md")]: {
            width: "700px",
            margin: "0 auto",
          },
        }}
      >
        <Typography>
          <FaEthereum />
          &nbsp;&nbsp;Simple Eth Explorer —{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://simple-eth-explorer.vercel.app/"
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            deployed link
          </a>{" "}
          —{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/kplynds/tsx-ethers/tree/master/tsx-ethers"
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            Github
          </a>
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Simple web app to query and write to the ethereum blockchain
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Tech Stack:{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://docs.ethers.io/v5/"
                style={{ color: "inherit", fontWeight: "bold" }}
              >
                ethers.js
              </a>
              , React, Typescript, Tailwind
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            width: "700px",
            margin: "0 auto",
          },
        }}
      >
        <Typography>
          👨‍🔧&nbsp;&nbsp;Current Technologies I have experience with
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              HTML5, CSS, React.js, Node.js, Express.js, REST APIs, Redux,
              PosgreSQL, Firebase, Python, Material-UI, Typescript, Next.js
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              I am always learning more language/frameworks and consider myself
              a fast learner
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        sx={{
          borderTop: "2px solid #D3D3D3",
          borderRadius: "8px",
          width: "920px",
          margin: "0 auto",
          marginTop: "5rem",
          height: "12vh",
          [theme.breakpoints.down("md")]: {
            width: "95%",
            height: "20px",
          },
        }}
      ></Box>
    </Box>
  );
};

export default Projects;
