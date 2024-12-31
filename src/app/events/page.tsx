import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import "../globals.css";

const Events = () => {
  const events = [
    {
      title: "Cybersecurity Workshop",
      date: "March 15, 2025",
      description: "An interactive workshop on modern cybersecurity practices and tools.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=600&h=400",
    },
    {
      title: "Annual Tech Meetup",
      date: "April 10, 2025",
      description: "Join industry leaders and innovators for a day of networking and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
    },
    {
      title: "Hackathon 2024",
      date: "December 12, 2024",
      description: "A thrilling 24-hour coding competition with talented participants worldwide.",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600&h=400",
    },
    {
      title: "TechFest 2024",
      date: "November 5, 2024",
      description: "Showcasing the latest advancements in technology and innovation.",
      image: "https://images.unsplash.com/photo-1531497865141-ff8c9c9efb48?auto=format&fit=crop&q=80&w=600&h=400",
    },
  ];

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Explore Our Events
        </h1>
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.slice(0, 2).map((event, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <img src={event.image} alt={event.title} className="w-full h-40 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.slice(2).map((event, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <img src={event.image} alt={event.title} className="w-full h-40 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Events;
