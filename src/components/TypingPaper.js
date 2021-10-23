import React from "react";
import { Paper } from "@mui/material";
import { Typing, TypingStep } from "typing-effect-reactjs";

function TypingPaper() {
  const sequence = [
    {
      content: "fairhurst.dev",
      config: {
        typeSpeed: 150,
      },
    },
    {
      content: 400,
    },
  ];
  return (
    <Paper variant="outlined" square elevation={12}>
      <TypingStep sequence={sequence} />
    </Paper>
  );
}

export default TypingPaper;
