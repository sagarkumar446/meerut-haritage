import React from 'react';

const HeroSection = ({ 
  title = "Welcome to Meerut", 
  subtitle = "Everything You Need to Know About Meerut", 
  description = "Discover the rich heritage, vibrant culture, and modern charm of this historic city in Uttar Pradesh, India.", 
  buttonText = "Start Exploring",
  onButtonClick 
}) => (
  <section className="bg-gradient-to-br from-warm-orange to-warm-red text-black h-[500px] border flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <button 
          className="bg-white text-warm-orange px-8 py-3 rounded-full bg-yellow-300 font-semibold hover:bg-red-400 transition"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
