import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

function Header() {
  const secondary = "rgb(232, 51, 244)";
  const buttonStyle = { fontFamily: "jost", fontWeight: "600" };
  const logoStyle = {
    cursor: "pointer",
    flexGrow: 1,
    ":link": { textDecoration: "none" },
    ":visited": { textDecoration: "none" },
    ":active": { textDecoration: "none" },
    ":hover": { color: "white", textDecoration: "none" },
    fontFamily: "jost",
    fontStyle: "italic",
    "@media (max-width: 650px)": {
      p: 1.5,
    },
  };
  const appBarStyle = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .5)",
    borderRadius: "5px",
    zIndex: "1",
    overflow: "hidden",
    background: "transparent",
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
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar sx={appBarStyle}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 650px)": {
              flexDirection: "column",
              p: 1,
            },
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Typography
              color="secondary.main"
              variant="h4"
              component="div"
              sx={logoStyle}
            >
              fairhurst.dev
            </Typography>
          </NavLink>
          <Stack direction="row">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: "white",
                  backgroundColor: isActive ? secondary : "",
                };
              }}
            >
              <Button
                sx={buttonStyle}
                size="large"
                color="inherit"
                value="home"
              >
                HOME
              </Button>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: "white",
                  backgroundColor: isActive ? secondary : "",
                };
              }}
              to="/about"
            >
              <Button
                sx={buttonStyle}
                size="large"
                color="inherit"
                value="about"
              >
                ABOUT
              </Button>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: "white",
                  backgroundColor: isActive ? secondary : "",
                };
              }}
              to="/portfolio"
            >
              <Button
                sx={buttonStyle}
                size="large"
                color="inherit"
                value="portfolio"
              >
                PORTFOLIO
              </Button>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: "white",
                  backgroundColor: isActive ? secondary : "",
                };
              }}
              to="/contact"
            >
              <Button
                sx={buttonStyle}
                size="large"
                color="inherit"
                value="contact"
              >
                CONTACT
              </Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
