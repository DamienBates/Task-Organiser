import React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SideBar from "./components/Side/SideBar";
import NavBar from "./components/Nav/NavBar";

// Module Augmentation in TypeScript
// Where we can extend typescript types that are already defined

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
