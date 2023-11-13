import React, { useState } from 'react';
import './Slider.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

const Slider = () => {
  const images = [
    image4, image2, image6, image3, image1, image5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      
      <div className="slider-container">
        <button className="slider-button" onClick={goToPreviousImage}>
          Previous
        </button>
        <img
          className="slider-image"
          src={images[currentImageIndex]}
          alt="Slider"
          width="666"
          height="500"
        />
        <button className="slider-button" onClick={goToNextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
