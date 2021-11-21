import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

function Header(props) {
  const logoStyle = {
    cursor: "pointer",
    flexGrow: 1,
    ":hover": { color: "white" },
  };
  const appBarStyle = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .5)",
    borderRadius: "5px",
    position: "relative",
    zIndex: "1",
    background: "inherit",
    overflow: "hidden",
    background: "transparent",
    boxShadow: "none",
    ":before": {
      content: '""',
      position: "absolute",
      background: "inherit",
      zIndex: "-1",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      boxShadow: "inset 0 0 2000px rgba(169, 166, 242, 0.5)",
      filter: "blur(10px)",
      margin: "-20px",
    },
    position: "sticky",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={appBarStyle}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            color="secondary.main"
            variant="h6"
            component="div"
            onClick={(e) => props.goTo("home")}
            sx={logoStyle}
          >
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
              value="portfolio"
              onClick={(e) => props.goTo(e.target.value)}
            >
              PORTFOLIO
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
