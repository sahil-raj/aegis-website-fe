import React from 'react';
import GlowingButton from './components/Button';

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
