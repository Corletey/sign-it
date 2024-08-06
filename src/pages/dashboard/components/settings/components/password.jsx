// src/pages/dashboard/components/settings/components/ChangePassword.jsx
import React from 'react';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmitPassword = (data) => {
    console.log('Password updated:', data);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Current Password"
            {...register("currentPassword", { required: "Required" })}
            className={`w-full p-2 pl-10 border rounded-md ${errors.currentPassword ? 'border-red-400' : 'border-gray-400'}`}
          />
          {errors.currentPassword && <span className="text-red-400 text-sm mt-1">{errors.currentPassword.message}</span>}
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="New Password"
            {...register("newPassword", { required: "Required" })}
            className={`w-full p-2 pl-10 border rounded-md ${errors.newPassword ? 'border-red-400' : 'border-gray-400'}`}
          />
          {errors.newPassword && <span className="text-red-400 text-sm mt-1">{errors.newPassword.message}</span>}
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: "Required", validate: (value) => value === getValues().newPassword || "Passwords do not match" })}
            className={`w-full p-2 pl-10 border rounded-md ${errors.confirmPassword ? 'border-red-400' : 'border-gray-400'}`}
          />
          {errors.confirmPassword && <span className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</span>}
        </div>

        <button
          type="submit"
          className="mt-6 bg-[#065535] text-white px-6 py-2 rounded-md hover:bg-[#0e8c5f] transition-colors duration-200"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
