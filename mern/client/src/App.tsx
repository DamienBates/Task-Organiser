import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Edit from "./components/CRUD/Edit";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "./components/CustomTheme";

const App = () => {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <div style={{ margin: '3vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateTask" element={<CreateTask />} />
            <Route path="/Edit/:id" element={<Edit />}></Route>
            <Route path="/TaskList" element={<TaskList />} />
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;