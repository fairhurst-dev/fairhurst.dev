import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";

function Home(props) {
  const frostedPaper = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .5)",
    borderRadius: "5px",
    position: "relative",
    zIndex: "1",
    background: "inherit",
    overflow: "hidden",
    background: "transparent",
    boxShadow: "none",
    padding: "3em",
    ":before": {
      content: '""',
      position: "absolute",
      background: "inherit",
      zIndex: "-1",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      boxShadow: "inset 0 0 2000px rgba(169, 166, 242, 0.5)",
      filter: "blur(10px)",
      margin: "-20px",
    },
  };
  const learnMoreStyle = {
    backgroundColor: "secondary.main",
    ":hover": { backgroundColor: "secondary.light" },
  };
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    "& > :not(style)": {
      m: 2,
      width: "100vw",
      height: "80vh",
    },
  };
  return (
    <div>
      <Box component="div" sx={boxStyle}>
        <Stack
          sx={{ mt: 10 }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Paper sx={frostedPaper} elevation={10}>
            <Typing />
          </Paper>
          <Button
            sx={learnMoreStyle}
            size="large"
            variant="contained"
            value="about"
            onClick={(e) => props.goTo(e.target.value)}
          >
            Learn More
          </Button>{" "}
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
