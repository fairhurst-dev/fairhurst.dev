import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";

function Home(props) {
  const paperStyle = { backgroundColor: "primary.main", padding: "3em" };
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "secondary.light",
    "& > :not(style)": {
      m: 2,
      width: "100vw",
      height: "80vh",
    },
  };
  return (
    <div>
      <Box component="div" sx={boxStyle}>
        <Stack
          sx={{ mt: 10 }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Paper sx={paperStyle} elevation={10}>
            <Typing />
          </Paper>
          <Button
            size="large"
            variant="contained"
            value="about"
            onClick={(e) => props.goTo(e.target.value)}
          >
            Learn More
          </Button>{" "}
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
