import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fundador from "../components/Fundador";
import Servicios from "../components/Servicios";
import PageSEO from "../components/PageSEO";

function Overview () {
  return (
    <div className="App">
      <PageSEO
        title="DERTHRA | Cursos de programación y soluciones tecnológicas en Perú"
        description="Aprende C++, Python y Ada, o conoce las soluciones de inteligencia artificial, software y asesoría tecnológica de DERTHRA en Perú."
        path="/"
      />
      <Header />
      <Servicios />
      <Fundador />
      <Footer />
    </div>
  );
}

export default Overview;

