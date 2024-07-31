import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import SignupImg from '../../assets/images/reaching.jpeg';
import { InfinitySpin } from 'react-loader-spinner';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Handle form submission
    console.log(data);
    // Reset the loading state after submission logic
    setIsSubmitting(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center relative">
        <img
          src={SignupImg}
          alt="Background"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#065535]">
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-5xl font-bold text-[#ffffff]">Join Us</h2>
          <p className="text-base text-[#ffffff]">Create your account to get started</p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#ffffff] focus:border-[#ffffff]`}
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="awesome@user.com"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#ffffff] focus:border-[#ffffff]`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#ffffff] focus:border-[#ffffff]`}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: "Confirm Password is required" })}
                className={`w-full px-4 py-2 pl-10 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#ffffff] focus:border-[#ffffff]`}
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-[#ffffff] hover:underline">Already have an account?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#ffffff] text-[#065535] rounded-md hover:text-black hover:bg-[#B2B1BB]/90 transition-colors duration-300 flex justify-center items-center"
            >
              {isSubmitting ? <InfinitySpin /> : "Sign Up"}
            </button>
            <p className="text-sm text-center text-[#ffffff]/60">
              Already have an account? <a href="#" className="text-[#ffffff] hover:underline" onClick={() => navigate('/login')}>Login!</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-[#ffffff]/60 hover:text-[#065535]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#ffffff]/60 hover:text-[#065535]">
                <FaTwitter />
              </a>http://localhost:5175/signup
              <a href="#" className="text-[#ffffff]/60 hover:text-[#065535]">
                <FaLinkedinIn />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
