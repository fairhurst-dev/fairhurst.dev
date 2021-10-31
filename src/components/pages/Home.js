import React from "react";
import { Paper, Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import headshot from "../../media/headshot.png";

import TypingPaper from "../TypingPaper";

function Home(props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 2,
            width: "100vw",
            height: "80vh",
          },
        }}
      >
        <Paper elevation={10}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box xs={12} md={8}>
              <Typography sx={{ p: 5 }} variant="h2" component="div">
                I'm Caroline Fairhurst
              </Typography>
              <Typography sx={{ p: 2, pl: 12 }} variant="h2" component="div">
                I'm a Full Stack Developer
              </Typography>
            </Box>
            <img width="auto" height="200px" src={headshot}></img>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              size="large"
              variant="contained"
              value="about"
              onClick={(e) => props.goTo(e.target.value)}
            >
              Learn More
            </Button>{" "}
          </Stack>
        </Paper>
        {/*<TypingPaper />*/}
      </Box>
    </div>
  );
}

export default Home;
