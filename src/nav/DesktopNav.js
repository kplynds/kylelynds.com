import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";

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
      <Typography
        sx={{
          margin: "0 1rem",
        }}
      >
        About
      </Typography>
      <Typography
        sx={{
          margin: "0 1rem",
        }}
      >
        Projects
      </Typography>
      <Typography
        sx={{
          margin: "0 1rem",
        }}
      >
        More
      </Typography>
    </Box>
  );
}

export default DesktopNav;
