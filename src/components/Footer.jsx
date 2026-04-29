import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="Contacto" className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h4>
            <FaPhoneAlt className="icon" aria-hidden="true" /> Celular
          </h4>
          <p>(+51) 956397062</p>
        </div>

        <div className="footer-item">
          <h4>
            <FaEnvelope className="icon" aria-hidden="true" /> Email
          </h4>
          <p>
            <a href="mailto:unitech.negocio@gmail.com">
              derthra.solutions@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <h2 className="footer-copy">
        Copyright &copy; {new Date().getFullYear()} <span>DERTHRA</span>
      </h2>
    </footer>
  );
}

export default Footer;
