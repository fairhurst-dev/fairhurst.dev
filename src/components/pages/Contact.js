import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import TextHero from "../TextHero";

function Contact() {
  const text = "Questions? Contact me below and I will get back to you!";

  const boxStyle = {
    "& > :not(style)": {
      m: 2,
    },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <Box sx={boxStyle}>
      <Typography sx={{ p: 2 }} textAlign="center" variant="h5" color="white">
        {" "}
        {text}{" "}
      </Typography>
      <Paper elevation={10}>
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default Contact;
