// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from "./layouts/authLayout";
import Login from "./pages/auth/login";
import Landing from './pages/landing/index';
import ForgotPassword from './pages/auth/forgotPass';
import HeroSection from './pages/dashboard/components/hero';
import DashboardLayout from './layouts/dashboardLayout';
import Overview from './pages/dashboard/components/overview';
import Profile from './pages/dashboard/components/profile';
import EnrolledCourses from './pages/dashboard/components/enrolledCourses';
import MessageApp from './pages/dashboard/components/messages/components/messageApp';
import Settings from './pages/dashboard/components/settings/components/settings';
import SignUp from './pages/auth/signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Overview /> },
      { path: "home", element: <HeroSection /> },
      { path: "profile", element: <Profile /> },
      { path: "enrolled-courses", element: <EnrolledCourses /> },
      // { path: "quiz-attempts", element:  },
      { path: "messages", element: <MessageApp /> },
      { path: "settings", element: <Settings /> },
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

