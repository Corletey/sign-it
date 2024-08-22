import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImg from '../../assets/images/love.jpeg';
import AboutImg from '../../assets/images/about.webp';
import CauseImg from '../../assets/images/cause.webp';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div 
        className="bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${LandingImg})` }}
      >
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to Visual Voices
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Learn Ghanaian Sign Language with ease and connect with a vibrant community
            </p>
            <div className="mb-8">
              <q className="text-lg md:text-xl text-gray-300 italic">
                Hands are the voice of the heart. In sign language, every gesture paints a thousand words.
              </q>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 bg-[#065535] text-white rounded-full hover:bg-[#044229] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-3 bg-transparent border-2 border-[#065535] text-[#065535] rounded-full hover:bg-[#065535] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#065535] mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={AboutImg}
                alt="Team of diverse sign language instructors"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg text-gray-700 mb-6">
                Visual Voices is a passionate team of deaf and hearing educators, technologists, and 
                advocates dedicated to breaking down communication barriers. Our mission is to make 
                Ghanaian Sign Language accessible to everyone, fostering a more inclusive society where 
                deaf and hearing individuals can communicate freely.
              </p>
              <p className="text-lg text-gray-700">
                Founded in 2024, we've grown from a small group of enthusiasts to a thriving community 
                of learners and educators. Our innovative online platform combines cutting-edge technology 
                with expert instruction to provide an engaging, effective learning experience for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Cause Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#065535] mb-8">Our Cause</h2>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={CauseImg}
                alt="Deaf and hearing people interacting in various settings"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pr-12">
              <p className="text-lg text-gray-700 mb-6">
                At Visual Voices, we believe that language should never be a barrier to human connection. 
                Our cause is to create a world where deafness doesn't isolate, where sign language is 
                widely understood and appreciated, and where the rich culture of the deaf community is 
                celebrated by all.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're working towards:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                <li>Increasing awareness and adoption of Ghanaian Sign Language</li>
                <li>Advocating for deaf rights and accessibility in all areas of society</li>
                <li>Bridging the communication gap between deaf and hearing communities</li>
                <li>Preserving and promoting deaf culture and heritage</li>
              </ul>
              <p className="text-lg text-gray-700">
                Join us in our mission to create a more inclusive, understanding, and connected world 
                through the power of sign language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
