//src/pages/dashboard/components/settings/components/Profile
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Circles } from 'react-loader-spinner';
import { apiUpdateUserProfile, apiCreateUserProfile, apiGetUserProfile } from '../../../../../services/profile';
import { toast } from "react-toastify";

const Profile = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({});

  const fetchProfileData = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetUserProfile();
      setProfileData(res.data?.profile);
      // Populate form fields with fetched data
      setValue('user', res.data?.profile?.user || '');
      setValue('profilePicture', res.data?.profile?.profilePicture || '');
      setValue('age', res.data?.profile?.age || '');
      setValue('sex', res.data?.profile?.sex || '');
      setValue('dateOfBirth', res.data?.profile?.dateOfBirth || '');
      setValue('contact', res.data?.profile?.contact || '');
      setValue('address', res.data?.profile?.address || '');
      setValue('about', res.data?.profile?.about || '');
      setValue('skillLevel', res.data?.profile?.skillLevel || '');
      setValue('learningGoals', res.data?.profile?.learningGoals || '');
      setValue('interests', res.data?.profile?.interests || '');
    } catch (error) {
      console.error("Error fetching profile data: ", error.response || error);
      toast.error("An error occurred while fetching profile data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await apiUpdateUserProfile(data);
      console.log('Profile updated', response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error updating profile', error);
      toast.error("An error occurred while updating profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            readOnly
            {...register('user')}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
          <input
            type="text"
            {...register('profilePicture')}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register('age', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sex</label>
          <select
            {...register('sex', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact</label>
          <input
            type="text"
            {...register('contact', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            {...register('address', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">About</label>
          <textarea
            {...register('about', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill Level</label>
          <input
            type="text"
            {...register('skillLevel', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.skillLevel && <p className="text-red-500 text-sm mt-1">{errors.skillLevel.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Learning Goals</label>
          <select
            {...register('learningGoals', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Learning Goal</option>
            <option value="short-term">Short-term</option>
            <option value="long-term">Long-term</option>
          </select>
          {errors.learningGoals && <p className="text-red-500 text-sm mt-1">{errors.learningGoals.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Interests</label>
          <input
            type="text"
            {...register('interests', { required: 'Required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-[#065535] text-white px-6 py-2 rounded-md hover:bg-[#0e8c5f] transition-colors duration-200"
        >
          {isLoading ? <Circles height={24} width={24} color="#fff" /> : 'Save Profile'}
        </button>
      </div>
    </form>
  );
};

export default Profile;
