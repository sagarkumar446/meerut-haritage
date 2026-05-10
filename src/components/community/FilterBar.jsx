import React from "react";

export default function FilterBar({ onFilterChange }) {
  const filters = ["Newest", "Most Liked", "Most Commented"];

  return (
    <div className="flex gap-4 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          {f}
        </button>
      ))}
    </div>
  );
}
