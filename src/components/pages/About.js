import React from "react";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import headshot from "../../media/headshot.png";

function About() {
  const boxStyle = {
    "& > :not(style)": {
      m: 3,
    },
    backgroundColor: "secondary.main",
  };
  const dividerStyle = {
    m: "10px auto",
    width: "50%",
    backgroundColor: "primary.main",
    height: "5px",
  };
  const titleStyle = {
    color: "white",
    backgroundColor: "primary.main",
  };
  const avatarStyle = { width: 200, height: 200, ml: 5 };
  const textTop =
    "I'm a Full-Stack developer from the Jersey Shore. My passion for computing started when my parents gifted me a Gateway 98 computer which I used to browse the Encarta encyclopedia, created greeting cards, and played pixelated games. I continued my passion for computing by studying Computer Science at Stockton University. To level-up my coding, I built my own computer, powered by an AMD Ryzen chip and a MSI GPU. ";
  const textBottom =
    "I'm currently an Associate Software Developer for Kaplan North America's Innovation Team. In my previous role as a Instructional Content Developer, I learned the power of pedagogical design: developing interactive widgets to empower user's to reach the learning objectives. In my role as a Software Developer, I continually employ serverless solutions, and ensure my code is accessible, responsive, and compatible with legacy browsers. My aim is to increase the accessibility of software and coding to more people. In my free time I enjoy playing with my cat Saint, working out, and exploring New Jersey.";

  return (
    <Box sx={boxStyle}>
      <Paper elevation={10}>
        <Typography
          sx={titleStyle}
          variant="h2"
          align="center"
          color="text.primary"
        >
          Caroline Fairhurst
        </Typography>
      </Paper>
      <Box sx={{ pb: 10, m: 2 }} display="flex">
        {" "}
        <Typography variant="h5" align="center" color="text.primary">
          {textTop}
          <Paper sx={dividerStyle}></Paper>
          {textBottom}
        </Typography>
        <Avatar sx={avatarStyle} src={headshot} alt="Caroline Fairhurst" />
      </Box>
    </Box>
  );
}

export default About;
