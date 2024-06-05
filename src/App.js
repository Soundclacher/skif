import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home/Home';
import News from  './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import Map from  './pages/Map/Map';
import './styles/normalize.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </div>
  );
}

export default App;
