import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { TaskContext } from './TaskContext';
import { useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import TaskList from './components/TaskList';
import CustomTheme from './CustomTheme';
import CreateTask from './components/CreateTask';

function App() {
    const [search, setSearch] = useState<string>(""); // SearchValue sent up by children components
    const [globalTasks, setGlobalTasks] = useState<Array<any>>([]);

    const taskContext = useMemo(() => ({
        search,
        setSearch,
        globalTasks,
        setGlobalTasks
    }), [search, globalTasks])

    return (
        <Box>
            <ThemeProvider theme={CustomTheme}>
                <NavBar />
                <TaskContext.Provider value={taskContext}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/TaskList' element={<TaskList />} />
                        <Route path='/CreateTask' element={<CreateTask />} />
                    </Routes>
                </TaskContext.Provider>
            </ThemeProvider>
        </Box>
    );
};

export default App