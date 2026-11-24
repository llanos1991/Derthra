import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo/derthra.png';
import '../styles/Navbar.css'; // Reutilizas los estilos del nav

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);
  
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Link to="/" aria-label="DERTHRA, página de inicio">
        <img src={logo} alt="DERTHRA" className="logo" />
      </Link>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        ☰
      </button>
      <div id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Inicio</Link>
        <Link to="/asesoria">Asesoría tecnológica</Link>
        <Link to="/unidev">Cursos de programación</Link>
        <Link to="/nosotros">Quiénes somos</Link>
      </div>
    </nav>
  );
}

export default Navbar;

