
import React from 'react';
import { FaSpa, FaHome, FaDumpster } from 'react-icons/fa';
import './style.css'; // Ensure this path is correct

const SecondDiv = () => {
  return (
    <div className="flex flex-col flex-grow bg-black bg-opacity-80 p-4 md:p-8 lg:p-12">
      {/* Title */}
      <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-center text-white text-xl md:text-2xl lg:text-3xl mb-8">WHAT WE ARE WORKING ON</p>

      {/* First Sub Div with Vertically Arranged Sub Divs */}
      <div className="flex flex-col h-full space-y-8 md:space-y-12 lg:space-y-16">
        {/* Sub Divs arranged horizontally */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full h-auto">
          {/* First Icon Box */}
          <div className="icon-box flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md flex-grow">
            <FaDumpster className="text-3xl mb-2 text-black" />
            <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-semibold mb-2 text-black">COMMERCIAL</h4>
            <p style={{ fontFamily: 'Merriweather, serif' }} className="text-sm text-gray-700">
              We believe in creating Hotel spaces that not only reflect the image of the 
              company but are also functional, bright and comfortable. Our designs induce a 
              positive vibe in the workforce and invigorates them to work productively and 
              efficiently. We specialize in designing large Hotels, corporate offices, call 
              centres, banks, shops etc. to specific needs and requirement.
            </p>
          </div>
          {/* Second Icon Box */}
          <div className="icon-box flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md flex-grow">
            <FaHome className="text-3xl mb-2 text-black" />
            <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-semibold mb-2 text-black">RESIDENTIAL</h4>
            <p style={{ fontFamily: 'Merriweather, serif' }} className="text-sm text-gray-700">
              We design, renovate residences and transform them into your dream abodes. Our 
              expertise is to understand the customers and design homes that reflect their 
              personality, taste, style and class. We believe 'Home is where the ART is' and 
              we ensure that your house looks no less than a work of art.
            </p>
          </div>
          {/* Third Icon Box */}
          <div className="icon-box flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md flex-grow">
            <FaSpa className="text-3xl mb-2 text-black" />
            <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-lg font-semibold mb-2 text-black">LANDSCAPING</h4>
            <p style={{ fontFamily: 'Merriweather, serif' }} className="text-sm text-gray-700">
              Outdoor areas are often the last to receive design attention, but they shouldn’t be: 
              What surrounds your home is just as important as what's in it. Our well-designed 
              landscaping ideas complement your home's architecture and design. We design manicured 
              front lawns, stone-paved pathways, intricate gardens using the right plants, flowers, 
              and shrubbery.
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="flex flex-col w-full h-auto p-4">
          {/* Additional content can go here if needed */}
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;


