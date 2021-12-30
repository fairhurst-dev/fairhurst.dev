import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";
import Slide from "@mui/material/Slide";
import { Grid } from "@mui/material";

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
    minHeight: "80vh",
    "& > :not(style)": {
      m: 1,
      width: "100vw",
    },
  };
  return (
    <Box component="div" sx={boxStyle}>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={2}
      >
        <Grid
          sx={{
            m: "0 auto",
            height: "min-content",
          }}
          item
          container
          md={6}
          xs={11}
        >
          <Paper
            sx={{
              backgroundColor: "transparent",
              height: "max-content",
              width: "100%",
              mb: 4,
              p: 3,
            }}
            elevation={10}
          >
            <Typing />
          </Paper>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
