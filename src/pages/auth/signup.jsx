import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import SignupImg from '../../assets/images/reaching.jpeg';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#065535] to-[#0c7a4d]">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={SignupImg}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
          <p className="text-4xl md:text-5xl font-bold text-white text-center leading-tight italic">
            "The hands are the heart's landscape."
            <br />
            <span className=" text-lg ">- Pope John Paul II</span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-white mb-2">Join Us</h2>
          <p className="text-lg text-white/80 mb-8">Create your account</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.username ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.username && <span className="text-red-400 text-sm mt-1">{errors.username.message}</span>}
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/50 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              {errors.password && <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-[#065535] rounded-lg hover:bg-white/90 transition-colors duration-300 font-semibold flex justify-center items-center"
            >
              {isSubmitting ? <ThreeDots height={24} width={24} color="#065535" /> : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-center text-white/80 mt-4">
            Already have an account? <a href="#" className="text-white font-semibold hover:underline" onClick={() => navigate('/login')}>Log in</a>
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;