import { useState, useEffect } from "react";

import langdingPageImages from "../assets/images";


const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % langdingPageImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image slider */}
      <div className="absolute inset-0">
        {langdingPageImages.map((img, index) => (
            
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            loading="lazy"
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Text and buttons */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Meerut's Rich Heritage
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Explore the historical treasures and cultural gems of one of
            India's most significant cities
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-heritage px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors">
              Explore Places
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-heritage transition-colors">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
