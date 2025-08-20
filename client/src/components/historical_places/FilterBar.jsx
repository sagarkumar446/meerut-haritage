import React from "react";

const FilterBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-xl font-semibold text-heritage-brown heritage-text">
          Filter Historical Places
        </h2>
        <div className="flex flex-wrap gap-3">
          <select className="px-4 py-2 border border-heritage-tan rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold">
            <option>Sort by Popularity</option>
            <option>Oldest First</option>
            <option>Newest First</option>
          </select>
          <select className="px-4 py-2 border border-heritage-tan rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold">
            <option>All Types</option>
            <option>Monument</option>
            <option>Temple</option>
            <option>Fort</option>
            <option>Museum</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
