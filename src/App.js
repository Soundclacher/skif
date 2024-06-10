import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import './styles/normalize.css';
import './styles/main.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;