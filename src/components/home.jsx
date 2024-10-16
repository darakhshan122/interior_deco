// src/components/Home.jsx
import React from "react";
import MainImage from "./mainImage";
import FirstDiv from "./image";
import SecondDiv from "./seconddiv";
import ThirdDiv from "./thirddiv";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Main Image Component */}
      <MainImage />

      {/* Second Div Component */}
      <SecondDiv />

      {/* First Div Component */}
      <FirstDiv />

      {/* Third Div Component */}
      <ThirdDiv />
    </div>
  );
};

export default Home;
