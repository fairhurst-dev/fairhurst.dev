import { createTheme } from "@mui/material";

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
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
  },
  palette: {
    secondary: { main: "#EB555F" },
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
