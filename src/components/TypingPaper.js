import React from "react";
import { Paper } from "@mui/material";
import { Typing, TypingStep } from "typing-effect-reactjs";

function TypingPaper() {
  const sequence = [
    {
      content: "fairhurst.dev Full stack web development",
      config: {
        typeSpeed: 150,
      },
    },
    {
      content: 400,
    },
  ];
  return (
    <Paper elevation={10}>
      <TypingStep sequence={sequence} />
    </Paper>
  );
}

export default TypingPaper;
