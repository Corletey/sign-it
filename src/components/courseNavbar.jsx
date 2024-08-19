//src/components/courseNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Mock or import courseData
const courseData = {
  beginner: {
    modules: [
      {
        title: "Module 1",
        lessons: [
          { title: "Lesson 1", path: "/beginner/module1/lesson1" },
          { title: "Lesson 2", path: "/beginner/module1/lesson2" },
        ],
      },
      {
        title: "Module 2",
        lessons: [
          { title: "Lesson 1", path: "/courses/beginner/module2/lesson1" },
          { title: "Lesson 2", path: "/courses/beginner/module2/lesson2" },
        ],
      },
    ],
  },
  intermediate: {
    modules: [
      {
        title: "Module 1",
        lessons: [
          { title: "Lesson 1", path: "/courses/intermediate/module1/lesson1" },
          { title: "Lesson 2", path: "/courses/intermediate/module1/lesson2" },
        ],
      },
      {
        title: "Module 2",
        lessons: [
          { title: "Lesson 1", path: "/courses/intermediate/module2/lesson1" },
          { title: "Lesson 2", path: "/courses/intermediate/module2/lesson2" },
        ],
      },
    ],
  },
  advanced: {
    modules: [
      {
        title: "Module 1",
        lessons: [
          { title: "Lesson 1", path: "/advanced/module1/lesson1" },
          { title: "Lesson 2", path: "/courses/advanced/module1/lesson2" },
        ],
      },
      {
        title: "Module 2",
        lessons: [
          { title: "Lesson 1", path: "/advanced/module2/lesson1" },
          { title: "Lesson 2", path: "/courses/advanced/module2/lesson2" },
        ],
      },
    ],
  },
};

const CourseNavbar = ({ level }) => {
  const course = courseData[level]; 

  return (
    <div className="course-navbar">
      {course?.modules.map((module, moduleIndex) => (
        <div key={moduleIndex}>
          <div className="module-title">
            <span>{module.title}</span>
          </div>
          <ul className="lesson-list">
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lessonIndex}>
                <Link to={lesson.path}>{lesson.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseNavbar;
