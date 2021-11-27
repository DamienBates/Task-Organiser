import React from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Inbox from "./components/Inbox";
import Starred from "./components/Starred";
import Home from "./components/Home";

const App = () => {
  return (
    <section>
      <Drawer />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Inbox" element={<Inbox />}></Route>
        <Route path="/Starred" element={<Starred />}></Route>
      </Routes>
    </section>
  );
};

export default App;