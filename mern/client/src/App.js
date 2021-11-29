import React from "react";
import { Route, Routes } from "react-router";
import ClippedDrawer from "./components/ClippedDrawer";
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
        <ClippedDrawer />
        <div style={{ marginLeft: '205px', marginTop: '23px' }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Inbox" element={<Inbox />}></Route>
            <Route path="/Trending" element={<Trending />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;