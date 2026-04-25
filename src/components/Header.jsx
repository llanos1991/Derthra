import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import "../styles/Header.css";

// Imágenes del slider
import img1 from "../img/header/portada_2.png";
import img2 from "../img/header/slider2.png";
import img3 from "../img/header/slider3.png";
import img4 from "../img/header/slider4.png";

function Header() {
  return (
    <div className="App">
      <header id="Inicio">
        <Navbar />

        {/* === SLIDER CON PUNTOS === */}
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="header-slider"
        >
          {/* Slide 1 (con texto) */}
          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: `url(${img1})` }}>
              <div className="overlay">
                <h1>DERTHRA</h1>
                <h2>"FORJAMOS EL FUTURO CON INTELIGENCIA ARTIFICIAL"</h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 (solo imagen) */}
          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: `url(${img2})` }}></div>
          </SwiperSlide>

          {/* Slide 3 (solo imagen) */}
          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: `url(${img3})` }}></div>
          </SwiperSlide>

          {/* Slide 4 (solo imagen) */}
          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: `url(${img4})` }}></div>
          </SwiperSlide>
        </Swiper>
      </header>
    </div>
  );
}

export default Header;
