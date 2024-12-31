"use client";
import React from "react";
import "../globals.css"
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";

const achievements = [
  { "id": 1, "created_at": "31-12-2024", "field": "CTF", "description": "Description", "image": "https://via.placeholder.com/200x200", "achievement": "Title", "achievement_date": "12-12-2024" },
  { "id": 1, "created_at": "31-12-2024", "field": "CTF", "description": "Description", "image": "https://via.placeholder.com/200x200", "achievement": "Title", "achievement_date": "12-12-2024" },
  { "id": 1, "created_at": "31-12-2024", "field": "CTF", "description": "Description", "image": "https://via.placeholder.com/200x200", "achievement": "Title", "achievement_date": "12-12-2024" }
]


const Achievements = () => {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-10 backdrop-blur-md">
        <Navbar />
      </header>
      <BackgroundLayout>
      <div className="flex items-center justify-center min-h-screen flex-wrap">
        {achievements.map((achievement, i) => {
          return (
            <div className="max-w-lg w-full rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 bg-gray-900/30 text-white mt-5 mb-5 me-5 ms-5 backdrop-blur-sm" key={i}>
              {/* <!-- Image --> */}
              <img
                src="https://via.placeholder.com/300x400"
                alt="Card Image"
                className="w-full h-64 object-cover"
              />
              {/* <!-- Content --> */}
              <div className="p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-2">{achievement["achievement"]}</h2>
                <p className="text-sm mb-4">
                  {achievement["description"]}
                </p>
                <p className="text-xs mb-4">{achievement["achievement_date"]} </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full bg-gray-400">{achievement["field"]}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </BackgroundLayout>
    </>
  );
};

export default Achievements;
