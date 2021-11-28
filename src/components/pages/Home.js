import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";

function Home(props) {
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
          <Paper
            sx={{ backgroundColor: "transparent", padding: "3em" }}
            elevation={10}
          >
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
