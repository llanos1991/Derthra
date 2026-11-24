import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './view/Overview'; // <<-- Aquí importa tu vista Overview
import Asesoria from './view/Asesoria';
import Unidev from './view/Unidev';
//import Practica from './view/Practica';
import Nosotros from './view/Nosotros';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/asesoria" element={<Asesoria />} />
        <Route path="/derthra-code" element={<Unidev />} />
        <Route path="/unidev" element={<Navigate to="/derthra-code" replace />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* Luego podrías agregar más páginas aquí */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
