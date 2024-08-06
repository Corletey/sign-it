// src/pages/dashboard/components/settings/components/settings.jsx
import React, { useState } from 'react';
import { User, Lock, Share2, Link, Bell } from 'lucide-react';
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
      <h1 className="text-2xl font-bold text-[#065535] mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">You have full control to manage your own account settings</p>

      <div className="flex mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center px-4 py-2 mr-4 ${
              activeTab === tab.name
                ? 'border-b-2 border-[#065535] text-[#065535]'
                : 'text-gray-500'
            }`}
            aria-label={`Go to ${tab.name} tab`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === 'Edit Profile' && <Profile onSubmitProfile={onSubmitProfile} />}
      {activeTab === 'Change Password' && <ChangePassword />}
      {activeTab === 'Social Profiles' && <SocialProfiles />}
      {activeTab !== 'Edit Profile' && activeTab !== 'Change Password' && activeTab !== 'Social Profiles' && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <p>Content for {activeTab} goes here.</p>
        </div>
      )}
    </div>
  );
};

export default Settings;
