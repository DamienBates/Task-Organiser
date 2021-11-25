import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import SideBar from "./components/Side/SideBar"
import NavBar from "./components/Nav/NavBar";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1b1b1b',
      light: '#6d6d6d',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c7c7c7',
      light: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <SideBar color={theme.primary} />
        <Routes>
          <Route exact path="./"></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;