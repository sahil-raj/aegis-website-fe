"use client";

import { useState } from "react";
import { Terminal, Timer, Users, Trophy, Calendar } from "lucide-react";

export function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-black/95 border-t border-cyan-500/20 floating-animation z-50"
      style={{ boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="max-w-7xl mx-auto p-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Terminal className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold text-white">SANDBOX 2025</h2>
              <p className="text-md font-sans text-gray-200">
                <strong>Bangalore&apos;s Biggest</strong> Cyber Security
                Hackathon
              </p>
              <p className="text-sm text-gray-400">
                Join us for 24 hours of hacking, learning, and innovation
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4 mx-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-cyan-400" />
                <span>Mar 1-2</span>
              </div>
              <span className="flex items-center gap-1">
                <Timer className="h-4 w-4 text-cyan-400" />
                24h
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4 text-cyan-400" />
                150+ Hackers
              </span>
              <div className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-cyan-400" />
                <span>₹50K+</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 flex gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg"
                onClick={() =>
                  window.open("https://aegis-sandbox.devfolio.co/", "_blank")
                }
              >
                Register Now
              </button>
              <button
                className="px-4 py-2 text-gray-400 hover:text-white border border-transparent hover:border-gray-400 rounded-lg"
                onClick={() => setIsVisible(false)}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
