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
    <div className="container overflow-x-hidden mx-auto  py-10 md:py-20 text-white">
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
        <button
          onClick={() => setActiveTab("music")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "music" ? "bg-white/20" : ""
          }`}
        >
          <Music size={20} />
          <span>HACK-A-NOTE</span>
        </button>
        <button
          onClick={() => setActiveTab("reel")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "reel" ? "bg-white/20" : ""
          }`}
        >
          <Video size={20} />
          <span>REELITY SHOW</span>
        </button>
        <button
          onClick={() => setActiveTab("ctf")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "ctf" ? "bg-white/20" : ""
          }`}
        >
          <Shield size={20} />
          <span>DECIPHER BLITZ</span>
        </button>
        <button
          onClick={() => setActiveTab("movie")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "movie" ? "bg-white/20" : ""
          }`}
        >
          <Film size={20} />
          <span>Movie Quiz</span>
        </button>
        <button
          onClick={() => setActiveTab("bgmi")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "bgmi" ? "bg-white/20" : ""
          }`}
        >
          <Gamepad2 size={20} />
          <span>BGMI Battle</span>
        </button>
        <button
          onClick={() => setActiveTab("escape")}
          className={`neon-button flex items-center space-x-2 ${
            activeTab === "escape" ? "bg-white/20" : ""
          }`}
        >
          <KeyRound size={20} />
          <span>Escape Room</span>
        </button>
      </div>

      {/* Forms Container */}
      <div className="max-w-3xl mx-auto mt-8 p-6">
        {/* HACK-A-NOTE Form */}
        {activeTab === "music" && <HackANote />}

        {/* REELITY SHOW Form */}
        {activeTab === "reel" && <Reelity />}

        {/* DECIPHER BLITZ Form */}
        {activeTab === "ctf" && <Decipher />}

        {/* Movie Quiz Form */}
        {activeTab === "movie" && <Movie />}

        {/* BGMI Form */}
        {activeTab === "bgmi" && <Bgmi />}

        {/* Escape Room Form */}
        {activeTab === "escape" && <Escape />}
      </div>
    </div>
  );
}

export default SandboxRegistration;
