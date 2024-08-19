import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BeginnerOverview = () => {
  const { level } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Beginner Sign Language Course</h1>
      <p className="mb-4">This course will introduce you to the basics of sign language.</p>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Module 1: Introduction to Sign Language</h2>
          <p>Learn the fundamentals of sign language communication.</p>
          <Link to={`/dashboard/enrolled-courses/${level}/module1`} className="text-blue-500 hover:underline mt-4 inline-block">Start Module 1</Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Module 2: Basic Communication</h2>
          <p>Practice basic phrases and sentences in sign language.</p>
          <Link to={`/dashboard/enrolled-courses/${level}/module2`} className="text-blue-500 hover:underline mt-4 inline-block">Start Module 2</Link>
        </div>
      </div>
    </div>
  );
};

export default BeginnerOverview;