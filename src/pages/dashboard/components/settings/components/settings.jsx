import React, { useState } from 'react';
import { User, Lock, Share2 } from 'lucide-react';
import Profile from './profile';
import ChangePassword from './password';
import SocialProfiles from './socials';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const tabs = [
    { name: 'Edit Profile', icon: User },
    { name: 'Change Password', icon: Lock },
    { name: 'Social Profiles', icon: Share2 },
  ];

  const onSubmitProfile = (formData) => {
    // sending formData to the server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#065535] mb-4">Settings</h1>
      <p className="text-gray-700 mb-6 text-lg">Manage your account settings with ease.</p>

      <div className="flex flex-col md:flex-row mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center px-4 py-3 mb-2 md:mb-0 md:mr-4 rounded-lg transition-colors duration-300 ease-in-out ${
              activeTab === tab.name
                ? 'bg-[#E0F2F1] text-[#065535] border-b-2 border-[#065535]'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label={`Go to ${tab.name} tab`}
          >
            <tab.icon className="w-6 h-6 mr-3" />
            <span className="text-sm md:text-base font-medium">{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === 'Edit Profile' && <Profile onSubmitProfile={onSubmitProfile} />}
        {activeTab === 'Change Password' && <ChangePassword />}
        {activeTab === 'Social Profiles' && <SocialProfiles />}
        {activeTab !== 'Edit Profile' && activeTab !== 'Change Password' && activeTab !== 'Social Profiles' && (
          <div>
            <p>Content for {activeTab} goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
