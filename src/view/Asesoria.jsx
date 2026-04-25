import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButtom";
import tesis from '../img/asesoria/ejemplo1.png';
import infra from '../img/asesoria/asesorinfra.png';
import '../styles/Asesoria.css';

function Asesoria() {
  return (
      <>
      <Navbar />
      <section className="asesoria-ingenieria">
        <h2>Asesoría Profesional en Infraestructura de Red y Sistemas</h2>

        <p>
          Brindamos acompañamiento integral a empresas y profesionales en el desarrollo de proyectos de infraestructura de red y sistemas. 
          Desde la planificación hasta la implementación, con enfoque técnico y personalizado según las necesidades de tu organización.
        </p>

        <h3>¿Qué incluye nuestra asesoría?</h3>
        <div className="container">
        <div className="left-div">
          <ul>
            <li>Evaluación de necesidades y diagnóstico técnico</li>
            <li>Diseño de infraestructura de red (LAN, WAN, Wi-Fi, etc.)</li>
            <li>Configuración y gestión de servidores, routers, switches</li>
            <li>Implementación de sistemas de gestión (ERP, CRM, bases de datos)</li>
            <li>Seguridad informática y protección de datos</li>
            <li>Optimización del rendimiento y escalabilidad del sistema</li>
            <li>Documentación técnica y diagramas de red</li>
            <li>Soporte post-implementación y mantenimiento preventivo</li>
        </ul>
       </div>
       <div className="asesoria-img-container">
            <img src={infra} alt="Asesoria de infraestructura" className="img-estilo" />
       </div>
       </div>
      </section>
          
      <section className="asesoria-tesis">
        <h2>Asesoría de Tesis en el área de Sistemas y Software</h2>

          <p>
            Brindamos acompañamiento completo en el desarrollo de tesis para estudiantes de Ingeniería de Sistemas e Informática.
            Te guiamos desde la elección del tema hasta la defensa, con enfoque técnico y académico.
          </p>

       <h3>¿Qué incluye nuestra asesoría?</h3>
       <div className="container">
          <div className="left-div">
            <ul>
              <li>Elección y justificación del tema</li>
              <li>Formulación del problema, objetivos y metodología</li>
              <li>Revisión bibliográfica y marco teórico</li>
              <li>Desarrollo del sistema (Java, Python, PHP, etc.)</li>
              <li>Documentación técnica (diagramas, base de datos, pruebas)</li>
              <li>Correcciones de estilo y preparación para la exposición</li>
            </ul>
          </div>
          
          <div className="asesoria-img-container">
            <img src={tesis} alt="Asesoria de tesis" className="img-estilo" />
          </div>
        </div>   
      <h3>Reducción de Similitud</h3>
          <p>
            Optimizamos la redacción para disminuir el porcentaje de similitud en Turnitin.
            Aplicamos buenas prácticas de citación y redacción académica para lograr una entrega original y de calidad.
          </p>

          <p>Contáctanos para recibir asesoría profesional y personalizada para tu proyecto de tesis.</p>
      </section>
      <WhatsAppButton />
      <Footer />
      </>
  );
}

export default Asesoria;


