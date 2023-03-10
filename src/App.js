import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logements from './pages/Logements';




function App() {
  return <BrowserRouter>
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/Logements/:idLogement/*" element={<Logements/>}/>
{/*En cas d'erreur de déclaration de page */}
<Route path="*" element={<Error />} />
 </Routes>
  </BrowserRouter>
  
}

export default App;

