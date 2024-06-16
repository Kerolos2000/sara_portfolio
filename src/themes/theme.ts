import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#181818",
      paper: "#2c2c2c",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "dark",
    primary: {
      contrastText: "#ffffff",
      dark: "#ad2d87",
      light: "#784368",
      main: "#aa7b7b",
    },
  },
  shape: {
    borderRadius: 25,
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#fef7ff",
      paper: "#BB8493",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "light",
    primary: {
      contrastText: "#ffffff",
      dark: "#704264",
      light: "#49243E",
      main: "#e3b9b9",
    },
  },
  shape: {
    borderRadius: 25,
  },
};
