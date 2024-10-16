import React, { useState } from "react";
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
  img57,
  img58,
  img59,
  img60,
];

function Gallery() {
  const [fullImage, setFullImage] = useState(null);

  const handleImageClick = (image) => {
    setFullImage(image);
  };

  const handleCloseFullImage = () => {
    setFullImage(null);
  };

  return (
    <div className="p-6 md:p-12 mt-[10vh]">
      {/* Parent Container */}
      <div className="flex flex-col gap-0">
        {/* First Sub-Div: Office Image and Paragraph */}
        <div
          style={{ backgroundImage: `url(${img9})` }}
          className="flex flex-col md:flex-row gap-0 rounded-lg shadow-2xl h-[70vh]"
        >
          {/* Image Div */}
          <div className="flex-1 flex h-full">
            <img
              src={officeImg}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Paragraph Div */}
          <div className="flex-1 flex items-center justify-center p-[10vh] bg-black bg-opacity-80">
            <p
              style={{ fontFamily: "Merriweather, serif" }}
              className="text-lg md:text-xl text-center text-white"
            >
              We provide state-of-the-art office designs to enhance your
              workspace and productivity. Contact us to learn more about our
              services.
            </p>
          </div>
        </div>

        {/* Second Sub-Div: Our Work */}
        <div className="flex flex-col items-center mt-[15vh]">
          <p
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl font-bold mb-4"
          >
            OUR WORK
          </p>
          <div className="grid grid-cols-3 gap-6 w-2/3">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-4/5 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {fullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img
            src={fullImage}
            alt="Full-Screen"
            className="max-w-[95%] max-h-[95%] object-contain"
          />
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-white text-3xl"
            onClick={handleCloseFullImage}
          >
            &times; {/* This is the "X" sign */}
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
