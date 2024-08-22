import React, { useState } from 'react';
import { Hand, Play, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EnrolledCourses = () => {
  const [activeTab, setActiveTab] = useState('Active Courses');

  const tabs = ['Active Courses', 'Enrolled Courses', 'Completed Courses'];

  const mockCourses = [
    {
      id: 1,
      title: 'Beginner Sign Language',
      level: 'beginner',
      lessons: 6,
      progress: 0,
      description: 'Start your journey into the world of sign language with foundational skills and basic vocabulary.',
    },
    {
      id: 2,
      title: 'Intermediate Signing Skills',
      level: 'intermediate',
      lessons: 5,
      progress: 0,
      description: 'Expand your signing abilities with more complex phrases and cultural insights.',
    },
    {
      id: 3,
      title: 'Advanced Sign Language Mastery',
      level: 'advanced',
      lessons: 4,
      progress: 0,
      description: 'Perfect your signing skills with advanced techniques and nuanced expressions.',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-[#065535] mb-8">Sign It Courses</h1>

      <div className="flex border-b mb-8 bg-white rounded-t-lg shadow">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-4 px-6 ${
              activeTab === tab
                ? 'border-b-2 border-[#065535] text-[#065535] font-semibold'
                : 'text-gray-500 hover:text-[#065535]'
            } transition duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCourses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
          >
            <div className="bg-gradient-to-r from-[#065535] to-[#0e8c5f] p-6 text-white flex-grow">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm opacity-90 mb-4">
                {course.level.charAt(0).toUpperCase() + course.level.slice(1)} Level
              </p>
              <p className="text-sm">{course.description}</p>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-[#065535] mr-2" />
                  <span className="text-sm text-gray-600">{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center">
                  <Hand className="w-5 h-5 text-[#065535] mr-2" />
                  <span className="text-sm text-gray-600">{course.progress}% Complete</span>
                </div>
              </div>
              <Link
                to={`/dashboard/enrolled-courses/${course.level.toLowerCase()}`}
                className="w-full bg-[#065535] text-white py-3 px-4 rounded-full flex items-center justify-center hover:bg-[#0e8c5f] transition duration-300 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;