import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import axios from "axios";
// import Avatar from "@mui/material/Avatar";
// import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
// import IconButton from "@mui/material/IconButton";
// import { Howl, Howler } from "howler";

function MoreAbout() {
  const [musicData, setMusicData] = useState(null);
  // const [audio, setAudio] = useState({
  //   active: false,
  //   src: "",
  // });
  // const playButtonClick = (src) => {
  //   if (!audio.active) {
  //     const sound = new Howl({
  //       src,
  //       html5: true,
  //     });
  //     setAudio({
  //       active: true,
  //       src: src,
  //     });
  //     sound.play();
  //     sound.on("end", function () {
  //       setAudio({
  //         active: false,
  //         src: "",
  //       });
  //     });
  //   } else if (audio.src === src) {
  //     Howler.stop();
  //     setAudio({
  //       active: false,
  //       src: "",
  //     });
  //   } else {
  //     Howler.stop();
  //     const sound = new Howl({
  //       src,
  //       html5: true,
  //     });
  //     setAudio({
  //       active: true,
  //       src: src,
  //     });
  //     sound.play();
  //     sound.on("end", function () {
  //       setAudio({
  //         active: false,
  //         src: "",
  //       });
  //     });
  //   }
  // };
  const getSong = () => {
    return (
      <React.Fragment>
        <a
          rel="noreferrer"
          target="_blank"
          href={`${musicData.song.spotifyHref}`}
          style={{ color: "inherit", fontWeight: "bold" }}
        >{`${musicData.song.name} — ${musicData.song.artists.join(", ")}`}</a>
      </React.Fragment>
    );
  };
  const getArtistNames = () => {
    const n = 3;
    return (
      <React.Fragment>
        {[...Array(n)].map((e, i) => {
          return (
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href={`${musicData.artists[i].spotifyHref}`}
                style={{ color: "inherit", fontWeight: "bold" }}
              >
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
      .get(
        "https://us-central1-flumes-company.cloudfunctions.net/api/personalsite"
      )
      .then((res) => {
        setMusicData(res.data);
      })
      .catch((err) => {
        // setMusicData({
        //   artists: [],
        //   song: {
        //     spotifyHref: "",
        //     name: "",
        //     artists: [],
        //   },
        // });
        console.log(err);
      });
  }, []);
  return (
    <Box
      sx={{
        margin: "0 auto",
        paddingBottom: "4rem",
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
          marginBottom: "1rem"
        }}
        variant="h5"
        align="center"
      >
        My Library
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
        <Typography>Reading</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              While I grew up with Twitter and TikTok, I've managed to finish
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
              I also love Paul Graham's Essays, Tim Urban's Wait But Why, Tyler Cowen's Marginal Revolution, and other internet writings.
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
              Some of my all time favorite artists are:
            </Typography>
          </li>
          <ul>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/6nxWCVXbOlEVRexSbLsTer"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  Flume
                </a>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  The 1975
                </a>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/21mKp7DqtSNHhCAU2ugvUw"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  Odesza
                </a>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/163tK9Wjr9P9DmM0AVK7lm"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  Lorde
                </a>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  Porter Robinson
                </a>
              </Typography>
            </li>

            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  Bon Iver
                </a>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
                  }
                  style={{ color: "inherit", fontWeight: "bold" }}
                >
                  ye
                </a>
              </Typography>
            </li>
          </ul>
          <li>
            <Typography variant="body2">
              In the last month, my most streamed: (pulled from my project,{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href={"https://yamber.co/kyle"}
                style={{ color: "inherit", fontWeight: "bold" }}
              >
                yamber.co
              </a>
              )
            </Typography>
          </li>
          <ul>
            <li>
              <Typography variant="body2">
                song:&nbsp;
                {musicData ? getSong() : "loading..."}
                {/* <a href={`${musicData.song.spotifyHref}`}>{`${
                musicData.song.name
              } — ${musicData.song.artists.join(", ")}`}</a>{" "} */}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                artists:&nbsp;
                {musicData ? getArtistNames() : "loading..."}
              </Typography>
            </li>
          </ul>
          <li>
            <Typography variant="body2">
              <a
                rel="noreferrer"
                target="_blank"
                href={
                  "https://open.spotify.com/playlist/2BqD65fUITcjoadUvreqY5?si=ab90776f74214a12"
                }
                style={{ color: "inherit", fontWeight: "bold" }}
              >
                Spotify Playlist
              </a>
              {" "}With Some of my Favorite Songs
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
        <Typography>Other Favorites</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Podcasts:{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit", fontWeight: "bold" }}
                href="https://tim.blog/"
              >
                The Tim Ferris Show
              </a>
              ,{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit", fontWeight: "bold" }}
                href="https://www.allinpodcast.co/"
              >
                The All-In Podcast
              </a>
              ,{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit", fontWeight: "bold" }}
                href="https://redscarepodcast.libsyn.com/"
              >
                Red Scare
              </a>
              , {" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit", fontWeight: "bold" }}
                href="https://open.spotify.com/show/5VzFvh1JlEhBMS6ZHZ8CNO"
              >
                Emma Chamberlain
              </a>
              ,{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit", fontWeight: "bold" }}
                href="https://hubermanlab.com/"
              >
                Huberman Lab
              </a>
              , and more
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Comedians: Jimmy Tatro, Larry David, Ricky Gervais, The Sidemen
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Movies: All 10 Tarantino Films, The Big Short, The Dark Knight
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default MoreAbout;
