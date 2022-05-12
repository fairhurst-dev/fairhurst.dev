import { createTheme } from "@mui/material";
import "@fontsource/varta/300.css";
import "@fontsource/varta/600.css";
import "@fontsource/jost/700-italic.css";
import "@fontsource/jost/700.css";

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      "varta",
      "jost",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    h4: {
      fontWeight: "bold",
    },
    body2: {
      fontFamily: "varta",
    },
    body1: {
      fontFamily: "varta",
      fontSize: "1.25rem",
    },
    h5: {
      fontFamily: "varta",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#020034",
    },
    secondary: {
      main: "rgb(232, 51, 244)",
    },
  },
  overrides: {
    MuiPaper: {
      root: {},
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36,
      },
    },
  },
});

export default theme;
