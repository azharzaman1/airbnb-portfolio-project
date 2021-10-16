import { createTheme, ThemeProvider, useTheme } from "@mui/material";

const ThemeWrapper = ({ children }) => {
  const muiTheme = useTheme();
  const colorTheme = createTheme({
    palette: {
      primary: {
        dark: "#a72c42",
        main: "#ff385c",
        light: "#e07b8e",
        contrastText: "#333",
      },
    },

    overrides: {
      MuiButton: {
        root: {
          textTransform: "inherit",
          fontFamily: "Inter",
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
    </>
  );
};

export default ThemeWrapper;
