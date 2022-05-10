import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import { Grid } from "@mui/material";
import mirrorText from "../data/MirrorText";
import SuppliesList from "../mirror/SuppliesList";

function Mirror() {
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
  const subtitleStyle = {
    color: "secondary.main",
    backgroundColor: "none",
    fontFamily: "jost",
    padding: "5px",
  };
  const avatarStyle = { width: 150, height: 150, m: "1em auto" };

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
          Building a Magic Mirror
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
        <Grid item md={10} xs={12}>
          <Paper
            sx={{
              backgroundColor: "transparent",
              height: "max-content",
              m: 2,
              p: 1,
            }}
            elevation={10}
          >
            <Typography sx={subtitleStyle} variant="h4">
              Intro
            </Typography>
            <Typography variant="h6" align="center" color="text.primary">
              {mirrorText.intro}
            </Typography>{" "}
            <Fade in timeout={2500}>
              <Paper sx={dividerStyle}></Paper>
            </Fade>
            <Typography sx={subtitleStyle} variant="h4">
              Supplies
            </Typography>
            <SuppliesList />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Mirror;
