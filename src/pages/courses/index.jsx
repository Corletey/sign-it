// src/pages/courses/index.jsx
// src/pages/dashboard/index.jsx
import React from 'react';
import Navigation from "../../components/navs";
import HeroSection from "./components/hero";
import Overview from "./components/overview";
import CourseSidebar from "../../components/courseSidebar";

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex flex-1 pt-16 lg:flex-row">
        <CourseSidebar />
        <div className="flex-1 lg:ml-64">
          <HeroSection />
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
