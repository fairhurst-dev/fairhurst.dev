import React from "react";
import { Typography, Grid, Link } from "@mui/material";
import ImageModal from "../ImageModal";

function Intro() {
  return (
    <Grid mb={3} container spacing={2}>
      {" "}
      <Grid alignItems="center" s={12} md={8} item container>
        <Typography variant="body1" align="center" color="text.primary">
          A Magic Mirror is a mirror that displays your reflection overlaid with
          live widgets of information, such as the time, date, and weather.
          Makers most commonly use a RaspberryPi-powered monitor covered by a
          sheet of two-way glass to make a Magic Mirror. The construction of
          these mirrors combines an understanding of remote computing with the
          woodworking and design skills needed to build an attractive frame,
          creating a useful command center and a beautiful addition to your
          wall.
        </Typography>
        <Typography variant="body1" align="center" color="text.primary">
          <Link
            color="secondary.main"
            target="_blank"
            href="github.com/fairhurst-dev/MagicMirror"
          >
            github.com/fairhurst-dev/MagicMirror
          </Link>{" "}
        </Typography>
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
          altText="magic mirror UI"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_ui.png"
          height="250px"
          width="250px"
        />
      </Grid>
    </Grid>
  );
}

export default Intro;
