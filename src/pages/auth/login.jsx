//src/pages/auth/login.jsx
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'; // Added User icon
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import LoginImg from '../../assets/images/hands.jpeg';
import { ThreeDots } from 'react-loader-spinner';
import { apiLogin } from '../../services/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 
  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    console.log("Access accessToken stored:", accessToken); // This logs the access accessToken
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
  };
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      // console.log("login",res.data);
      addToLocalStorage(res.data.accessToken, res.data.user);

      toast.success(res.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const onSubmit = async (data) => {
  //   try {
  //     setIsSubmitting(true);
  //     const res = await apiLogin(data);
  //     localStorage.setItem('token', res.data.token);
  //     // localStorage.setItem('firstName', res.data.firstName);
  //     localStorage.setItem('email', res.data.email);
  //     localStorage.setItem('userName', res.data.userName);
  //     // toast.success(res.data.message);
  //     console.log(res.data.message);
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("An error occurred");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#065535] to-[#0c7a4d]">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={LoginImg}
          alt="Sign Language"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
            Communicate<br />Without Boundaries
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-lg text-white/80 mb-8">Log in to your account</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="First Name"
                {...register("firstname", { required: "Required" })}
                autoComplete="given-name" // Added autocomplete attribute
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-red-400 border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
              />
              {errors.firstname && <span className="text-red-400 text-sm mt-1">{errors.firstname.message}</span>}
            </div> */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Required" })}
                autoComplete="email"
                className="w-full px-4 py-2 pl-10 bg-white/10 border ${errors.email border-red-400 border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
              />
              {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Required" })}
                autoComplete="current-password"
                className="w-full px-4 py-2 pl-10 bg-white/10 border ${errors.password  border-red-400 border-white/20'} rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/50 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              {errors.password && <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>}
            </div>
            <div className="flex items-center justify-end">
              <Link to="/forgot-password" className="text-sm text-white hover:text-white/80 transition-colors duration-200">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-[#065535] rounded-lg hover:bg-white/90 transition-colors duration-300 font-semibold flex justify-center items-center"
            >
              {isSubmitting ? <ThreeDots height={24} width={24} color="#065535" /> : "Log In"}
            </button>
          </form>
          <p className="text-sm text-center text-white/80 mt-4">
            Don't have an account? <a href="#" className="text-white font-semibold hover:underline" onClick={() => navigate('/signup')}>Sign up</a>
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

export default Login;