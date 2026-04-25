import React from 'react';
import '../styles/Fundador.css';
import christopherImg from '../img/integrantes/christopher_1.png'; // Asegúrate que la imagen esté en esa ruta
import WhatsAppButton from './WhatsAppButtom';

function Fundador() {
  return (
    <section className="clientes contenedor">
      <h2 className="titulo">Fundador</h2>
      <div className="cards">
        {/* Puedes agregar más fundadores aquí si lo necesitas */}
        <div className="card">
          <img src={christopherImg} alt="Msc. Christopher Josue Llanos Vasquez" />
          <div className="contenido-texto-card">
            <h4>Msc. Ing. Christopher Josue Llanos Vasquez</h4>
            <p>
              Implementador de sistemas criticos en el area aeronautica, transporte y militar, en los lenguajes de programación como Java,python,C++,ADA.
              Arquitecto de Software para sistemas Core banking, Core de Salud.
            </p>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
}

export default Fundador;