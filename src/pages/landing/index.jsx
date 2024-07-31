import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImg from '../../assets/images/love.jpeg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen bg-[#282A3A] text-white">
      <img
        src={LandingImg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative z-10 flex flex-col items-center space-y-8 p-8 bg-black bg-opacity-50 rounded-md shadow-lg">
        <h1 className="text-6xl font-bold text-[#ffffff]">Welcome to Sign It</h1>
        <p className="text-lg text-center text-[#ffffff]">Learn Ghanaian Sign Language with ease</p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-[#ffffff] text-[#065535] rounded-md hover:bg-[#065535] hover:text-white transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-3 bg-[#ffffff] text-[#065535] rounded-md hover:bg-[#065535] hover:text-white transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
