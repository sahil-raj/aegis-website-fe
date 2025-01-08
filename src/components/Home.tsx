import React from "react";
import GlowingButton from "./Button";

const HomePage = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Background - Keeping original */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Radial Gradient - Preserved desktop size, only adjust for very small screens */}
        <div className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_400px_at_center,rgba(70, 165, 170, 0.29),#000)]" />
        </div>
      </div>

      {/* Content Container - Kept original desktop spacing */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Main Heading - Preserved desktop style */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Ndot-47 mb-8 text-white">
          Decrypt.Decode.Decipher.
        </h1>

        {/* Description - Kept original desktop style */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-20">
          The Cyber Security Club at DSCE, Bengaluru is dedicated to exploring
          advanced technologies and acquiring invaluable knowledge and hands-on
          experience in cybersecurity through engaging training sessions,
          interactive workshops, and collaborative initiatives with like-minded
          enthusiasts.
        </p>

        {/* Secondary Heading - Preserved desktop style */}
        <h2 className="text-2xl md:text-3xl font-bold font-Ndot-47 mb-8 text-white">
          Unleash Your Cyber Potential
        </h2>

        {/* Call to Action Button */}
        <div className="mt-8">
          <GlowingButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
