import React from "react";
import { Box } from "@mui/system";

function Code({ text }) {
  return (
    <Box textAlign="center" width="100%">
      <code style={{ display: "initial" }}> {text}</code>
    </Box>
  );
}

export default Code;
