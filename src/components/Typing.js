import React from "react";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";
import headshot from "../media/headshot.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 120,
    height: 120,
  },
  title: {},
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {},
}));

function Typing() {
  const classes = useStyles();
  return (
    <Stack
      sx={{ mb: 5 }}
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Avatar
        className={classes.avatar}
        src={headshot}
        alt="Caroline Fairhurst"
      />

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Caroline Fairhurst"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Pedagogical Expert",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Stack>
  );
}

export default Typing;
