"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

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
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>

          {/* About Us */}
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>

          {/* Teams */}
          <li>
            <Link href="/teams" className="hover:text-gray-400">
              Teams
            </Link>
          </li>

          {/* Events */}
          <li>
            <Link href="/events" className="hover:text-gray-400">
              Events
            </Link>
          </li>

          {/* Achievements */}
          <li>
            <Link href="/achievements" className="hover:text-gray-400">
              Achievements
            </Link>
          </li>

          {/* Gallery */}
          <li>
            <Link href="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
          </li>

          {/* Blogs */}
          <li>
            <Link href="/blogs" className="hover:text-gray-400">
              Blogs
            </Link>
          </li>

          {/* Sign In */}
          <li>
            <Link
              href="/login"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
