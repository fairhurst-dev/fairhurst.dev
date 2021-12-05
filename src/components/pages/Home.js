import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";
import Slide from "@mui/material/Slide";

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
            sx={{ backgroundColor: "transparent", p: 5, mb: 4 }}
            elevation={10}
          >
            <Typing />
          </Paper>
          <Link to="/about">
            <Slide direction="up" in timeout={2000}>
              <Box>
                <Fade in timeout={2000}>
                  <Button
                    sx={learnMoreStyle}
                    size="large"
                    variant="contained"
                    value="about"
                  >
                    Learn More
                  </Button>
                </Fade>
              </Box>
            </Slide>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
