import { Route, Routes } from "react-router";
import ClippedDrawer from "./components/ClippedDrawer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import CreateNewRecord from "./components/CRUD/CreateNewRecord";
import Record from "./components/CRUD/Record"
import Edit from "./components/CRUD/Edit";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "./components/CustomTheme";

const App = () => {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <ClippedDrawer />
        <div style={{ marginLeft: '225px', marginTop: '30px', marginRight: '35px' }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/CreateNewRecord" element={<CreateNewRecord />}></Route>
            <Route path="/Edit" element={<Edit />}></Route>
            <Route path="/Record" element={<Record />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;