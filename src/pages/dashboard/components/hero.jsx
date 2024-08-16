import React from 'react';
import { FiBook, FiClock } from 'react-icons/fi';

const HeroSection = ({ userName }) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8 shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white">
          <div className="mb-8 sm:mb-0">
            <h1 className="text-4xl font-bold sm:text-5xl">
              {greeting}, <span className="text-yellow-300">{userName}</span>!
            </h1>
            <p className="mt-2 text-lg sm:text-xl">
              Welcome back to your learning journey.
            </p>
          </div>
          <div className="flex space-x-6">
            <QuickStatCard icon={<FiBook />} value="5" label="Active Courses" />
            <QuickStatCard icon={<FiClock />} value="2h 30m" label="Study Time" />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickStatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-yellow-300 text-green-800 rounded-full p-4 mb-2 transform transition-transform duration-300 hover:scale-105">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);

export default HeroSection;
