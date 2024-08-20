// src/components/courseSidebar.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ChevronDown, Book, X, Menu } from 'lucide-react';

const CourseSidebar = () => {
  const { level } = useParams();
  const [activeModule, setActiveModule] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const modules = [
    {
      id: 1,
      title: 'Module 1',
      lessons: [
        { id: 1, title: 'Introduction to Ghanaian Sign Language', path: 'begLesson1' },
        { id: 2, title: 'Basic Handshapes and Finger Spelling', path: 'begLesson2' },
        { id: 3, title: 'Greetings and Simple Phrases', path: 'begLesson3' },
      ],
    },
    {
      id: 2,
      title: 'Module 2',
      lessons: [
        { id: 1, title: 'Numbers and Counting', path: 'begLesson4' },
        { id: 2, title: 'Colors and Descriptions', path: 'begLesson5' },
        { id: 3, title: 'Family and Relationships', path: 'begLesson6' },
      ],
    },
  ];

  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#065535]">Course Overview</h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-full hover:bg-gray-200"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-5 space-y-2 px-4">
          {modules.map((module) => (
            <div key={module.id} className="mb-4">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full text-left text-lg font-semibold flex items-center justify-between p-2 bg-[#065535] text-white rounded-md hover:bg-[#054425] transition-colors duration-200"
              >
                <span className="flex items-center">
                  <Book className="mr-2" /> {module.title}
                </span>
                {activeModule === module.id ? <ChevronDown /> : <ChevronRight />}
              </button>
              {activeModule === module.id && (
                <ul className="ml-4 mt-2 space-y-2">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        to={`/dashboard/enrolled-courses/${level}/module${module.id}/${lesson.path}`}
                        className="flex items-center text-blue-600 hover:text-blue-800 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                      >
                        Lesson {lesson.id}: {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 rounded-full bg-green-700 text-white z-30 lg:hidden shadow-lg"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
};

export default CourseSidebar;
