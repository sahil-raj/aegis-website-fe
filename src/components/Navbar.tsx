"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
];

const eventLinks = [
  { href: "/events/decipher1.0", label: "Decipher 1.0" },
  { href: "/events/ctf1.0", label: "CTF 1.0" },
  { href: "/events/foodwalk", label: "Food Walk" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setDropdownOpen(false);
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
    if (dropdownOpen) setDropdownOpen(false);
  }, [dropdownOpen]);

  const toggleDropdown = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <nav className="mx-1 my-1">
        <div className="bg-black/0 rounded-2xl text-white backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 relative">
              <div className="lg:hidden">
                <Image
                  src="/Aegis_Logo.png"
                  alt="Club Logo"
                  width={120}
                  height={120}
                  className="mr-2"
                  priority
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/Aegis_Logo.png"
                  alt="Club Logo"
                  width={180}
                  height={180}
                  className="mr-2"
                  priority
                />
              </div>
            </Link>

            <button
              className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
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

            <ul
              className={`flex flex-col lg:flex-row items-center lg:space-x-8 absolute lg:static bg-black lg:bg-transparent rounded-lg top-16 lg:top-auto left-0 w-full lg:w-auto p-6 lg:p-0 transition-all duration-300 ease-in-out transform ${
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

              <li className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="block lg:inline-flex items-center hover:text-gray-400 transition duration-200 py-2 lg:py-0 w-full lg:w-auto"
                >
                  <span>Events</span>
                  <svg
                    className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    } lg:group-hover:rotate-180`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden lg:block absolute h-4 w-full -bottom-4"></div>

                <div
                  className={`lg:absolute left-0 lg:mt-4 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50 ${
                    dropdownOpen ? "block" : "hidden"
                  } lg:hidden lg:group-hover:block transition-all duration-200 ease-in-out`}
                >
                  {eventLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-3 text-sm hover:bg-gray-700 transition duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="mt-4 lg:mt-0 lg:ml-4">
                <Link
                  href="/login"
                  className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 block text-center"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
