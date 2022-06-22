import React from "react";
import { Paper, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import { Grid } from "@mui/material";
import SuppliesList from "../mirror/SuppliesList";
import Hardware from "../mirror/Hardware";
import Software from "../mirror/Software";
import Intro from "../mirror/Intro";
import { Helmet } from "react-helmet";

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
    <>
      {" "}
      <Helmet>
        <title>Building A Magic Mirror</title>
        <meta property="og:title" content="Building A Magic Mirror" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://dev.fairhurst.dev/portfolio/mirror"
        />
        <meta
          property="og:image"
          content="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_final_full.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="Magic mirror full" />
      </Helmet>{" "}
      <Grid
        justifyContent="center"
        sx={{
          p: 2,
          justifyContent: "center",
          "@media (max-width: 800px)": { px: 2 },
        }}
      >
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
    </>
  );
}

export default Mirror;
