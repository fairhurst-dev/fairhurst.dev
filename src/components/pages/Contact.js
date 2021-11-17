import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import TextHero from "../TextHero";

function Contact() {
  const text = "Questions? Contact me below and I will get back to you!";

  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 2,
          width: "100vw",
          height: "80vh",
        },
      }}
    >
      <Paper elevation={10}>
        <TextHero text={text} />
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default Contact;
