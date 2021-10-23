import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

function Hero() {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        About
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        fairhurst.dev aims to build reusable, accessible, and brandable web
        content.
      </Typography>
    </Container>
  );
}

export default Hero;
