import React from "react";

const HeroSection = ({
  title = "Welcome to Meerut",
  subtitle = "Everything You Need to Know About Meerut",
  description =
    "Discover the rich heritage, vibrant culture, and modern charm of this historic city in Uttar Pradesh, India.",
  buttonText = "Start Exploring",
  onButtonClick,
}) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-heritage via-heritage-brown to-heritage text-heritage-cream" />
    <div className="section-shell relative py-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-heritage-gold">
          City Guide
        </p>
        <h1 className="mt-5 text-4xl md:text-5xl font-display bg-gradient-to-r from-heritage-gold to-warm-orange bg-clip-text text-transparent">{title}</h1>
        <p className="mt-4 text-lg text-heritage-cream/80">{subtitle}</p>
        <p className="mt-4 text-base text-heritage-cream/70">{description}</p>
        <button
          className="mt-8 bg-heritage-gold text-heritage px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-heritage-gold/90 transition-all duration-300 hover:scale-105 hover:shadow-lift"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
