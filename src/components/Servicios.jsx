import React from 'react';
import red from '../img/servicios/personal_red.png';
import video from '../img/servicios/videovigilancia.png';
import install from '../img/servicios/equipos_informatico.png';
import asesorTec from '../img/servicios/asesoria_tec.png';
import dev from '../img/servicios/dev.png';
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
            <h3>Infraestructura de Red y Conectividad</h3>
            <p>
                Brindamos servicios de instalación y configuración de routers y switches, implementación de redes LAN y 
                WiFi seguras, cableado estructurado (UTP categoría 5e/6) y fibra óptica, además de configuración de redes 
                segmentadas con control de acceso para un mejor rendimiento y seguridad.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={video} alt="video vigilancia" />
            <h3>Sistemas de Videovigilancia</h3>
            <p>
                Ofrecemos instalación de cámaras de seguridad IP y grabadores (DVR/NVR), configuración de monitoreo local y remoto,
                integración con dispositivos móviles para vigilancia por app, y asesoría en ubicación estratégica para lograr la mejor 
                cobertura.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={install} alt="instalacion de equipos inf" />
            <h3>Instalación de Equipos Informáticos</h3>
            <p>
                Instalamos y configuramos PCs, laptops, impresoras y escáneres, así como sistemas operativos y programas institucionales,
                incluyendo la configuración de impresoras en red.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={asesorTec} alt="asesoria tecnica" />
            <h3>Asesoría Tecnológica Personalizada</h3>
            <p>
                Evaluamos las necesidades tecnológicas de cada institución, ofreciendo recomendaciones personalizadas.
                Proponemos mejoras para optimizar el uso de equipos y arquitectura de red, garantizando eficiencia.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={dev} alt="desarrollo" />
            <h3>UNIdev</h3>
            <p>
                Ofrecemos enseñanza en programación en C++ y ADA, con enfoques prácticos para fortalecer las habilidades de los estudiantes en el desarrollo de software eficiente y estructurado.
                Nuestros cursos cubren desde los conceptos básicos hasta técnicas avanzadas, adaptados a las necesidades de cada alumno.
            </p>
          </div>

          <div className="servicio-ind">
            <img src={asesor} alt="asesor de tesis" />
            <h3>Asesor de tesis</h3>
            <p>
            Brindamos asesoría personalizada en la elaboración de tesis o tesinas para la carrera de Sistemas.
            Guiamos a los estudiantes a lo largo del proceso, desde la definición del tema hasta la estructuración y 
            presentación final, asegurando un trabajo académico sólido y de calidad.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
