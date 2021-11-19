import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import TextHero from "../TextHero";

function Contact() {
  const text = "Questions? Contact me below and I will get back to you!";

  const boxStyle = {
    display: "flex",
    "& > :not(style)": {
      m: 2,
      width: "100vw",
      height: "80vh",
    },
    backgroundColor: "secondary.main",
  };

  return (
    <Box sx={boxStyle}>
      <TextHero text={text} />
      <Paper elevation={10}>
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default Contact;
