import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function Contact() {
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
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default Contact;
