import React from "react";
import { Paper, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import { Grid } from "@mui/material";
import SuppliesList from "../mirror/SuppliesList";
import Hardware from "../mirror/Hardware";
import Software from "../mirror/Software";
import Intro from "../mirror/Intro";

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
          sx={titleStyle}
          variant="h2"
          align="center"
          color="text.primary"
        >
          Building a Magic Mirror
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
            <Intro />
            <Fade in timeout={2500}>
              <Paper sx={dividerStyle}></Paper>
            </Fade>
            <Typography sx={subtitleStyle} variant="h4">
              Supplies
            </Typography>
            <SuppliesList />
            <Fade in timeout={2500}>
              <Paper sx={dividerStyle}></Paper>
            </Fade>
            <Typography sx={subtitleStyle} variant="h4">
              Software
            </Typography>
            <Software />
            <Fade in timeout={2500}>
              <Paper sx={dividerStyle}></Paper>
            </Fade>
            <Typography sx={subtitleStyle} variant="h4">
              Hardware
            </Typography>
            <Hardware />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Mirror;
