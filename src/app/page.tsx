import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import "./globals.css";

const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Background Layers (Fixed) */}
      <div className="fixed inset-0 -z-10">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Radial Gradient Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[1200px] w-[1200px] rounded-full bg-[radial-gradient(circle_600px_at_center,#46a5aa4a,#000)]"></div>
        </div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-10 backdrop-blur-md">
        <Navbar />
      </header>

      {/* Content Sections */}
      <main className="relative z-20 pt-16"> {/* Add padding to avoid overlapping with the fixed navbar */}
        {/* Home and About Section (Continuous) */}
        <section id="home" className="relative z-20">
          <Home />
        </section>
      </main>
    </div>
  );
};

export default Page;
