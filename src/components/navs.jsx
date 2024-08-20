// src/components/navs.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, ChevronRight, ArrowRight } from 'lucide-react';
import K from '../constants';

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/dashboard/enrolled-courses' },
    { name: 'Community', path: '/dashboard/messages' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white text-gray-900 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#065535] lg:hidden"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <div className="flex-shrink-0 flex items-center ml-2 lg:ml-0">
                <img className="h-8 w-auto" src="/path-to-your-logo.png" alt="Sign It Logo" />
                <span className="ml-2 text-xl font-bold text-[#065535]">VisualVoices</span>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-500 hover:text-[#065535] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                className="ml-3 px-3 py-2 rounded-md text-sm font-medium bg-[#065535] text-white hover:bg-[#054425]"
              >
                Dashboard
              </Link>
              <img className="h-8 w-8 rounded-full" src="/path-to-user-avatar.jpg" alt="" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-[#065535] text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-16 flex items-center justify-center lg:hidden">
          <h2 className="text-2xl font-bold">VisualVoices</h2>
        </div>
        <nav className="mt-5">
          {K.DASHBOARD_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f] transition-colors duration-200 ${
                location.pathname === item.path ? 'bg-[#0e8c5f]' : ''
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
              {location.pathname === item.path && (
                <ChevronRight className="w-5 h-5 ml-auto" />
              )}
            </Link>
          ))}
        </nav>
        <div className="p-6 mt-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Account Settings
          </h3>
          {K.SETTINGS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center mb-3 text-white hover:text-green-300 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={() => {/* Add logout logic here */}}
            className="flex items-center w-full mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Arrow Button */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 z-30 p-2 rounded-full bg-[#065535] text-white hover:bg-[#054425] lg:hidden"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Navigation;
