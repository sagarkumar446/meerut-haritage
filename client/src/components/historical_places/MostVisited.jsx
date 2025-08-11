import React from "react";

const visitedPlaces = [
  {
    id: 1,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/347c080d2c-e002605068bd61453598.png",
    title: "Augarnath Temple",
    visitors: "2,847 visitors"
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b3bb4ee312-c2339dd55796369eb1ca.png",
    title: "St. John's Church",
    visitors: "2,156 visitors"
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e3c25232e1-771438f276b94a49f985.png",
    title: "Shahpeer Saheb",
    visitors: "1,923 visitors"
  }
];

const MostVisited = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-heritage-brown heritage-text mb-6">Most Visited Places</h3>
      <div className="space-y-4">
        {visitedPlaces.map(place => (
          <div key={place.id} className="flex items-center space-x-4 p-3 hover:bg-heritage-cream rounded-lg transition-colors">
            <img className="w-16 h-16 object-cover rounded-lg" src={place.image} alt={place.title} />
            <div>
              <h4 className="font-semibold text-heritage-brown">{place.title}</h4>
              <p className="text-sm text-gray-600">{place.visitors}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostVisited;
