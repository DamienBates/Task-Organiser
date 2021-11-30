import { Route, Routes } from "react-router";
import ClippedDrawer from "./components/ClippedDrawer";
import Inbox from "./components/Inbox";
import Trending from "./components/Trending";
import Home from "./components/Home";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/Theme";

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