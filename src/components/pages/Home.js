import React from "react";
import { Paper, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Typing from "../Typing";

function Home(props) {
  return (
    <div>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          "& > :not(style)": {
            m: 2,
            width: "100vw",
            height: "80vh",
          },
        }}
      >
        <Paper elevation={10}>
          <Stack
            sx={{ mt: 10 }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typing />
            <Button
              size="large"
              variant="contained"
              value="about"
              onClick={(e) => props.goTo(e.target.value)}
            >
              Learn More
            </Button>{" "}
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
