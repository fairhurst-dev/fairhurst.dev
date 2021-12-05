import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";
import Typed from "react-typed";

function Typing() {
  const secondary = "rgb(232, 51, 244)";
  const avatarStyle = { width: 120, height: 120 };
  const subtitleStyle = {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "varta",
  };
  const titleStyle = {
    color: secondary,
    whiteSpace: "nowrap",
    padding: "5px",
    fontFamily: "jost",
    fontStyle: "italic",
  };

  return (
    <Stack
      sx={{ mb: 5 }}
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Avatar
        sx={avatarStyle}
        src="/assets/headshot.png"
        alt="Caroline Fairhurst"
      />

      <Typography variant="h4">
        <Typed
          style={titleStyle}
          strings={["Caroline Fairhurst"]}
          typeSpeed={40}
        />
      </Typography>

      <Typography sx={subtitleStyle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "UX Designer",
            "Pedagogical Content Creator",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Stack>
  );
}

export default Typing;
