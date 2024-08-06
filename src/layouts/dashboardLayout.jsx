// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import HeroSection from '../pages/dashboard/components/hero';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar toggleSidebar={toggleSidebar} />
            </div>
            <HeroSection />
            <div className="flex flex-grow">
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-grow bg-gray-200">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
