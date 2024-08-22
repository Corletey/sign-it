import React from 'react';
import videoSrc4 from '../../../../assets/videos/beglesson5.mp4';

const BegLesson5 = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Head Movements</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-lg sm:max-w-4xl">
          <video
            controls
            className="w-full h-auto bg-black rounded-lg shadow-lg"
            src={videoSrc4}
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default BegLesson5;
