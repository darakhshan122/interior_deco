import React, { useState } from "react";
import "./style.css";

// Import images at the top of the file
import officeImg from "../images/home-slide-img4.jpg"; // Replace with your image path
import img1 from "../images/home-slide-img1.jpg";
import img2 from "../images/home bg3.jpg";
import img3 from "../images/home-slide-img31.jpg";
import img4 from "../images/home-slide-img24.jpg";
import img5 from "../images/home-slide-img32.jpg";
import img6 from "../images/home-slide-img33.jpg";

import img7 from "../images/home bg2.jpg";
import img8 from "../images/home-slide-img20.jpg";
import img9 from "../images/home-slide-img19.jpg";

import img10 from "../images/home bg1.jpg";
import img11 from "../images/home-slide-img35.jpg";
import img12 from "../images/home-slide-img34.jpg";

import img13 from "../images/home-slide-img21.jpg";
import img14 from "../images/home-slide-img37.jpg";
import img15 from "../images/home-slide-img18.jpg";

import img16 from "../images/home-slide-img26.jpg";
import img17 from "../images/home-slide-img12.jpg";
import img18 from "../images/home-slide-img25.jpg";

import img19 from "../images/home-slide-img15.jpg";
import img20 from "../images/home-slide-img38.jpg";
import img21 from "../images/home-slide-img14.jpg";

import img22 from "../images/home-slide-img7.jpg";
import img23 from "../images/home-slide-img6.jpg";
import img24 from "../images/home-slide-img8.jpg";

import img25 from "../images/home-slide-img30.jpg";
import img26 from "../images/home-slide-img17.jpg";
import img27 from "../images/home-slide-img3.jpg";

import img28 from "../images/home-slide-img23.jpg";
import img29 from "../images/home-slide-img13.jpg";
import img30 from "../images/home-slide-img28.jpg";

import img31 from "../images/home-slide-img27.jpg";
import img32 from "../images/home-slide-img10.jpg";
import img33 from "../images/home-slide-img39.jpg";

import img34 from "../images/home-slide-img40.jpg";
import img35 from "../images/home-slide-img41.jpg";
import img36 from "../images/home-slide-img42.jpg";

import img37 from "../images/home-slide-img44.jpg";
import img38 from "../images/home-slide-img45.jpg";
import img39 from "../images/home-slide-img46.jpg";

import img40 from "../images/home-slide-img47.jpg";
import img41 from "../images/home-slide-img48.jpg";
import img42 from "../images/home-slide-img49.jpg";

import img43 from "../images/home-slide-img50.jpg";
import img44 from "../images/home-slide-img51.jpg";
import img45 from "../images/home-slide-img52.jpg";

import img46 from "../images/home-slide-img53.jpg";
import img47 from "../images/home-slide-img54.jpg";
import img48 from "../images/home-slide-img55.jpg";

import img49 from "../images/home-slide-img56.jpg";
import img50 from "../images/home-slide-img57.jpg";
import img51 from "../images/home-slide-img58.jpg";

import img52 from "../images/home-slide-img59.jpg";
import img53 from "../images/home-slide-img60.jpg";
import img54 from "../images/home-slide-img61.jpg";

import img55 from "../images/home-slide-img62.jpg";
import img56 from "../images/home-slide-img63.jpg";
import img57 from "../images/home-slide-img64.jpg";

import img58 from "../images/home-slide-img65.jpg";
import img59 from "../images/home-slide-img66.jpg";
import img60 from "../images/home-slide-img68.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img58,
  img57,
  img59,
  img60,
];

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
      <p className="text-center text-white mb-6 text-xl md:text-2xl lg:text-3xl">
        <b>OUR WORK</b>
      </p>

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
