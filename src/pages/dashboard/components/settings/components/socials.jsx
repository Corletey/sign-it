// src/pages/dashboard/components/settings/components/SocialProfiles.jsx
import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

const SocialProfiles = () => {
  const [profiles, setProfiles] = useState([
    { name: 'LinkedIn', url: '' },
    { name: 'Twitter', url: '' },
    { name: 'Facebook', url: '' },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newProfiles = [...profiles];
    newProfiles[index][name] = value;
    setProfiles(newProfiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Social Profiles updated:', profiles);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Social Profiles</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {profiles.map((profile, index) => (
          <div key={index} className="relative">
            <Share2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="url"
              placeholder={`Enter your ${profile.name} URL`}
              value={profile.url}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full p-2 pl-10 border rounded-md"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-6 bg-[#065535] text-white px-6 py-2 rounded-md hover:bg-[#0e8c5f] transition-colors duration-200"
        >
          Update Profiles
        </button>
      </form>
    </div>
  );
};

export default SocialProfiles;
