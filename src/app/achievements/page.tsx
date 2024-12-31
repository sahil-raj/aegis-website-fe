import React from "react";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";

const achievements = [
  {
    id: 1,
    created_at: "31-12-2024",
    field: "CTF",
    description:
      "Successfully completed a high-level Capture The Flag competition, demonstrating advanced cybersecurity skills.",
    image: "https://via.placeholder.com/800x600",
    achievement: "CTF Champion",
    achievement_date: "12-12-2024",
  },
  {
    id: 2,
    created_at: "15-11-2024",
    field: "Web Development",
    description:
      "Developed and launched a full-stack web application using cutting-edge technologies.",
    image: "https://via.placeholder.com/800x600",
    achievement: "Full-Stack Project",
    achievement_date: "01-11-2024",
  },
  {
    id: 3,
    created_at: "20-10-2024",
    field: "Machine Learning",
    description:
      "Implemented a state-of-the-art machine learning model for image recognition with high accuracy.",
    image: "https://via.placeholder.com/800x600",
    achievement: "ML Model Implementation",
    achievement_date: "10-10-2024",
  },
  {
    id: 4,
    created_at: "05-09-2024",
    field: "Open Source",
    description:
      "Contributed significant features to a popular open-source project, gaining recognition from the community.",
    image: "https://via.placeholder.com/800x600",
    achievement: "Open Source Contributor",
    achievement_date: "01-09-2024",
  },
  {
    id: 5,
    created_at: "15-08-2024",
    field: "Blockchain",
    description:
      "Developed a decentralized application (DApp) on Ethereum, showcasing blockchain development skills.",
    image: "https://via.placeholder.com/800x600",
    achievement: "DApp Development",
    achievement_date: "01-08-2024",
  },
  {
    id: 6,
    created_at: "01-07-2024",
    field: "Cloud Computing",
    description:
      "Architected and deployed a scalable cloud solution on AWS, demonstrating advanced cloud computing skills.",
    image: "https://via.placeholder.com/800x600",
    achievement: "Cloud Architecture",
    achievement_date: "15-06-2024",
  },
];

export default function Achievements() {
  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Our Achievements
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            >
              <div className="relative w-full h-48">
                <img
                  src={achievement.image}
                  alt={achievement.achievement}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {achievement.achievement}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {achievement.description}
                </p>
                <div className="flex justify-between items-center text-blue-400 text-sm">
                  <div className="flex items-center">
                    <FaTrophy className="mr-1" />
                    <span>{achievement.field}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{achievement.achievement_date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundLayout>
  );
}
