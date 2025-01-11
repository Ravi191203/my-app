import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Simple Icon Alternative */}
        <div className="flex justify-center mb-4">
          <div className="text-4xl animate-bounce">📚</div>
        </div>

        {/* Title with animation */}
        <h1 className="text-4xl font-bold mb-3 tracking-tight transition-all duration-300 hover:tracking-wide">
          RRGS_DEV Study Portal
        </h1>

        {/* Subtitle with glow effect */}
        <p className="text-xl font-light opacity-90 transition-all duration-300 hover:opacity-100">
          MCA Learning Resources
        </p>

        {/* Decorative underline */}
        <div className="mt-4 mx-auto w-24 h-1 bg-white/30 rounded-full transition-all duration-300 hover:w-32" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-white/20 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-white/20 rounded-tr-xl" />
    </header>
  );
};

export default Header;