import React from "react";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";

function About() {
  const dividerStyle = {
    m: "10px auto",
    width: "50%",
    backgroundColor: "secondary.main",
    height: "5px",
  };
  const titleStyle = {
    color: "secondary.main",
    backgroundColor: "none",
    fontFamily: "jost",
    fontStyle: "italic",
  };
  const avatarStyle = { width: 150, height: 150, m: "0 auto" };
  const textTop =
    "I am a Full-Stack developer from the Jersey Shore. My passion for computing started when my parents gifted me a Gateway 98 computer which I used to browse the Encarta encyclopedia, created greeting cards, and played pixelated games. I continued my passion for computing by studying Computer Science at Stockton University. To level-up my coding, I built my own computer, powered by an AMD Ryzen chip and a MSI GPU. ";
  const textBottom =
    "Currently, I am an Associate Software Developer for Kaplan North America's Innovation Team. In my previous role as a Instructional Content Developer, I learned the power of pedagogical design: developing interactive widgets to empower user's to reach the learning objectives. In my role as a Software Developer, I continually employ serverless solutions, and ensure my code is accessible, responsive, and compatible with legacy browsers. My aim is to increase the accessibility of software and coding to more people. In my free time I enjoy playing with my cat Saint, working out, and exploring New Jersey.";

  return (
    <Box
      sx={{
        px: 10,
        py: 2,
        "@media (max-width: 800px)": { px: 2 },
      }}
    >
      {" "}
      <Box>
        <Typography
          as="div"
          sx={titleStyle}
          variant="h2"
          align="center"
          color="text.primary"
        >
          Caroline Fairhurst
          <Avatar
            sx={avatarStyle}
            src="/assets/headshot.png"
            alt="Caroline Fairhurst"
          />
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{ mx: 5, my: 3, "@media (max-width: 800px)": { mx: 2 } }}
        align="center"
        color="text.primary"
      >
        {textTop}

        <Paper sx={dividerStyle}></Paper>
        {textBottom}
      </Typography>
    </Box>
  );
}

export default About;
