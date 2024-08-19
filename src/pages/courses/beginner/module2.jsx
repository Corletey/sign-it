import React from 'react';
import CourseNavbar from '../../../components/courseNavbar';

const Module2 = () => {
  return (
    <div>
      <CourseNavbar level="Beginner" />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Module 2: Basic Communication</h1>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <video
              controls
              className="w-full h-auto bg-black rounded-lg shadow-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"  // Temporary video source
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2;
