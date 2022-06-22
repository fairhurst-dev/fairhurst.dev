import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import { Grid } from "@mui/material";

function About() {
  const dividerStyle = {
    m: "10px auto",
    width: "50%",
    backgroundColor: "secondary.main",
    height: "8px",
  };
  const titleStyle = {
    color: "secondary.main",
    backgroundColor: "none",
    fontFamily: "jost",
    fontStyle: "italic",
  };
  const avatarStyle = { width: 150, height: 150, m: "1em auto" };
  const textTop =
    "I am a Full-Stack developer from the Jersey Shore. My passion for computing started when my parents gifted me a Gateway 98 computer which I used to browse the Encarta encyclopedia, create greeting cards, and play pixelated games. I continued my passion for computing by studying Computer Science at Stockton University. During the pandemic, I built my own computer, powered by AMD Ryzen and a MSI GPU. ";
  const textBottom =
    "Currently, I am a Cloud-Native Associate Software Developer for Kaplan North America's Innovation Team. In my previous role as an Instructional Content Developer, I learned the power of pedagogical design: developing educational interactions that enrich the learning experience. In my role as a Software Developer, I employ serverless solutions, and ensure my code is accessible, responsive, and compatible with legacy browsers. I aim to maximize the usability of software, which in turn empowers users. In my free time I enjoy playing with my cat Saint, working out, and exploring New Jersey.";

  return (
    <Grid
      justifyContent="center"
      sx={{
        p: 2,
        justifyContent: "center",
        "@media (max-width: 800px)": { px: 2 },
      }}
    >
      {" "}
      <Grid xs={12} display="flex" justifyContent="center" item container>
        <Typography
          as="div"
          sx={titleStyle}
          variant="h2"
          align="center"
          color="text.primary"
        >
          Caroline Fairhurst
          <Fade in timeout={2500}>
            <Avatar
              sx={avatarStyle}
              src="https://fairhurstdevassets.s3.amazonaws.com/headshotweb.jpg"
              alt="Caroline Fairhurst"
            />
          </Fade>
        </Typography>
      </Grid>
      <Grid item container display="flex" justifyContent="center" xs={12}>
        <Grid item md={8} xs={12}>
          <Paper
            sx={{
              backgroundColor: "transparent",
              height: "max-content",
              m: 2,
              p: 1,
            }}
            elevation={10}
          >
            <Typography
              as="body1"
              variant="h6"
              align="center"
              color="text.primary"
            >
              {textTop}

              <Fade in timeout={2500}>
                <Paper sx={dividerStyle}></Paper>
              </Fade>
              {textBottom}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
