import { Route, Routes } from "react-router";
import { ThemeProvider } from "@mui/material";
import { TaskContext } from "./TaskContext";
import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline";
import FormHandler from "./components/FormHandler";
import Home from "./components/Home";
import CustomTheme from "./CustomTheme";
import DrawerComponent from "./components/NavDrawer";
import axios from "axios";

interface ToDoListProps {
    task: string,
    comments: string,
    priority: string,
}

const todoList = {
    task: "",
    comments: "",
    priority: ""
}

function App() {
    const [apiReturn, setApiReturn] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [todo, setTodo] = useState<ToDoListProps>(todoList)
    const [edited, setEdited] = useState<ToDoListProps>(todoList)

    // Memoised values
    const memoisedContext = useMemo(() => ({
        todo, setTodo, apiReturn, setApiReturn, edited, setEdited, // Create, Read, & Update Handlers 
        loading, setLoading, fetchTasks
    }), [edited, todo, apiReturn, loading])

    // Retrieve Mongo Tasks
    async function fetchTasks() {
        setLoading(true);

        try {
            await axios
                .get(`${process.env.REACT_APP_PUBLIC_URL}`, { timeout: 5000 })
                .then((response) => {
                    setApiReturn(response.data.tasks)
                    setLoading(false);
                })
        } catch (error) {
            console.log("Something went wrong")
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Box>
            <ThemeProvider theme={CustomTheme}>
                <CssBaseline />
                <DrawerComponent />
                <Box marginLeft="50px">
                    <TaskContext.Provider value={memoisedContext}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/TaskList" element={<FormHandler />} />
                        </Routes>
                    </TaskContext.Provider>
                </Box>
            </ThemeProvider>
        </Box>
    );
};

export default App