import { Route, Routes } from 'react-router';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { TaskContext } from './TaskContext';
import { useMemo, useState } from 'react';
import CreateTask from './components/CreateTask';
import Home from './components/Home'
import TaskList from './components/TaskList';
import CustomTheme from './CustomTheme';
import DrawerComponent from './components/NavDrawer';

function App() {
    const [globalTasks, setGlobalTasks] = useState<Array<any>>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const memoisedContext = useMemo(() => ({
        submitted,
        setSubmitted,
        globalTasks,
        setGlobalTasks
    }), [submitted, globalTasks])

    return (
        <Box>
            <ThemeProvider theme={CustomTheme}>
                <CssBaseline />
                <DrawerComponent />
                <Box paddingLeft="65px" style={{
                }}>
                    <TaskContext.Provider value={memoisedContext}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/CreateTask' element={<CreateTask />} />
                        </Routes>
                    </TaskContext.Provider>
                </Box>
            </ThemeProvider>
        </Box>
    );
};

export default App