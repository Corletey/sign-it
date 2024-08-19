// src/pages/courses/beginner/module1.jsx
import React from 'react';

const Module1 = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Module 1: Introduction to Sign Language</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <video
            controls
            className="w-full h-auto bg-black rounded-lg shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Module1;