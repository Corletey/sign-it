// src/components/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky bg-white text-gray-900 shadow-md  top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <img className="h-8 w-auto" src="/path-to-your-logo.png" alt="Sign It Logo" /> */}
            <span className="ml-2 text-xl font-bold font-sans text-[#065535]">SignScript</span>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link to="/" className="text-gray-500 hover:text-[#065535] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/dashboard/enrolled-courses" className="text-gray-500 hover:text-[#065535] px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
            <Link to="/dashboard/messages" className="text-gray-500 hover:text-[#065535] px-3 py-2 rounded-md text-sm font-medium">Community</Link>
            <Link to="/resources" className="text-gray-500 hover:text-[#065535] px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
            <Link to="/dashboard" className="ml-3 px-3 py-2 rounded-md text-sm font-medium bg-[#065535] text-white hover:bg-[#054425]">Dashboard</Link>
            <img className="h-8 w-8 rounded-full" src="/path-to-user-avatar.jpg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
