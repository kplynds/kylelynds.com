import React from "react";
import Box from "@mui/material/Box";
import theme from "../theme";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../App.css";

function TopSection() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.up("md")]: {
            width: "920px",
            height: "80vh",
            margin: "0 auto",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          flexDirection: "column",
          alignItems: "center",
          margin: "0 5%",
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.up("md")]: {
              padding: "6%",
              display: "flex",
              justifyContent: "flex-end",
            },
          }}
        >
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQGGWvkQrEI1ow/profile-displayphoto-shrink_800_800/0/1580438936389?e=2147483647&v=beta&t=00eJT_IbN6uAWlTGBqIvC9WUDuAgdlBYpet4EQ-EXeo"
            sx={{
              height: "20rem",
              width: "14rem",
              borderRadius: "6px",
              [theme.breakpoints.down("md")]: {
                margin: "0 auto",
                height: "12rem",
                width: "10rem",
              },
              // margin: "0 auto",
              // padding: '1rem'
            }}
            variant="square"
          />
        </Box>
        <Box
          sx={{
            [theme.breakpoints.up("md")]: {
              // width: "50%",
              width: "500px",
              padding: "2%",
            },
            [theme.breakpoints.down("md")]: {
              width: "95%",
              marginTop: "1.5rem",
            },
          }}
        >
          <div className="top-text">
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant="h6"
            >
              Hi, I'm Kyle 👋
            </Typography>
          </div>
          <div className="top-text">
            <Typography variant="body1">👨‍💻&nbsp;&nbsp;</Typography>
            <Typography variant="body1">
              Full Stack Developer + Business Student
            </Typography>
          </div>
          <div className="top-text">
            <Typography variant="body1">📚&nbsp;&nbsp;</Typography>
            <div>
              <Typography variant="body1">
                Current Sophmore at Babson College (B.S.)
              </Typography>
              <Typography variant="body1">
                Concentrations: Economics + Tech Entreprenuership
              </Typography>
            </div>
          </div>
          <div className="top-text">
            <Typography variant="body1">⌨️&nbsp;&nbsp;</Typography>
            <Typography variant="body1">
              Completed{" "}
              <a
                style={{ color: "inherit", fontWeight: "bold" }}
                rel="noreferrer"
                target="_blank"
                href="https://www.bloomtech.com/courses/full-stack-web-development"
              >
                Bloom Institute of Technology
              </a>{" "}
              (previously Lambda School) Full Stack Web Dev course
            </Typography>
          </div>
          <div className="top-text">
            <Typography variant="body1">📲&nbsp;&nbsp;</Typography>
            <Typography variant="body1">
              My phone number is 949-981-5480 and email is klynds1@babson.edu
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "2px solid #D3D3D3",
          borderRadius: "8px",
          width: "920px",
          margin: "0 auto",
          height: "12vh",
          [theme.breakpoints.down("md")]: {
            width: "95%",
            height: "20px",
          },
        }}
      ></Box>
    </div>
  );
}

export default TopSection;
