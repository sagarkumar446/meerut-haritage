import React from "react";

const quickLinks = [
  { icon: "fa-map", label: "Interactive Map" },
  { icon: "fa-route", label: "Heritage Trail" },
  { icon: "fa-camera", label: "Photo Gallery" },
  { icon: "fa-book", label: "Travel Guide" },
];

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-heritage-brown heritage-text mb-6">Quick Links</h3>
      <div className="space-y-3">
        {quickLinks.map((link, idx) => (
          <span key={idx} className="flex items-center text-heritage-brown hover:text-heritage-gold transition-colors cursor-pointer">
            <i className={`mr-3 fas ${link.icon}`}></i>
            {link.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
