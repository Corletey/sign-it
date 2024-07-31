import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import LoginImg from '../../assets/images/hands.jpeg';
import { InfinitySpin } from 'react-loader-spinner';

const Login = () => {
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
          src={LoginImg}
          alt="Background"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#065535]">
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-5xl font-bold text-[#ffffff]">Welcome</h2>
          <p className="text-base text-[#ffffff]">Log in to your account to continue</p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-[#ffffff] hover:underline">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#ffffff] text-[#065535] rounded-md hover:text-black hover:bg-[#B2B1BB]/90 transition-colors duration-300 flex justify-center items-center"
            >
              {isSubmitting ? <InfinitySpin /> : "Login"}
            </button>
            <p className="text-sm text-center text-[#ffffff]/60">
              Don’t have an account? <a href="#" className="text-[#ffffff] hover:underline" onClick={() => navigate('/signup')}>Sign up!</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-[#ffffff]/60 hover:text-[#065535]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#ffffff]/60 hover:text-[#065535]">
                <FaTwitter />
              </a>
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

export default Login;
