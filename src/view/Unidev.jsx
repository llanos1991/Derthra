import React from 'react';
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import WhatsAppButton from "../components/WhatsAppButtom";
import Footer from "../components/Footer";
import '../styles/Videos.css';

import cppVideo from "../videos/cpp.mp4";
import pythonVideo from "../videos/python.mp4";
import adaVideo from "../videos/ada.mp4";

function Unidev() {
  return (
    <>
      <Navbar />

      {/* ===== SECCIÓN CURSOS ===== */}
      <div>
        <Videos
          title="¡Descubre el poder del lenguaje C++ desde cero!"
          description="Aprender C++ te da acceso al corazón del rendimiento y control en la programación. Es el lenguaje detrás de videojuegos, sistemas operativos, software embebido y aplicaciones de alto nivel, ideal para quienes buscan entender cómo funciona realmente una computadora y crear software eficiente y poderoso."
          listItems={[
            'Sistemas operativos',
            'Software embebido',
            'Motores de videojuegos',
            'Aplicaciones de escritorio de alto rendimiento',
            'Finanzas y trading de alta frecuencia',
            'Simulaciones científicas y físicas',
            'Desarrollo de compiladores',
            'Controladores (drivers)',
            'Robótica e IoT'
          ]}
          videoSrc={cppVideo}
        />

        <Videos
          title="Curso de Python práctico"
          description="Aprender las bases de Python te brinda una comprensión sólida de la programación, desarrollando pensamiento lógico y habilidades prácticas que te abrirán las puertas al desarrollo web, ciencia de datos, automatización y mucho más. Es el primer paso hacia un mundo lleno de oportunidades tecnológicas."
          listItems={[
            'Desarrollo web (con frameworks como Django, Flask)',
            'Ciencia de datos (pandas, NumPy, matplotlib, seaborn)',
            'Machine Learning e inteligencia artificial (scikit-learn, TensorFlow, PyTorch)',
            'Automatización de tareas / scripts',
            'Desarrollo de aplicaciones de escritorio (Tkinter, PyQt)',
            'Análisis financiero y trading algorítmico',
            'Testing y QA',
            'Desarrollo de videojuegos (Pygame, Panda3D)',
            'Ciberseguridad / Hacking ético',
            'Internet of Things (IoT) (Raspberry Pi + sensores)',
          ]}
          videoSrc={pythonVideo}
        />

        <Videos
          title="Curso de Ada para programación crítica"
          description="Aprender Ada te permite dominar un lenguaje utilizado en sistemas críticos como aviación, defensa y espacio. Su enfoque en la seguridad, confiabilidad y claridad lo convierte en una herramienta esencial para quienes buscan desarrollar software robusto en entornos donde los errores no son una opción."
          listItems={[
            'Aeronáutica (aviónica, sistemas de control de vuelo)',
            'Defensa (misiles, radares, sistemas de armas)',
            'Espacio (satélites, vehículos espaciales, NASA, ESA)',
            'Transporte ferroviario (sistemas de señalización y control)',
            'Sistemas embebidos críticos (pacientes hospitalarios, automatización industrial)',
            'Controladores de tráfico aéreo',
            'Aplicaciones militares y navales',
            'Software de tiempo real y alta confiabilidad'
          ]}
          videoSrc={adaVideo}
        />
      </div>

      {/* ===== BOTÓN Y FOOTER ===== */}
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Unidev;

