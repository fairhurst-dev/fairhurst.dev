import React from "react";
import { Container, Typography } from "@mui/material";

function TextHero(props) {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography variant="h5" align="center" color="text.primary" gutterBottom>
        {props.text}
      </Typography>
    </Container>
  );
}

export default TextHero;
