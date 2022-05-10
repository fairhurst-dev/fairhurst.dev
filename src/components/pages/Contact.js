import React from "react";
import ContactForm from "../ContactForm";
import { Box } from "@mui/system";
import { Fade, Paper, Typography, Slide, Button } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

function Contact() {
  const text = "Contact me below and I will get back to you!";

  const titleStyle = {
    color: "secondary.main",
    backgroundColor: "none",
    fontFamily: "jost",
    fontStyle: "italic",
  };

  const boxStyle = {
    m: 1,
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

  const iconStyle = { color: "secondary.main", fontSize: 50, padding: "5px" };

  return (
    <Box sx={boxStyle}>
      <div>
        <Slide direction="right" in timeout={1000}>
          <Typography sx={titleStyle} variant="h4">
            Questions?
          </Typography>
        </Slide>
        <Typography sx={{ pt: 2 }} variant="h5" color="white">
          {" "}
          {text}{" "}
        </Typography>

        <Button
          sx={{ my: 2, textTransform: "capitalize" }}
          target="_blank"
          href="https://www.linkedin.com/in/carolinefairhurst99/"
          display="flex"
          variant="outlined"
          color="secondary"
        >
          <Typography variant="h6" textTransform="capitalize" color="white">
            Connect with me
          </Typography>
          <LinkedIn sx={iconStyle} />
        </Button>
      </div>
      <Slide direction="up" in timeout={1500}>
        <Box>
          <Fade in timeout={1500}>
            <Paper elevation={10}>
              <ContactForm />
            </Paper>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}

export default Contact;
