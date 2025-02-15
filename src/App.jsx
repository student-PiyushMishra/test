import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Users from './pages/Users';  
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
