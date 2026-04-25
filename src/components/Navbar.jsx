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
    <nav className="navbar">
      <img src={logo} alt="Logo UNItech" className = "logo" />
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Inicio</Link>
        <Link to="/asesoria">Asesoria</Link>
        <Link to="/unidev">Derthra Code</Link>
        <Link to="/nosotros">Nosotros</Link>
      </div>
    </nav>
  );
}

export default Navbar;

