//src/pages/courses/beginner/module1/begLesson3.jsx
import React from 'react';
import videoSrc2 from '../../../../assets/videos/beglesson3.mp4';

const BegLesson3 = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Greetings</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-lg sm:max-w-4xl">
          <video
            controls
            className="w-full h-auto bg-black rounded-lg shadow-lg"
            src={videoSrc2}
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default BegLesson3;
