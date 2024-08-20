import React, { useState } from 'react';
import BegLesson1 from './BegLesson1';
import BegLesson2 from './BegLesson2'; // Import other lessons as needed

const BeginnerIndex = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);

    const lessons = [
        { id: 1, title: 'Lesson 1: Introduction to Ghanaian Sign Language', component: <BegLesson1 /> },
        { id: 2, title: 'Lesson 2: GSL Alphabet', component: <BegLesson2 /> },
        // Will add more lessons here
    ];

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson.component);
    };

    return (
        <div className="flex">
            {/* Sidebar with Lessons */}
            <div className="w-1/4 p-4 bg-gray-100">
                <ul>
                    {lessons.map((lesson) => (
                        <li 
                            key={lesson.id} 
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleLessonClick(lesson)}
                        >
                            {lesson.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="w-3/4 p-4 bg-white">
                {selectedLesson ? (
                    selectedLesson
                ) : (
                    <p>Please select a lesson to view its content.</p>
                )}
            </div>
        </div>
    );
};

export default BeginnerIndex;
