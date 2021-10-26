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
      <Typography variant="h5" align="center" color="text.primary" gutterBottom>
        This website was created with React and Material UI. It is hosted on an
        AWS S3 bucket, using Cloudformation and routing with Route 53.
      </Typography>
    </Container>
  );
}

export default Hero;
