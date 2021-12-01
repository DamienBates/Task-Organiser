import { Route, Routes } from "react-router";
import ClippedDrawer from "./components/ClippedDrawer";
import Inbox from "./components/Inbox";
import Trending from "./components/Trending";
import Home from "./components/Home";
import Create from "./components/CRUD/Create";
import Record from "./components/CRUD/Record"
import Edit from "./components/CRUD/Edit";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "./components/CustomTheme";

const App = () => {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <ClippedDrawer />
        <div style={{ marginLeft: '215px', marginTop: '23px' }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Inbox" element={<Inbox />}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/Edit" element={<Edit />}></Route>
            <Route path="/Record" element={<Record />}></Route>
            <Route path="/Trending" element={<Trending />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;