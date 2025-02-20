"use client";

import React, { useState } from "react";
import { Film, Gamepad2, KeyRound, Music, Video, Shield } from "lucide-react";
import HackANote from "./forms/HackANote";
import Reelity from "./forms/Reelity";
import Decipher from "./forms/Decipher";
import Movie from "./forms/Movie";
import Bgmi from "./forms/Bgmi";
import Escape from "./forms/Escape";

function SandboxRegistration() {
  const [activeTab, setActiveTab] = useState("ctf");

  return (
    <div className="container overflow-x-hidden mx-auto py-10 md:py-20 text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/20 p-8">
        <h1 className="text-6xl font-bold text-center mb-4 neon-text tracking-wider">
          Register for GlitchCraft
        </h1>
        <p className="text-center text-white max-w-3xl mx-auto text-lg">
          Register for the events of your choice and showcase your talent at
          GlitchCraft 2025
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 space-x-4 px-4 flex-wrap gap-y-2">
        {[
          { id: "music", label: "HACK-A-NOTE", icon: <Music size={20} /> },
          { id: "reel", label: "REELITY SHOW", icon: <Video size={20} /> },
          { id: "ctf", label: "DECIPHER BLITZ", icon: <Shield size={20} /> },
          { id: "movie", label: "Cine Mania", icon: <Film size={20} /> },
          { id: "bgmi", label: "BGMI Battle", icon: <Gamepad2 size={20} /> },
          { id: "escape", label: "Escape Room", icon: <KeyRound size={20} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`neon-button flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white/10 hover:bg-white/20"
              }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Forms Container */}
      <div className="max-w-3xl mx-auto mt-8 p-6">
        {activeTab === "music" && <HackANote />}
        {activeTab === "reel" && <Reelity />}
        {activeTab === "ctf" && <Decipher />}
        {activeTab === "movie" && <Movie />}
        {activeTab === "bgmi" && <Bgmi />}
        {activeTab === "escape" && <Escape />}
      </div>
      {/* FAQ / Registration Note */}
      <div className="bg-black/80 text-white text-center p-6 sm:p-4 rounded-lg mt-2 sm:mt-8 border border-white/10">
        <p className="text-md mb-3 font-semibold underline-offset-4">
          Important Registration Information:
        </p>
        <ul className="text-sm space-y-2 pl-3 text-left sm:text-center list-disc list-outside sm:list-none">
          <li className="font-semibold text-sm">
            🚨 These events are exclusive to DSCE (Dayananda Sagar College of
            Engineering) students only.
          </li>
          <li>
            <strong>Hack-A-Note</strong> and <strong>Decipher Blitz</strong> are{" "}
            <span className="font-semibold">solo events</span>. Each participant
            must register individually.
          </li>
          <li>
            <strong>Reelity Show</strong> and <strong>Cine Mania</strong> allow
            a{" "}
            <span className="font-semibold">
              maximum team size of 3 members
            </span>
            .
          </li>
          <li>
            <strong>BGMI Battle</strong> and <strong>Escape Room</strong> allow
            a{" "}
            <span className="font-semibold">
              maximum team size of 4 members
            </span>
            .
          </li>
          <li>
            For all team events,{" "}
            <span className="font-semibold">
              only one person needs to register
            </span>{" "}
            on behalf of the entire team. Other team members do not need to
            register separately.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SandboxRegistration;
