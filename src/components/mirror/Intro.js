import React from "react";
import { Typography, Grid } from "@mui/material";
import ImageModal from "../ImageModal";
import GitHubButton from "react-github-btn";

function Intro() {
  return (
    <Grid mb={3} container spacing={2}>
      {" "}
      <Grid alignItems="center" s={12} md={8} item container>
        <Typography variant="body1" align="center" color="text.primary">
          A Magic Mirror is a mirror that displays your reflection overlaid with
          live widgets of information, such as the time, date, and weather.
          Makers most commonly use a Raspberry Pi powered monitor covered by a
          sheet of two-way glass to make a Magic Mirror. The construction of
          these mirrors combines an understanding of remote computing with the
          woodworking and design skills needed to build an attractive frame,
          creating a useful command center and a beautiful addition to your
          wall.
        </Typography>
        <Grid
          display="flex"
          container
          justifyContent="center"
          alignContent="center"
          spacing={12}
        >
          <Grid item>
            <GitHubButton
              href="https://github.com/fairhurst-dev"
              data-size="large"
              aria-label="Follow @fairhurst-dev on GitHub"
            >
              Follow @fairhurst-dev
            </GitHubButton>
          </Grid>
          <Grid item>
            <GitHubButton
              href="https://github.com/fairhurst-dev/MagicMirror/subscription"
              data-icon="octicon-eye"
              data-size="large"
              aria-label="Watch fairhurst-dev/MagicMirror on GitHub"
            >
              Watch fairhurst-dev/MagicMirror
            </GitHubButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        s={12}
        md={4}
        container
        item
        justifyContent="center"
        alignItems="center"
      >
        <ImageModal
          altText="magic mirror final"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_final_full.png"
          height="500px"
          width="300px"
        />
      </Grid>
    </Grid>
  );
}

export default Intro;
