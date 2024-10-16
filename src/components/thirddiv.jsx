import React from "react";
import {
  FaSmileBeam,
  FaCheckSquare,
  FaLaughSquint,
  FaPencilAlt,
  FaPuzzlePiece,
  FaAppleAlt,
  FaSearch,
  FaCogs,
  FaCog,
  FaLightbulb,
} from "react-icons/fa"; // Import icons from Font Awesome

const ThirdDiv = () => {
  // Array of icon details
  const iconDetails = [
    {
      icon: <FaCogs />,
      name: "STAGE 1",
      description: "We ask you a ton of questions",
    },
    {
      icon: <FaSearch />,
      name: "STAGE 2",
      description: "Site analysis & measurement.",
    },
    {
      icon: <FaLightbulb />,
      name: "STAGE 3",
      description: "Time for brainstorm!! We’ll share a bunch of ideas!!",
    },
    {
      icon: <FaAppleAlt />,
      name: "STAGE 4",
      description: "You can choose a couple of great ones.",
    },
    {
      icon: <FaPuzzlePiece />,
      name: "STAGE 5",
      description: "We will share the quotation..",
    },
    {
      icon: <FaCheckSquare />,
      name: "STAGE 6",
      description:
        "2D Drawing will be shared for the seal of approval from your side",
    },
    {
      icon: <FaPencilAlt />,
      name: "STAGE 7",
      description: "3D drawings will be shared",
    },
    {
      icon: <FaSmileBeam />,
      name: "STAGE 8",
      description: "Time for you to sit & wait for the wonder!!",
    },
  ];

  return (
    <div className="bg-black bg-opacity-80 h-2/3 flex flex-col items-center py-12 px-4">
      {/* Container for sub-divs */}
      <p
        style={{ fontFamily: "Playfair Display, serif" }}
        className="text-center text-white mb-4 text-2xl font-semibold"
      >
        PROJECT STAGES
      </p>
      <div className="w-full max-w-6xl">
        {/* First row with 3 sub-divs */}
        <div className="flex flex-wrap justify-center gap-14 mb-8">
          {iconDetails.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-60"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-lg font-semibold mb-1"
              >
                {item.name}
              </h4>
              <p
                style={{ fontFamily: "Merriweather, serif" }}
                className="text-sm text-gray-600 text-center"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row with 3 sub-divs */}
        <div className="flex flex-wrap justify-center gap-14 mb-8">
          {iconDetails.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-60"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-lg font-semibold mb-1"
              >
                {item.name}
              </h4>
              <p
                style={{ fontFamily: "Merriweather, serif" }}
                className="text-sm text-gray-600 text-center"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Third row with 2 sub-divs aligned to the left */}
        <div className="flex flex-wrap justify-center gap-14">
          {iconDetails.slice(6).map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-60"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-lg font-semibold mb-1"
              >
                {item.name}
              </h4>
              <p
                style={{ fontFamily: "Merriweather, serif" }}
                className="text-sm text-gray-600 text-center"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdDiv;
