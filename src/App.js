import React, { useState } from "react";
import './App.css';

//proflight logo is a PNG stored in assets
import logo1 from "./assets/Logo-proflight.png";
import logo2 from "./assets/Logo-proflight.png";
import logo3 from "./assets/Logo-proflight.png";
import logo4 from "./assets/Logo-proflight.png";

// buttons PNG are stored in assets
import nextButton from "./assets/nextButton.png";
import prevButton from "./assets/prevButton.png";

const LogoSlider = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Array where logos are stored
  const logos = [logo1, logo2, logo3, logo4];

  // this function moves the highlighted logo one position to the right
  const handleNext = () => {
    setCurrentLogoIndex((prevIndex) =>  prevIndex === logos.length - 1 ? 0 : prevIndex + 1);
  };

  // this function moves the highlighted logo one position to the left
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
