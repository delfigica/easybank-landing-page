import { createTheme } from "@mui/material";

const colors = {
    DarkBlue:" hsl(233, 26%, 24%)",
    LimeGreen: "hsl(136, 65%, 51%)",
    BrightCyan: "hsl(192, 70%, 51%)",
    GrayishBlue: "hsl(233, 8%, 62%)",
    LightGrayishBlue: "hsl(220, 16%, 96%)",
    VeryLightGray: "hsl(0, 0%, 98%)",
    White: "hsl(0, 0%, 100%)"
}


export const theme = createTheme({
    typography: {
        fontFamily: "Public Sans, sans-serif"
    },
    palette: {
      primary: {
        main: colors.GrayishBlue,
      },
      secondary: {
          main: colors.VeryLightGray
      }
    },
  });