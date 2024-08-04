import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { ThreeDots } from 'react-loader-spinner';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setIsSubmitting(false);
      // Here you would typically show a success message or navigate to a confirmation page
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <button 
            onClick={() => navigate('/login')} 
            className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Login
          </button>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password?</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email to reset your password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", { required: "Email is required" })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border ${errors.email ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>

          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
            >
              {isSubmitting ? (
                <ThreeDots color="#ffffff" height={24} width={24} />
              ) : (
                "Reset Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;