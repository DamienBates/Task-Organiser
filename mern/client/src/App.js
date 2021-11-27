import React from "react";
import { Route, Routes } from "react-router-dom";
import MUIDrawer from "./components/MUIDrawer";
import Inbox from "./components/Inbox";
import Home from "./components/Home";

const App = () => {
  return (
    <section>
      <MUIDrawer />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Inbox" element={<Inbox />}></Route>
      </Routes>
    </section>
  );
};

export default App;