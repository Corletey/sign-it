import React, { useState } from 'react';
import { Star, Bookmark, Hand, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EnrolledCourses = () => {
  const [activeTab, setActiveTab] = useState('Active Courses');

  const tabs = ['Active Courses', 'Enrolled Courses', 'Completed Courses'];

  // This would be replaced by data from backend
  const mockCourses = [
    {
      id: 1,
      title: 'Beginner Sign Language',
      level: 'Beginner',
      lessons: 6,
      students: 150,
      reviews: 45,
      rating: 4.8,
      progress: 0,
    },
    {
      id: 2,
      title: 'Intermediate Signing Skills',
      level: 'Intermediate',
      lessons: 5,
      students: 98,
      reviews: 32,
      rating: 4.7,
      progress: 0,
    },
    {
      id: 3,
      title: 'Advanced Sign Language Mastery',
      level: 'Advanced',
      lessons: 4,
      students: 75,
      reviews: 28,
      rating: 4.9,
      progress: 0,
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold text-[#065535] mb-6">Sign It Courses</h1>
      
      <div className="flex border-b mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-[#065535] text-[#065535] font-semibold'
                : 'text-gray-500'
            }`}
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={`/course/${course.id}`} className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#065535] to-[#0e8c5f] p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.level} Level</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <Hand className="w-5 h-5 text-[#065535] mr-2" />
                    <span className="text-sm text-gray-600">{course.lessons} Lessons</span>
                    <div className="ml-auto flex items-center">
                      <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      <span className="ml-1 text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{course.students} Students</span>
                    <span>{course.reviews} Reviews</span>
                  </div>
                  <div className="mt-4">
                    <button className="w-full bg-[#065535] text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-[#0e8c5f] transition duration-300">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;