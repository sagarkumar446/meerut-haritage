import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-heritage to-blue-100">
    <div className="flex space-x-2 mb-4">
      <div className="w-6 h-6 rounded-full bg-heritage animate-bounce" style={{ animationDelay: "0s" }}></div>
      <div className="w-6 h-6 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-6 h-6 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      <div className="w-6 h-6 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: "0.6s" }}></div>
    </div>
    <span className="text-2xl font-bold text-heritage tracking-wide animate-pulse">Loading Meerut Heritage...</span>
  </div>
);

export default Loader;
