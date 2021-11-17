import React from "react";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import headshot from "../../media/headshot.png";

function About() {
  const avatarStyle = { width: 200, height: 200, ml: 5 };
  const text =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 3,
        },
      }}
    >
      <Paper elevation={10}>
        <Typography
          sx={{ p: 5 }}
          variant="h2"
          align="center"
          color="text.primary"
        >
          Caroline Fairhurst
        </Typography>
        <Box sx={{ pb: 10, m: 2 }} display="flex">
          {" "}
          <Typography variant="h5" align="center" color="text.primary">
            {text}
          </Typography>
          <Avatar sx={avatarStyle} src={headshot} alt="Caroline Fairhurst" />
        </Box>
      </Paper>
    </Box>
  );
}

export default About;
