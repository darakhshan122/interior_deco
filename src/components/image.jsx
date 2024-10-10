
import React, { useState } from 'react';
import './style.css';

// Dynamically import all images from the folder using import.meta.glob
const imageFiles = import.meta.glob('../images/home-slide-img*.jpg');

// Convert the image files into an array
const images = Object.keys(imageFiles).sort().map((path) => {
  return path.replace('../', '/src/');
});

const FirstDiv = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container p-6 md:p-8 lg:p-11 h-[70vh] md:h-[75vh] lg:h-[80vh] flex flex-col items-center justify-center relative">
      <p className="text-center text-white mb-6 text-xl md:text-2xl lg:text-3xl"><b>OUR WORK</b></p>

      {/* Image Container */}
      <div className="flex items-center justify-center w-full">
        {/* Backward Button */}
        <button
          className="nav-button prev absolute left-2 md:left-4 lg:left-6 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        {/* Image Items */}
        <div className="image-container flex justify-center w-full mx-4 space-x-4">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="image-item w-28 h-40 md:w-40 md:h-56 lg:w-56 lg:h-72 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* Forward Button */}
        <button
          className="nav-button next absolute right-2 md:right-4 lg:right-6 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={handleNext}
          disabled={currentIndex >= images.length - 3}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FirstDiv;
























