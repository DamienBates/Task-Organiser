import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import CustomTheme from './CustomTheme';

const App = () => {
  return (
    <Box style={{ padding: '1rem' }}>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/CreateTask' element={<CreateTask />} />
          <Route path='/TaskList' element={<TaskList />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
};

export default App;