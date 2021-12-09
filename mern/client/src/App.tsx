import { Route, Routes, useParams } from "react-router";
import ClippedDrawer from "./components/ClippedDrawer";
import Home from "./components/Home";
import CreateTask from "./components/CRUD/CreateTask";
import TaskList from "./components/CRUD/TaskList";
import Edit from "./components/CRUD/Edit";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "./components/CustomTheme";

function Editing() {
  let { id } = useParams();
  return (
    { id }
  )
}

const App = () => {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <ClippedDrawer />
        <div style={{ marginLeft: '21vh', marginTop: '30px', marginRight: '35px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateTask" element={<CreateTask />} />
            <Route path="/Edit/:id" element={<Edit />}>{Editing}</Route>
            <Route path="/TaskList" element={<TaskList />} />
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;