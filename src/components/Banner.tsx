'use client';

import { useState } from 'react';
import { Terminal, Timer, Users, X } from 'lucide-react';

export function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Handle the visibility of the banner
  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  // Return null if the banner is not visible
  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-black p-4 z-50 floating-animation"
      style={{ boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative bg-cyan-200 p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
            transform transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseBanner}
            className="absolute -top-4 -right-4 bg-red-500 p-2 rounded-full border-4 border-black 
              hover:bg-red-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <X className="h-4 w-4 text-white" />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex h-16 w-16 items-center justify-center bg-black rounded-lg">
                <Terminal className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-black text-black mb-1 font-mono">
                  SANDBOX 2025
                </h2>
                <p className="text-lg font-bold text-black/80">
                  24Hrs Hackathon in Cyber Security!
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Stats */}
              <div className="flex gap-6 text-black font-bold">
                <span
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border-2 border-black 
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Timer className="h-5 w-5" />
                  24h
                </span>
                <span
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border-2 border-black 
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Users className="h-5 w-5" />
                  100+
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://sandbox.aegisclub.tech', '_blank')}
                className="bg-black text-white px-8 py-3 text-lg font-bold rounded-lg border-4 border-cyan-400 
                  shadow-[8px_8px_0px_0px_rgba(70, 165, 170, 0.29)] hover:shadow-[4px_4px_0px_0px_rgba(70, 165, 170, 0.29)] 
                  transform transition-all hover:translate-x-1 hover:translate-y-1"
              >
                Register Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
