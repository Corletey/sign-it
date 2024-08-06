// src/pages/dashboard/components/settings/components/Profile.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Circles } from 'react-loader-spinner'; // Import the loader

const Profile = ({ onSubmitProfile }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    // Preview the image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkUsernameAvailability = async (username) => {
    setIsUsernameLoading(true);
    // Placeholder for API call
    setTimeout(() => {
      // Simulating username check response
      const isAvailable = username.length % 2 === 0; // Example condition
      setUsernameAvailable(isAvailable);
      setUsernameNotAvailable(!isAvailable);
      setIsUsernameLoading(false);
    }, 1000);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('userName', data.userName);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('designation', data.designation);
    formData.append('bio', data.bio);

    if (avatar) {
      formData.append('avatar', avatar);
    }

    console.log('Submitting profile with data:', data);
    console.log('FormData contents:', formData);

    try {
      await onSubmitProfile(formData);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error submitting profile data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your avatar</h2>
        <div className="flex items-center">
          <img
            src={avatarPreview || "https://via.placeholder.com/100"}
            alt="Avatar"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <p className="text-sm text-gray-600 mb-2">PNG or JPG no bigger than 800px width and height</p>
            <input
              type="file"
              id="avatarUpload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="avatarUpload" className="bg-[#065535] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#0e8c5f] transition-colors duration-200">
              Upload new image
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            {...register('firstName', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
          <input
            type="text"
            {...register('userName', { required: 'Required' })}
            onBlur={(e) => checkUsernameAvailability(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}
          <div className='flex items-center gap-x-2'>
            {isUsernameLoading && <Circles height={20} width={20} color="#065535" />}
            {usernameAvailable && <p className='text-green-500'>Username is available!</p>}
            {usernameNotAvailable && <p className='text-red-500'>Username is already taken!</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            {...register('phoneNumber', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          {...register('bio', { required: 'Required' })}
          rows="4"
          className="w-full p-2 border rounded-md"
        ></textarea>
        {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 bg-[#065535] text-white px-6 py-2 rounded-md hover:bg-[#0e8c5f] transition-colors duration-200"
      >
        Update Profile
      </button>
    </form>
  );
};

export default Profile;
