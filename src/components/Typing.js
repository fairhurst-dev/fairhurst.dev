import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";
import Typed from "react-typed";

function Typing() {
  const avatarStyle = { width: 120, height: 120 };
  const subtitleStyle = {
    color: "white",
    textTransform: "uppercase",
  };
  const titleStyle = {
    color: "white",
    padding: "5px",
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
            "Frontend Developer",
            "Backend Developer",
            "Pedagogical Expert",
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
