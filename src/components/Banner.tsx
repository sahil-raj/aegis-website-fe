'use client';

import { useState } from 'react';
import { Terminal, Timer, Users } from 'lucide-react';

export function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-black/95 border-t border-cyan-500/20 floating-animation z-50"
      style={{ boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto p-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Terminal className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold text-white">
                AEGIS Hackathon 2024
              </h2>
              <p className="text-sm text-gray-400">
                Join us for 24 hours of hacking, learning, and innovation
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Timer className="h-4 w-4 text-cyan-400" />
                24h
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4 text-cyan-400" />
                100+ Hackers
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded"
                onClick={() => window.open('https://sandbox.aegisclub.tech', '_blank')}
              >
                Register Now
              </button>
              <button
                className="px-4 py-2 text-gray-400 hover:text-white border border-transparent hover:border-gray-400 rounded"
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
