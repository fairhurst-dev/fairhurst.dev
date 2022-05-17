import React from "react";
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";

function Intro() {
  return (
    <Grid container spacing={8}>
      {" "}
      <Grid alignItems="center" xs={12} md={8} item container>
        <Typography variant="body1" align="center" color="text.primary">
          The Magic Mirror, an idea first popularized by the Brothers Grimm in
          an 1812 fairy tale, continues to be replicated to this day, such as
          being used to conceal TVs. What do makers mean when they say a “Magic
          Mirror”? Most magic mirrors consist of a repurposed monitor and a
          sheet of two way glass, that allows the user to see both their
          reflection and the images displayed on the screen. Makers have gone
          above and beyond, adding facial and voice commands, or even artificial
          intelligence. This was really my first dive into the maker-space.
          Makers look to combine software and hardware to solve unique
          engineering challenges that often spark a lot of joy! The idea of the
          magic mirror has fascinated makers, as it is a great marriage between
          software, hardware, and design
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={4}
        container
        item
        justifyContent="center"
        alignItems="center"
      >
        <Box marginBottom="5px" maxHeight="200px" maxWidth="200px">
          <img
            alt="exploded view"
            width="100%"
            src="/assets/tempImgs/magic_mirror_ui.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Intro;
