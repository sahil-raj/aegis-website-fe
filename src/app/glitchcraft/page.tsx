"use client";

import React, { useState } from "react";
import { Film, Gamepad2, KeyRound, Music, Video, Shield } from "lucide-react";

function SandboxRegistration() {
  const [activeTab, setActiveTab] = useState("ctf");
  const [entryType, setEntryType] = useState("solo");

  const GeneralDetails = () => (
    <div className="space-y-4 border-b border-white/30 pb-6 mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">General Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Email ID</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">
            Phone Number (WhatsApp)
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Department</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">USN</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white placeholder-white/50"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Year of Study</label>
          <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white">
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
      </div>
    </div>
  );

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
        {activeTab === "music" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              HACK-A-NOTE
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  Type of Performance
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white ">
                  <option value="singing">Solo Singing</option>
                  <option value="instrumental">Instrumental</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">
                  Instrument Name (if applicable)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Genre of Music</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">
                  Performance Duration (minutes)
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Register Performance
            </button>
          </form>
        )}

        {/* REELITY SHOW Form */}
        {activeTab === "reel" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              REELITY SHOW
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  Social Media Handle
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                  placeholder="@username"
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 rounded bg-black/50 border-white/30"
                  required
                />
                <label htmlFor="consent" className="text-white">
                  I consent to event branding and usage of my content on social
                  media
                </label>
              </div>
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Register for REELITY SHOW
            </button>
          </form>
        )}

        {/* DECIPHER BLITZ Form */}
        {activeTab === "ctf" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              DECIPHER BLITZ
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Team Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
              {/* <div>
                <label className="block text-white mb-2">
                  Number of Team Members
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div> */}
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Register for CTF
            </button>
          </form>
        )}

        {/* Movie Quiz Form */}
        {activeTab === "movie" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              THE ULTIMATE MOVIE & SERIES QUIZ
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Team Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Register Team
            </button>
          </form>
        )}

        {/* BGMI Form */}
        {activeTab === "bgmi" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              BGMI BATTLE BLITZ
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Entry Type</label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  value={entryType}
                  onChange={(e) => setEntryType(e.target.value)}
                >
                  <option value="solo">Solo</option>
                  <option value="squad">Squad</option>
                </select>
              </div>
              {entryType === "solo" && (
                <>
                  <div>
                    <label className="block text-white mb-2">
                      Player IGN(In Game Name)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">
                      BGMI Player ID
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>
                </>
              )}

              {entryType === "squad" && (
                <>
                  <div>
                    <label className="block text-white mb-2">Team Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    {/* Team Leader */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          Team Leader IGN (In Game Name)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          BGMI Player ID
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Member 2 */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          Member 2 IGN
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          BGMI Player ID
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Member 3 */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          Member 3 IGN
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          BGMI Player ID
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Member 4 */}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          Member 4 IGN
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-white mb-2">
                          BGMI Player ID
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="rules"
                  className="w-4 h-4 rounded bg-black/50 border-white/30"
                  required
                />
                <label htmlFor="rules" className="text-white">
                  I accept the gaming rules and fair play agreement
                </label>
              </div>
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Register to Battle
            </button>
          </form>
        )}

        {/* Escape Room Form */}
        {activeTab === "escape" && (
          <form className="space-y-6 bg-black/80 p-8 rounded-xl border border-white/20 cyber-grid">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text">
              ESCAPE THE ENIGMA
            </h2>
            <GeneralDetails />
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Team Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/30 focus:border-white focus:ring-1 focus:ring-white text-white"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full neon-button py-3">
              Enter the Challenge
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SandboxRegistration;
