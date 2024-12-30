import React from 'react';
import Navbar from './components/Navbar';
import GlowingButton from './components/Button';
import About from './components/About';
import './globals.css';

const Page = () => {
  return (
    <div className="relative min-h-screen w-screen bg-black overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

      {/* Centered Radial Gradient Background */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_400px_at_center,#46a5aa4a,#000)]"></div>
      </div>

      {/* Page Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center z-20">
        <h1 className="text-4xl font-bold font-Ndot-47 mb-4">
          Decrypt.Decode.Decipher.
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          The Cyber Security Club at DSCE, Bengaluru is dedicated to exploring advanced technologies 
          and acquiring invaluable knowledge and hands-on experience in cybersecurity through engaging 
          training sessions, interactive workshops, and collaborative initiatives with like-minded enthusiasts.
        </p>
        <h1 className="text-2xl font-bold font-Ndot-47 mt-20">
          Unleash Your Cyber Potential
        </h1>

        {/* Glowing Button */}
        <div className="mt-8 z-20 relative">
          <GlowingButton />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mt-20 z-20 relative">
        <About />
      </div>
    </div>
  );
};

export default Page;
