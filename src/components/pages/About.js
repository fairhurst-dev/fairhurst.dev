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
  const textTop = `I am currently a cloud native Software Developer with 3 years of experience engineering frontend and backend applications. I am well versed in Javascript, 
  DynamoDB, AWS, and the Serverless Framework.
  I collaborated with the VP of Technology of Kaplan North America's Innovation Team to migrate our monolithic repository into an event-driven microservice
  platform on AWS. Additionally, I am spearheading the use of Artificial Intelligence on our team to automate repetitive business tasks and generate
  new content to drive conversions. I truly enjoy requirements engineering and breaking down technical concepts to our non-technical stakeholders.`;

  const textBottom = `My love of computing started when my parents gifted me a Gateway 98 computer. My passion led me to major in Computer Science
  at Stockton University, where I graduated Summa Cum Laude. In my free time I enjoy playing with my cat Saint, working out, and exploring New Jersey.`;

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
