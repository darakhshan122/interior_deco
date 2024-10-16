// src/components/Footer.jsx
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-4 px-8 mt-auto">
      <div className="flex justify-center space-x-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9717879668" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/int.eriordeco" // Replace with your Instagram profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaInstagram className="h-8 w-8" />
        </a>
      </div>
      <div className="text-center mt-2">
        <p style={{ fontFamily: "Merriweather, serif" }}>
          Contact us directly through our social media channels:
        </p>
        <p style={{ fontFamily: "Merriweather, serif" }}>
          <a
            href="https://wa.me/9717879668"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <a
            href="https://www.instagram.com/int.eriordeco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
