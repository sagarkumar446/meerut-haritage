import React from "react";

export default function Sidebar({ topics, stats }) {
  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic, i) => (
          <li key={i} className="text-blue-600 cursor-pointer hover:underline">
            #{topic}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Community Stats</h2>
        <p>👥 Members: {stats.members}</p>
        <p>📝 Posts: {stats.posts}</p>
      </div>
    </div>
  );
}
