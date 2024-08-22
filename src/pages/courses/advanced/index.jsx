// src/pages/courses/advanced/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Advanced Sign Language Course</h1>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Module 1: Introduction to Sign Language</h2>
          <Link to="/dashboard/enrolled-courses/advanced/module1" className="text-blue-500 hover:underline mt-4 inline-block">Start Module 1</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Module 2: Basic Communication</h2>
          <Link to="/dashboard/enrolled-courses/advanced/module2" className="text-blue-500 hover:underline mt-4 inline-block">Start Module 2</Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedOverview;