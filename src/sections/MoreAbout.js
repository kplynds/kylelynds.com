import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import IconButton from "@mui/material/IconButton";
import { Howl, Howler } from "howler";

function MoreAbout() {
  const [musicData, setMusicData] = useState(null);
  const [audio, setAudio] = useState({
    active: false,
    src: "",
  });
  const playButtonClick = (src) => {
    if (!audio.active) {
      const sound = new Howl({
        src,
        html5: true,
      });
      setAudio({
        active: true,
        src: src,
      });
      sound.play();
      sound.on("end", function () {
        setAudio({
          active: false,
          src: "",
        });
      });
    } else if (audio.src === src) {
      Howler.stop();
      setAudio({
        active: false,
        src: "",
      });
    } else {
      Howler.stop();
      const sound = new Howl({
        src,
        html5: true,
      });
      setAudio({
        active: true,
        src: src,
      });
      sound.play();
      sound.on("end", function () {
        setAudio({
          active: false,
          src: "",
        });
      });
    }
  };
  const getArtistNames = () => {
    const n = 3;
    return (
      <React.Fragment>
        {[...Array(n)].map((e, i) => {
          return (
            <span>
              <a href={`${musicData.artists[i].spotifyHref}`}>
                {musicData.artists[i].name}
              </a>
              <>
                {i !== 2 && ","}&nbsp;{i === 1 && "and "}
              </>
            </span>
          );
        })}
      </React.Fragment>
    );
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/flumes-company/us-central1/api/personalsite")
      .then((res) => {
        setMusicData(res.data);
        console.log(res);
      })
      .catch((err) => {
        setMusicData({
          artists: ["could not fetch :("],
          song: {
            spotifyHref: "",
            name: "",
            artists: [],
          },
        });
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
      <Box
        sx={{
          margin: "2rem 0",
          [theme.breakpoints.up("md")]: {
            width: "700px",
            margin: "0 auto",
          },
        }}
      >
        <Typography>Interests</Typography>
        <ul>
          {/* <li>
            <Typography variant="body2">
              I see startups fun, exciting, and a chance to make a big impact. 
            </Typography>
          </li> */}
          <li>
            <Typography variant="body2">
              Outside of writing code, you can find me: running long distances,
              surfing, playing pickup sports (basketball, beach volleyball,
              tennis), or driving around aimlessly listening to music
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              I was also a profitable online poker player at $0.05/0.10 blinds
              over a sample size of 15000+ hands and achieved a 2000 chess.com
              rapid rating (in my prime, it's lower now)
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
        <Typography>Reading</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              While I'm from the generation of TikTok, I've managed to finish
              some books. Some of my favorites are:
              {/* Into The Wild — Jon Krakauer, Originals — Adam Grant, Awareness — Anthony De Mello,
              Zero to One, Peter Thiel, Steve Jobs — Walter Isaacson, When
              Breath Becomes Air — Paul Kalanithi, Into Thin Air — Jon Krakauer */}
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Into The Wild — Jon Krakauer{" "}
                </Typography>
              </li>
              <li>
                <Typography variant="body2">Originals — Adam Grant</Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Awareness — Anthony De Mello
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Zero to One, Peter Thiel
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Steve Jobs — Walter Isaacson
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  When Breath Becomes Air — Paul Kalanithi
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Into Thin Air — Jon Krakauer
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="body2">
              I also love Paul Graham's Essays, Wait But Why
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
        <Typography>Music</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Music is a big part of my life and I am almost always listening
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              My most streamed artists the last month are:{" "}
              {musicData ? getArtistNames() : "loading..."}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              A song I am loving right now is{" "}
              <a href={`${musicData.song.spotifyHref}`}>{`${
                musicData.song.name
              } — ${musicData.song.artists.join(", ")}`}</a>{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              This data is pulled from my project yamber (see above), using the
              Spotify API. To see my full music taste, see my{" "}
              <a href="https://yamber.co/kyle">yamber profile</a>
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              I also listen to lots of podcasts! Some of my favorite shows are{" "}
              <a href="https://tim.blog/">The Tim Ferris Show</a>,{" "}
              <a href="https://www.allinpodcast.co/">The All-In Podcast</a>,{" "}
              <a href="https://redscarepodcast.libsyn.com/">Red Scare</a>,{" "}
              <a href="https://hubermanlab.com/">Huberman Lab</a>, and more
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default MoreAbout;
