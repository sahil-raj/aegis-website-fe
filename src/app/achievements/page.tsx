"use client";
import React from "react";
import "../globals.css"
import Navbar from "@/components/Navbar";

const achievements = [
  { "id": 1, "created_at": "31-12-2024", "field":"CTF", "description":"Description", "image": "https://via.placeholder.com/200x200", "achievement":"Title", "achievement_date":"12-12-2024" },
  { "id": 1, "created_at": "31-12-2024", "field":"CTF", "description":"Description", "image": "https://via.placeholder.com/200x200", "achievement":"Title", "achievement_date":"12-12-2024" },
  { "id": 1, "created_at": "31-12-2024", "field":"CTF", "description":"Description", "image": "https://via.placeholder.com/200x200", "achievement":"Title", "achievement_date":"12-12-2024" }
]


const Achievements = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        {achievements.map((achievement,i) => {
          return (
            <div className="max-w-5xl mt-5 w-full bg-gray-900 rounded-lg shadow-lg flex hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300 content-between" key={i}>
              {/* <!-- Image Section --> */}
              <img
                src={achievement["image"]}
                alt="Card Image"
                className="w-72 h-72 object-cover rounded-l-lg"
              />
              {/* <!-- Content Section --> */}
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold text-white-800 mb-3">{achievement["achievement"]}</h2>
                <p className="text-white-600 text-sm mb-4">
                  {achievement["description"]}
                </p>
                <div className="flex flex-wrap gap-2">
                      <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">{achievement["field"]}</span>
                </div>
                <span className="text-white text-xs">{achievement["achievement_date"]}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Achievements;
