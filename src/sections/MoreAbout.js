import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import axios from "axios";

function MoreAbout() {
  const [musicData, setMusicData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/flumes-company/us-central1/api/personalsite"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
      <Typography
        sx={{
          fontWeight: "bold",
          width: "100%",
        }}
        variant="h5"
        align="center"
      >
        More About Me
      </Typography>
    </Box>
  );
}

export default MoreAbout;
