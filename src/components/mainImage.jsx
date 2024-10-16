// src/components/MainImage.jsx
import React, { useState, useEffect } from "react";

// Import images
import bgImg1 from "../images/home-slide-img49.jpg";
import bgImg2 from "../images/home bg2.jpg";
import bgImg3 from "../images/home-slide-img68.jpg";

function MainImage() {
  const images = [bgImg1, bgImg2, bgImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div
        className="relative w-full h-[70vh] md:h-[80vh] bg-contain  bg-center shadow-md transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Quote Text */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 text-white bg-black bg-opacity-60 p-3 md:p-4 rounded-xl shadow-lg max-w-xs md:max-w-md">
          <h3
            style={{ fontFamily: "Merriweather, serif" }}
            className="text-base md:text-xl font-semibold mb-2"
          >
            At Interior Deco, we take creativity to the next level. Forget about
            better – Your dream house should look the BEST
          </h3>
        </div>

        {/* Description Text */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white bg-black bg-opacity-60 p-3 md:p-4 rounded-md max-w-xs md:max-w-md">
          <p
            style={{ fontFamily: "Merriweather, serif" }}
            className="text-sm md:text-base leading-relaxed"
          >
            We are a new age freelance interior designer based in Delhi NCR.
            Specialized in residential and commercial spaces, making the best of
            the available space, providing design solutions according to the
            client's personal taste and making it all look like a dream. After
            all, beauty is on the inside!
            <br />
            <br />
            We believe the best way to have a good idea is to have a lot of
            ideas and the best way to succeed is to keep on excelling.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainImage;
