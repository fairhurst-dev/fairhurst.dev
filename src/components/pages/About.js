import React from "react";
import CardContainer from "../CardContainer";
import Hero from "../Hero";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

function About() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 3,
        },
      }}
    >
      <Paper elevation={10}>
        <Hero />
        <CardContainer />
      </Paper>
    </Box>
  );
}

export default About;
