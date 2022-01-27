import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList';
import { ThemeProvider } from '@emotion/react';
import CustomTheme from './CustomTheme';

const App = () => {
  return (
    <section style={{ padding: '1rem' }}>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <div style={{}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/CreateTask' element={<CreateTask />} />
            <Route path='/TaskList' element={<TaskList />} />
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;