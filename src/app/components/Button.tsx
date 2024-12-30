"use client";

import React from "react";
import "../button.css";

const GlowingButton: React.FC = () => {
  const handleClick = (): void => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="glowing-button">
      Join Us!
    </button>
  );
};

export default GlowingButton;
