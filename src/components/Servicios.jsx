import React from 'react';
import red from '../img/servicios/personal_red.png';
import video from '../img/servicios/videovigilancia.png';
import install from '../img/servicios/equipos_informatico.png';
import asesorTec from '../img/servicios/asesoria_tec.png';
import asesor from '../img/servicios/asesor.png';
import '../styles/Servicios.css';

export default function Servicios() {
  return (
    <section className="about-services">
      <div className="contenedor">
        <h2 className="titulo">Nuestros servicios</h2>
        <div className="servicio-cont">
          
          <div className="servicio-ind">
            <img src={red} alt="redes" />
            <h3>Derthra IA</h3>
            <p>
               Desarrollamos soluciones de inteligencia artificial orientadas a automatizar procesos y generar valor en distintos sectores, incluyendo modelos para imágenes, video y voz, así como aplicaciones en áreas industrial, salud y defensa, integradas a sistemas modernos mediante arquitecturas escalables.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={video} alt="video vigilancia" />
            <h3>Soluciones IA para IoT</h3>
            <p>
                Implementamos sistemas que combinan sensores, dispositivos IoT y algoritmos de inteligencia artificial para el monitoreo, automatización y análisis en tiempo real, permitiendo optimizar procesos operativos mediante soluciones integradas entre hardware y cloud.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={install} alt="instalacion de equipos inf" />
            <h3>Proyectos I + D con IA</h3>
            <p>
                Diseñamos y desarrollamos proyectos de investigación aplicada en inteligencia artificial, creando prototipos y MVPs que permiten validar ideas tecnológicas, evaluar su viabilidad y llevarlas a soluciones concretas con enfoque innovador.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={asesorTec} alt="asesoria tecnica" />
            <h3>Derthra Code</h3>
            <p>
                Brindamos formación práctica en programación con lenguajes como C++, Python, Java y ADA, enfocándonos en el desarrollo de lógica, buenas prácticas y preparación para proyectos reales dentro del entorno profesional.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={asesor} alt="asesor de tesis" />
            <h3>Asesoria academica en sistemas</h3>
            <p>
            Ofrecemos asesoría especializada para el desarrollo de tesis y trabajos académicos en ingeniería de sistemas, apoyando en la definición del problema, desarrollo de soluciones tecnológicas y aplicación de estándares de calidad.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
