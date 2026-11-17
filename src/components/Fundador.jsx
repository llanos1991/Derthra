import React from 'react';
import '../styles/Fundador.css';
import christopherImg from '../img/integrantes/christopher_1.png';
import WhatsAppButton from './WhatsAppButtom';

function Fundador() {
  return (
    <section className="founder-section" aria-labelledby="founder-title">
      <div className="founder-inner">
        <header className="founder-heading">
          <h2 id="founder-title">Fundador</h2>
        </header>

        <article className="founder-profile">
          <img
            className="founder-photo"
            src={christopherImg}
            alt="Christopher Josue Llanos Vasquez, fundador de DERTHRA"
            loading="lazy"
          />

          <div className="founder-content">
            <p className="founder-credential">MSc. Ing.</p>
            <h3>Christopher Josue Llanos Vasquez</h3>
            <p className="founder-role">Arquitecto de software y especialista en sistemas críticos</p>
            <p className="founder-bio">
              Implementa sistemas críticos para los sectores aeronáutico, de
              transporte y defensa. Diseña arquitectura de software para soluciones
              bancarias y de salud.
            </p>
            <p className="founder-technologies">Java <span>·</span> Python <span>·</span> C++ <span>·</span> Ada</p>
          </div>
        </article>
      </div>
      <WhatsAppButton />
    </section>
  );
}

export default Fundador;
