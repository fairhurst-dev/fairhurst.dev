import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";

function Contact() {
  const text = "Questions? Contact me below and I will get back to you!";

  const boxStyle = {
    "& > :not(style)": {
      m: 2,
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "2em 0",
    alignItems: "center",
    "@media (max-width: 650px)": {
      flexDirection: "column",
    },
  };

  return (
    <Box sx={boxStyle}>
      <div>
        <Typography sx={{ p: 2 }} textAlign="center" variant="h5" color="white">
          {" "}
          {text}{" "}
        </Typography>
      </div>
      <Paper elevation={10}>
        <ContactForm />
      </Paper>
    </Box>
  );
}

export default Contact;
