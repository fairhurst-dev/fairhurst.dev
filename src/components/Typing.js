import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";
import { Fade } from "@mui/material";
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
      <Fade in timeout={3000}>
        <Avatar
          sx={avatarStyle}
          src="https://fairhurstdevassets.s3.amazonaws.com/headshotweb.jpg"
          alt="Caroline Fairhurst"
        />
      </Fade>

      <Typography variant="h4">
        <Typed
          startWhenVisible
          style={titleStyle}
          strings={["Caroline Fairhurst"]}
          typeSpeed={40}
        />
      </Typography>
      <Typography sx={subtitleStyle} variant="h5">
        <Typed
          startWhenVisible
          strings={["Software Developer"]}
          typeSpeed={80}
        />
      </Typography>
    </Stack>
  );
}

export default Typing;
