// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import HeroSection from '../pages/dashboard/components/hero';
import Navbar from '../components/navbar';

const DashboardLayout = () => {
    return (
        <div>
           <div className='sticky top-0 z-20'>
           <Navbar />
           </div>
            <HeroSection />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-6 bg-gray-100 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
