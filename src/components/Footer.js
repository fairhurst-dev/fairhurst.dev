import React from "react";
import { Typography, Paper } from "@mui/material";

function Footer() {
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundColor: "transparent",
        width: "max-content",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{ mt: 3, p: 0.5 }}
        variant="body2"
        color="secondary.main"
        align="center"
      >
        {"Copyright © "}
        <a color="inherit" style={{ color: "inherit" }} href="fairhurst.dev">
          fairhurst.dev
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Paper>
  );
}

export default Footer;
