import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import carousel6 from "../assets/carousel6.jpg";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Image */}
      <img
        src={images[current]}
        alt={`carousel-${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Centered Headings */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <h2 className="text-lg md:text-xl uppercase tracking-wide mb-2">Welcome to the</h2>
        <h1 className="text-3xl md:text-5xl font-bold">National Youth Department Kenya</h1>
      </div>

      {/* InfoCard Overlay */}
<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 w-[90%] md:w-3/4 lg:w-2/3">
  <div className="bg-white/90 rounded-[60px] shadow-2xl p-6 flex flex-col md:flex-row justify-around items-center gap-6 text-center backdrop-blur-md">

    {/* Community Section */}
    <div className="flex items-center space-x-4">
      <div className="border-2 border-blue-500 p-3 rounded-full text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198v.031a11.944 11.944 0 0 1-5.999 1.75c-2.17 0-4.207-.576-5.963-1.584a6.062 6.062 0 0 1 .001-3.135m12-.062a5.971 5.971 0 0 0-.941-3.197A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772 5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-sm text-gray-600 font-semibold">Community</p>
        <h2 className="text-xl font-bold text-gray-900">2,000+</h2>
      </div>
    </div>

    {/* Region Section */}
    <div className="flex items-center space-x-4">
      <div className="border-2 border-green-500 p-3 rounded-full text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-sm text-gray-600 font-semibold">Regions</p>
        <h2 className="text-xl font-bold text-gray-900">6</h2>
      </div>
    </div>

    {/* Button */}
    <div>
      <a href="#about">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-full transition">
          Explore More
        </button>
      </a>
    </div>

  </div>
</div>


      {/* Carousel Indicator Bars */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-6 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400/50"
            } transition`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70 z-40">
        <span className="text-xs mb-1">Scroll Down</span>
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default HeroCarousel;
