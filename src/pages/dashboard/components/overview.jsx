import React from 'react';
import { Book, Activity, CheckCircle, Play, User } from 'lucide-react';

const Overview = () => {
  const statCards = [
    { title: 'Enrolled Courses', value: 12, icon: Book, color: 'bg-blue-100 text-blue-600' },
    { title: 'Active Courses', value: 3, icon: Activity, color: 'bg-green-100 text-green-600' },
    { title: 'Completed Courses', value: 13, icon: CheckCircle, color: 'bg-purple-100 text-purple-600' },
  ];

  const recentCourses = [
    { title: 'Basic Sign Language', instructor: 'John Doe', lessons: 6, image: 'path_to_image1.jpg' },
    { title: 'Intermediate Signing', instructor: 'Jane Smith', lessons: 5, image: 'path_to_image2.jpg' },
    { title: 'Advanced GSL', instructor: 'Mike Johnson', lessons: 4, image: 'path_to_image3.jpg' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-[#065535] mb-8">Dashboard Overview</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statCards.map((card, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${card.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold mb-2">{card.title}</p>
                <p className="text-3xl font-bold">{card.value}</p>
              </div>
              <card.icon className="w-12 h-12 opacity-80" />
            </div>
          </div>
        ))}
      </div>

      {/* Recently Enrolled Courses */}
      <div>
        <h2 className="text-2xl font-bold text-[#065535] mb-6">Recently Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#065535] mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {course.instructor}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.lessons} Lessons</span>
                  <button className="bg-[#065535] text-white py-2 px-4 rounded-full flex items-center text-sm hover:bg-[#0e8c5f] transition duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;