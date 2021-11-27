import React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SideBar from "./components/Side/SideBar";
import NavBar from "./components/Nav/NavBar";

// This concept is called module augmentation in typescript
// Where we can extend typescript types that are already defined

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

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

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#1b1b1b",
      light: "#6d6d6d",
    },
    secondary: {
      main: "#c7c7c7",
      light: "#ffffff",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="./"></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
