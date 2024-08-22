import React from 'react';
import { Link } from 'react-router-dom';
import CourseNavbar from '../../../components/courseNavbar';

const IntermediateOverview = () => {
  return (
    <div>
      <CourseNavbar level="intermediate" />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Intermediate Sign Language Course</h1>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Module 1: Advanced Vocabulary</h2>
         
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Module 2: Complex Sentences</h2>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntermediateOverview;