import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import ReadTask from './components/ReadTask';
import { ThemeProvider } from '@emotion/react';
import CustomTheme from './CustomTheme';

const App = () => {
  return (
    <section>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <div style={{ margin: '3vh' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CreateTask' element={<CreateTask />} />
            <Route path='/ReadTask' element={<ReadTask />} />
          </Routes>
        </div>
      </ThemeProvider>
    </section >
  );
};

export default App;