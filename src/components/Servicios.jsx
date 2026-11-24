import React from 'react';
import aiImage from '../img/servicios/ia-vision-v2.png';
import iotImage from '../img/servicios/asesoria_tec.png';
import researchImage from '../img/servicios/personal_red.png';
import codeImage from '../img/servicios/equipos_informatico.png';
import advisingImage from '../img/servicios/asesor.png';
import '../styles/Servicios.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Derthra IA',
    href: '/asesoria',
    linkText: 'Conoce la asesoría tecnológica',
    category: 'Inteligencia artificial',
    description: 'Desarrollamos soluciones de IA para automatizar procesos y analizar imágenes, video y voz en entornos empresariales e industriales.',
    image: aiImage,
    imageAlt: 'Cámara de visión artificial conectada a un procesador de inteligencia artificial',
  },
  {
    title: 'Soluciones IA para IoT',
    href: '/asesoria',
    linkText: 'Ver servicios de inteligencia artificial',
    category: 'IoT y automatización',
    description: 'Integramos sensores, dispositivos y modelos de IA para monitorear procesos y convertir datos en alertas y acciones en tiempo real.',
    image: iotImage,
    imageAlt: 'Técnico supervisando equipos y controles en un entorno industrial',
  },
  {
    title: 'Proyectos I + D con IA',
    href: '/asesoria',
    linkText: 'Conoce nuestros proyectos de I+D',
    category: 'Investigación aplicada',
    description: 'Diseñamos prototipos y MVPs para probar ideas tecnológicas, medir su viabilidad y avanzar hacia soluciones listas para crecer.',
    image: researchImage,
    imageAlt: 'Especialista trabajando con infraestructura y equipos tecnológicos',
  },
  {
    title: 'Derthra Code',
    href: '/unidev',
    linkText: 'Ver cursos de programación',
    category: 'Cursos de programación',
    description: 'Aprende C++, Python y Ada con formación práctica, ejercicios y fundamentos para desarrollar tus propios proyectos.',
    image: codeImage,
    imageAlt: 'Estación de trabajo con teclado y computadora para programación',
  },
  {
    title: 'Asesoría académica',
    href: '/asesoria',
    linkText: 'Ver asesoría académica',
    category: 'Sistemas y software',
    description: 'Acompañamos proyectos académicos de ingeniería de sistemas, desde la definición del problema hasta el desarrollo de la solución.',
    image: advisingImage,
    imageAlt: 'Asesoría académica entre dos estudiantes frente a una computadora',
  },
];

function Servicios() {
  return (
    <section className="about-services" aria-labelledby="services-title">
      <div className="services-inner">
        <div className="services-heading">
          <h2 id="services-title">Nuestros servicios</h2>
        </div>

        <div className="servicio-cont">
          {services.map((service) => (
            <article className="servicio-ind" key={service.title}>
              <img
                className={`service-image ${service.imageClass || ''}`}
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
              />
              <div className="service-content">
                <p className="service-category">{service.category}</p>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link className="service-link" to={service.href}>{service.linkText}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
