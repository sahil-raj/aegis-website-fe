import React from "react";

const BackgroundLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

      {/* Centered Radial Gradient Background */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_400px_at_center,#46a5aa4a,#000)]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
