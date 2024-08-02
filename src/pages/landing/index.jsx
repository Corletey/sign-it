import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImg from '../../assets/images/love.jpeg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#282A3A] text-white overflow-hidden">
      <img
        src={LandingImg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-40 transform scale-105 animate-pulse"
      />
      <div className="relative z-10 flex flex-col items-center space-y-8 p-10 bg-black bg-opacity-60 rounded-lg shadow-2xl backdrop-filter backdrop-blur-sm max-w-2xl w-full mx-4">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ffffff] text-center leading-tight">
          Welcome to <span className="text-[#4CAF50]">Sign It</span>
        </h1>
        <p className="text-xl text-center text-[#ffffff] font-light">
          Learn Ghanaian Sign Language with ease and connect with a vibrant community
        </p>
        <blockquote className="text-center italic text-lg text-[#BDBDBD] my-6">
          "Hands are the voice of the heart. In sign language, every gesture paints a thousand words."
        </blockquote>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3 bg-transparent border-2 border-[#4CAF50] text-[#4CAF50] rounded-full hover:bg-[#4CAF50] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;