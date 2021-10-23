import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fairhurst.dev
          </Typography>
          <Stack direction="row">
            <Button
              size="large"
              color="inherit"
              value="home"
              onClick={(e) => props.goTo(e.target.value)}
            >
              HOME
            </Button>
            <Button
              size="large"
              color="inherit"
              value="about"
              onClick={(e) => props.goTo(e.target.value)}
            >
              ABOUT
            </Button>
            <Button
              size="large"
              color="inherit"
              value="contact"
              onClick={(e) => props.goTo(e.target.value)}
            >
              CONTACT
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
