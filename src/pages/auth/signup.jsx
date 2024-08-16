import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import SignupImg from "../../assets/images/reaching.jpeg";
import { toast } from "react-toastify";
import { apiSignUp } from "../../services/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiSignUp(data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#065535] to-[#0c7a4d]">
      {/* Left Side - Image and Quote */}
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
            <span className="text-lg">- Pope John Paul II</span>
          </p>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-white mb-2">Join Us</h2>
          <p className="text-lg text-white/80 mb-8">Create your account</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* First Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.firstName && <span className="text-red-400 text-sm mt-1">{errors.firstName.message}</span>}
            </div>

            {/* Last Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.lastName && <span className="text-red-400 text-sm mt-1">{errors.lastName.message}</span>}
            </div>

            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="userName"
                type="text"
                placeholder="Username"
                {...register("userName", { required: "Username is required" })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.userName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.userName && <span className="text-red-400 text-sm mt-1">{errors.userName.message}</span>}
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  }
                })}
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

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", { 
                  required: "Confirm password is required",
                  validate: value => value === watch('password') || "Passwords do not match"
                })}
                className={`w-full px-4 py-2 pl-10 bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50`}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/50 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              {errors.confirmPassword && <span className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-white text-[#065535] rounded-lg hover:bg-white/90 transition-colors duration-300 font-semibold flex justify-center items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? <ThreeDots height={24} width={24} color="#065535" /> : "Sign Up"}
            </button>
          </form>

          {/* Navigation Link */}
          <p className="text-sm text-center text-white/80 mt-4">
            Already have an account?{" "}
            <span
              className="text-white underline cursor-pointer hover:text-white/80"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>

          {/* Social Login Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <FaFacebookF className="text-white hover:text-white/80 cursor-pointer" />
            <FaTwitter className="text-white hover:text-white/80 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-white/80 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
