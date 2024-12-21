import React from 'react';
import Navbar from './components/Navbar';
import GlowingButton from "./components/Button"; // Ensure the path is correct
import './globals.css'; // Import global styles if needed

const Page = () => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbar />
        <GlowingButton /> {/* No props are passed here */}
      </div>

      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_center,#46a5aa4a,#000)] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold font-Ndot-47 mb-4">
          Decrypt.Decode.Decipher.
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
        The Cyber Security Club at DSCE,Bengaluru is dedicated to exploring advanced technologies 
        and acquiring invaluable knowledge and hands-on experience in cybersecurity through engaging 
        training sessions, interactive workshop and collaborative initiatives with like-minded enthusiasts.
        </p>
        <h1 className="text-2xl font-bold font-Ndot-47 mt-20">
          Unleash Your Cyber Potential
        </h1>
      </div>
    </div>
  );
};

export default Page;
