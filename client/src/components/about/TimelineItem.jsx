// TimelineItem.jsx
import React from "react";

const TimelineItem = ({ year, title, description, align, icon }) => {
  return (
    <div className="flex items-center">
      {/* Left Side */}
      {align === "left" && (
        <div className="w-1/2 pr-8 text-right">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-heritage-brown mb-2">
              {year} - {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      )}

      {/* Center Icon */}
      <div className="w-8 h-8 bg-heritage-gold rounded-full flex items-center justify-center relative z-10">
        {icon}
      </div>

      {/* Right Side */}
      {align === "right" && (
        <div className="w-1/2 pl-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-heritage-brown mb-2">
              {year} - {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
