"use client";
import AegisLogo from '../assets/Aegis_Logo.png'; // Adjust the path if necessary
import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-0 text-white relative z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image 
          src={AegisLogo}
          alt="Club Logo"
          width={180}  // specify the width
          height={180} // specify the height
          className="mr-2"
        />

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          {/* Home */}
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>

          {/* About Us */}
          <li>
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
          </li>

          {/* Teams (Dropdown) */}
          <li className="relative group">
            <button className="hover:text-gray-400">Teams</button>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-gray-800 text-white shadow-lg rounded-lg py-2">
              <li>
                <a href="#technical-team" className="block px-4 py-2 hover:bg-gray-700">
                  Technical Team
                </a>
              </li>
              <li>
                <a href="#management-team" className="block px-4 py-2 hover:bg-gray-700">
                  Management Team
                </a>
              </li>
            </ul>
          </li>

          {/* Events (Dropdown) */}
          <li className="relative group">
            <button className="hover:text-gray-400">Events</button>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-gray-800 text-white shadow-lg rounded-lg py-2">
              <li>
                <a href="#workshops" className="block px-4 py-2 hover:bg-gray-700">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#competitions" className="block px-4 py-2 hover:bg-gray-700">
                  Competitions
                </a>
              </li>
            </ul>
          </li>

          {/* Achievements */}
          <li>
            <a href="#achievements" className="hover:text-gray-400">
              Achievements
            </a>
          </li>

          {/* Gallery */}
          <li>
            <a href="#gallery" className="hover:text-gray-400">
              Gallery
            </a>
          </li>

          {/* Blogs */}
          <li>
            <a href="#blogs" className="hover:text-gray-400">
              Blogs
            </a>
          </li>

          {/* Sign In Button */}
          <li>
            <a 
              href="#signin" 
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
