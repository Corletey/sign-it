import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import K from '../constants';
import { LogOut, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#065535] text-white w-64 min-h-screen shadow-lg flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Sign It</h2>
        <p className="text-sm opacity-75">Learn Sign Language</p>
      </div>
      <nav className="flex-grow">
        {K.DASHBOARD_LINKS.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f] transition-colors duration-200 ${
              location.pathname === item.path ? 'bg-[#0e8c5f]' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
            {location.pathname === item.path && (
              <ChevronRight className="w-5 h-5 ml-auto" />
            )}
          </Link>
        ))}
      </nav>
      <div className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Account Settings
        </h3>
        {K.SETTINGS.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center mb-3 text-white hover:text-green-300 transition-colors duration-200"
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
  );
};

export default Sidebar;