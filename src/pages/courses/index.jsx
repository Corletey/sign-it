//src/pages/courses/index.jsx
import React from 'react';
// import Navigation from "../../components/navs";
// import Overview from "./components/overview";
import CourseSidebar from "../../components/sidebar2";
import CourseNavbar from '../../components/courseNavbar';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      < CourseNavbar />
      <div className="flex flex-1 pt-16 lg:flex-row">
        <CourseSidebar />
        <div className="flex-1 lg:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
