import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography
      sx={{ backgroundColor: "secondary.main" }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <a color="inherit" href="fairhurst.dev">
        fairhurst.dev
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
