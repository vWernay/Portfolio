import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

import theme from './styles/themes'
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar children={{} as ReactElement} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
