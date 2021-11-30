import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";
import { Link } from "react-router-dom";

function Home() {
  const learnMoreStyle = {
    backgroundColor: "secondary.main",
    ":hover": { backgroundColor: "secondary.light" },
    fontFamily: "varta",
    fontWeight: "600",
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
          <Link to="/about">
            <Button
              sx={learnMoreStyle}
              size="large"
              variant="contained"
              value="about"
            >
              Learn More
            </Button>{" "}
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
