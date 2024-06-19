import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Data from './pages/Data/Data';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import './styles/normalize.css';
import './styles/main.css';
import Footer from './pages/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Data fieldName="posts" url="http://localhost:5001/post" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Data fieldName="events" url="http://localhost:5001/event" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
