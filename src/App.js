/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import logo1 from "./assets/Logo-proflight.png";
import logo2 from "./assets/Logo-proflight.png";
import logo3 from "./assets/Logo-proflight.png";
import logo4 from "./assets/Logo-proflight.png";

// Importar imágenes de los botones
import nextButton from "./assets/nextButton.png";
import prevButton from "./assets/prevButton.png";

const LogoSlider = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Array con las rutas de las imágenes de los logos
  const logos = [logo1, logo2, logo3, logo4];

  // Función para avanzar al siguiente logo
  const handleNext = () => {
    setCurrentLogoIndex((prevIndex) =>  prevIndex === logos.length - 1 ? 0 : prevIndex + 1);
  };

  // Función para retroceder al logo anterior
  const handlePrevious = () => {
    setCurrentLogoIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <img
        src={prevButton}
        alt="Botón Anterior"
        className="button"
        onClick={handlePrevious}
        style={{ cursor: "pointer" }}
      />

      <div className="logo-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={`logo ${index === currentLogoIndex ? "highlighted" : ""}`}
          />
        ))}
      </div>

      <img
        src={nextButton}
        alt="Botón Siguiente"
        className="button"
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default LogoSlider;
