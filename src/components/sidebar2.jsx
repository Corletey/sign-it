// src/components/courseSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import K from '../constants';

const CourseSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-[#065535] text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="h-16 flex items-center justify-center lg:hidden">
          <h2 className="text-2xl font-bold">Course Modules</h2>
        </div>
        <nav className="mt-5">
          {K.COURSE_MODULES.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f] transition-colors duration-200 ${location.pathname === item.path ? 'bg-[#0e8c5f]' : ''}`}
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
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 p-2 rounded-full bg-[#065535] text-white z-30 lg:hidden"
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </>
  );
};

export default CourseSidebar;