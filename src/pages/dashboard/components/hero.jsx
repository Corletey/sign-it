// src/pages/dashboard/components/hero.jsx
import React from 'react';

const HeroSection = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1619004438024-75289543153e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80';

  return (
    <div
      className="relative flex items-center justify-center h-60 md:h-72 lg:h-80 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">My Dashboard</h1>
        <nav className="mt-2 text-white">
          <a href="/" className="hover:text-gray-400">Home</a>
          <span className="mx-2 text-gold-500">/</span>
          <span className="text-gray-200">My Dashboard</span>
        </nav>
      </div>
    </div>
  );
};

export default HeroSection;
