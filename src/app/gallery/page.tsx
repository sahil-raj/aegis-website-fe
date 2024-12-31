import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";

const content = [
  {
    id: 1,
    event_date: "31-12-2024",
    images: [
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
    ],
    title: "New Year's Eve Celebration",
  },
  {
    id: 2,
    event_date: "15-11-2024",
    images: [
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
    ],
    title: "Annual Tech Conference",
  },
  {
    id: 3,
    event_date: "20-10-2024",
    images: [
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
      "https://via.placeholder.com/800x600",
    ],
    title: "Hackathon 2024",
  },
];

const Gallery = () => {
  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-bold mb-10 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Event Gallery
        </h1>
        {content.map((event) => (
          <div key={event.id} className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-blue-400">
                {event.title}
              </h2>
              <div className="flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>{event.event_date}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {event.images.map((image, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={image}
                      alt={`${event.title} - Image ${i + 1}`}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BackgroundLayout>
  );
};

export default Gallery;
