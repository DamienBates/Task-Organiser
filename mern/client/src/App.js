import React from "react";
import { Route, Routes, Router } from "react-router";
import Drawer from "./components/Drawer";
import Inbox from "./components/Inbox";
import Trending from "./components/Trending";
import Home from "./components/Home";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1b1b1b',
      primary: '#1b1b1b',
      light: '#6d6d6d',
    },
    neutral: {
      main: '#64748B',
      primary: '#64748B',
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
    <section>
      <ThemeProvider theme={Theme}>
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Inbox" element={<Inbox />}></Route>
          <Route path="/Trending" element={<Trending />}></Route>
        </Routes>
      </ThemeProvider>
    </section>
  );
};

export default App;