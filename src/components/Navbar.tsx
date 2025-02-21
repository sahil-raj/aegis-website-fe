"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/teams", label: "Teams" },
  { href: "/events", label: "Events" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && !(event.target as HTMLElement).closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="right-0 z-50 fixed top-0 left-0 w-full bg-black bg-opacity-10 backdrop-blur-md">
      <nav className="mx-1 my-1">
        <div className="bg-black/0 rounded-2xl text-white backdrop-blur-sm">
          <div className="lg:px-12 px-6 py-4 flex items-center justify-between">
            {/* Club Logo */}
            <Link href="/" className="flex-shrink-0 relative">
              <div className="lg:hidden">
                <Image
                  src="/aegis_trans.png"
                  alt="Club Logo"
                  width={120}
                  height={120}
                  className="mr-2"
                  priority
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/aegis_trans.png"
                  alt="Club Logo"
                  width={180}
                  height={180}
                  className="mr-2"
                  priority
                />
              </div>
            </Link>

            {/* Sandbox & Glitchcraft Logos (Hidden in mobile) */}
            <div className="hidden lg:flex items-center lg:ml-auto md:mr-8 space-x-6">
              <a
                href="https://sandbox.aegisclub.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Sandbox.png"
                  alt="Sandbox Logo"
                  width={160}
                  height={160}
                />
              </a>

              <a
                href="https://aegisclub.tech/glitchcraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/glitchcraft.webp"
                  alt="Glitchcraft Logo"
                  width={160}
                  height={160}
                />
              </a>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-1 p-2"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Mobile Navigation */}
            <ul
              className={`flex flex-col lg:flex-row items-center lg:space-x-8 absolute lg:static bg-black lg:bg-transparent rounded-lg top-16 lg:top-auto lg:w-auto left-0 w-full p-6 lg:p-0 transition-all duration-300 ease-in-out transform ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0 pointer-events-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"
              }`}
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block lg:inline-block hover:text-gray-400 transition duration-200 py-2 lg:py-0"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Sandbox & Glitchcraft Logos - Visible in mobile menu */}
              <li className="lg:hidden flex flex-col items-center space-y-4 pt-6">
                <a
                  href="https://sandbox.aegisclub.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Sandbox.png"
                    alt="Sandbox Logo"
                    width={140}
                    height={140}
                  />
                </a>
                <a
                  href="https://aegisclub.tech/glitchcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/glitchcraft.webp"
                    alt="Glitchcraft Logo"
                    width={140}
                    height={140}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
