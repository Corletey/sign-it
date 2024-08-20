// src/layouts/courseLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseSidebar from '../components/sidebar2';

const CourseLayout = () => {
  return (
    <div className="flex min-h-screen">
      <CourseSidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default CourseLayout;