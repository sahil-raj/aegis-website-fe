"use client";

import React from "react";
import "./button.css";

const GlowingButton: React.FC = () => {
  const handleClick = (): void => {
    alert("Recruitments coming soon!");
  };

  return (
    <button onClick={handleClick} className="glowing-button">
      Join Us!
    </button>
  );
};

export default GlowingButton;
