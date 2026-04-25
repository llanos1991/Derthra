import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fundador from "../components/Fundador";
import Servicios from "../components/Servicios";

function Overview () {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Fundador />
      <Footer />
    </div>
  );
}

export default Overview;

