import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Import icons
import bgImg1 from "../images/home-slide-img22.jpg";
import bgImage from "../images/home-slide-img10.jpg"; // Import your background image

function Contact() {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full p-6 bg-cover bg-center bg-opacity-80"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-black bg-opacity-80 max-w-screen-lg rounded-lg shadow-2xl">
        {/* Left Side: Image */}
        <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
          <img
            src={bgImg1} // Replace with your image path
            alt="Company"
            className="rounded-lg shadow-2xl w-80 md:w-96"
          />
        </div>

        {/* Right Side: Contact Info */}
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 md:ml-8 text-white">
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl font-bold mb-4"
          >
            Connect with us
          </h2>
          <p style={{ fontFamily: "Merriweather, serif" }}>
            Reach out on WhatsApp, Instagram, or give us a call for the best
            home design experience.
          </p>

          {/* Address */}
          <div className="flex items-start space-x-2">
            <p>
              <strong style={{ fontFamily: "Merriweather, serif" }}>
                Address:
              </strong>{" "}
              A-101, Raju Park, devli road, Khanpur, New Delhi - 110062
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex items-start space-x-2">
            <p>
              <strong style={{ fontFamily: "Merriweather, serif" }}>
                Phone:
              </strong>{" "}
              +91-97178 79668,+91-99719 67594
            </p>
          </div>

          {/* WhatsApp Contact */}
          <div className="relative group">
            <a
              href="https://wa.me/9717879668"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center space-x-4 bg-green-300 text-white py-2 px-4 rounded-3xl shadow-md hover:bg-green-400 transition duration-300 ease-in-out">
                <FaWhatsapp className="h-8 w-8" />
                <span>97178 79668</span>
              </button>
            </a>
          </div>

          {/* Instagram Contact */}
          <div className="relative group ">
            <a
              href="https://www.instagram.com/int.eriordeco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center space-x-4 bg-pink-400 text-white py-2 px-4 rounded-3xl shadow-md hover:bg-pink-500 transition duration-300 ease-in-out">
                <FaInstagram className="h-8 w-8" />
                <span>int.eriordeco</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
