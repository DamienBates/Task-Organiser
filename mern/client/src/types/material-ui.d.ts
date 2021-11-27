import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Adds "neutral" as an option to palette
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  // Adds "status" as an option to themes
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}
