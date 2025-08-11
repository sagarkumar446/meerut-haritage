import React from "react";

const OurMission = () => {
  return (
    <section id="mission-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-heritage-brown mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are passionate storytellers dedicated to preserving and
              sharing the rich heritage of Meerut. Our blog serves as a bridge
              between the city's glorious past and its vibrant present, offering
              authentic insights into the culture, history, and hidden gems that
              make Meerut truly special.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through carefully researched articles, local stories, andStorySection
              community contributions, we aim to inspire both residents and
              visitors to discover the incredible tapestry of experiences that
              Meerut has to offer.
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1593c80fe4-31f994020cc204549b6b.png"
              alt="collage of Meerut landmarks including historical monuments, local markets, and cultural scenes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
