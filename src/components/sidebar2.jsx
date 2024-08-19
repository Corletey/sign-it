// src/components/courseSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, ChevronRight, Book } from 'lucide-react';
// import K from '../constants';

const CourseSidebar = () => {
  const { level } = useParams();

  return (
    <div className="w-64 bg-[#065535] text-white h-screen">
      <nav className="mt-5">
        <Link to={`/dashboard/enrolled-courses/${level}`} className="flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f]">
          <Book className="w-5 h-5 mr-3" />
          <span>Course Overview</span>
        </Link>
        <Link to={`/dashboard/enrolled-courses/${level}/module1`} className="flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f]">
          <Book className="w-5 h-5 mr-3" />
          <span>Module 1</span>
        </Link>
        <Link to={`/dashboard/enrolled-courses/${level}/module2`} className="flex items-center px-6 py-3 text-white hover:bg-[#0e8c5f]">
          <Book className="w-5 h-5 mr-3" />
          <span>Module 2</span>
        </Link>
      </nav>
    </div>
  );
};
export default CourseSidebar;