import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-80 text-white py-4 px-8 flex items-center justify-between fixed w-full top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-lg" />{" "}
        {/* Replace with actual logo path */}
        <span
          style={{ fontFamily: "Playfair Display, serif" }}
          className="font-bold text-lg"
        >
          Interior Deco
        </span>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="space-x-6 hidden md:flex">
        <Link
          to="/"
          className="hover:text-gray-400 hover:underline"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-400 hover:underline"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Contact
        </Link>
        <Link
          to="/gallery"
          className="hover:text-gray-400 hover:underline"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Gallery
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 md:hidden">
          <div className="flex flex-col space-y-2 py-4 px-8">
            <Link
              to="/"
              className="hover:text-gray-400 hover:underline"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-400 hover:underline"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              className="hover:text-gray-400 hover:underline"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
