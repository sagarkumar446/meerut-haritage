// StorySection.jsx
import React from "react";
import TimelineItem from "./TimelineItem";
import { FaSeedling, FaUsers, FaTrophy } from "react-icons/fa";

const StorySection = () => {
  const timelineData = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Started as a passion project to document Meerut's untold stories and preserve local history for future generations.",
      align: "left",
      icon: <FaSeedling className="text-white text-sm" />,
    },
    {
      year: "2022",
      title: "Community Growth",
      description:
        "Expanded our team with local historians, photographers, and storytellers who share our vision.",
      align: "right",
      icon: <FaUsers className="text-white text-sm" />,
    },
    {
      year: "2024",
      title: "Recognition",
      description:
        "Became the go-to resource for Meerut tourism and history, featured in local media and tourism boards.",
      align: "left",
      icon: <FaTrophy className="text-white text-sm" />,
    },
  ];

  return (
    <section id="story-section" className="py-16 bg-heritage-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-heritage-brown mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The journey of how Meerut Heritage came to life
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-heritage-gold"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
