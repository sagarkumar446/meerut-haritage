import React from "react";

const PlaceCard = ({ image, title, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-heritage-brown heritage-text mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <i className="text-heritage-gold mr-2 fas fa-location-dot"></i>
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <button className="bg-heritage-brown text-white px-6 py-2 rounded-lg hover:bg-heritage-gold transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
