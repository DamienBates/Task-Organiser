import React from "react";

// We use Route in order to define the different routes of our application
import { Routes, Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </div>
  );
};

export default App;