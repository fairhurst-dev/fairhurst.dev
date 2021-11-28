import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography
      sx={{ mt: 3 }}
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
  );
}

export default Footer;
