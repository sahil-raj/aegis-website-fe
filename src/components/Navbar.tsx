"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-0 text-white relative z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/Aegis_Logo.png"
          alt="Club Logo"
          width={180} // specify the width
          height={180} // specify the height
          className="mr-2"
        />

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          {/* Home */}
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>

          {/* About Us */}
          <li>
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
          </li>

          {/* Teams*/}
          <li>
            <a href="/teams" className="hover:text-gray-400">
              Teams
            </a>
          </li>

          {/* Events*/}
          <li>
            <a href="/events" className="hover:text-gray-400">
              Events
            </a>
          </li>
          {/* Achievements*/}
          <li>
            <a href="/achievements" className="hover:text-gray-400">
              Achievements
            </a>
          </li>
          {/* Gallery*/}
          <li>
            <a href="/gallery" className="hover:text-gray-400">
              Gallery
            </a>
          </li>
          {/* Blogs*/}
          <li>
            <a href="/blogs" className="hover:text-gray-400">
              Blogs
            </a>
          </li>
          {/* Sign In*/}
          <li>
            <a
              href="/login"
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
