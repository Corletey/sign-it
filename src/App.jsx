// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
import Login from './pages/auth/login';
import Landing from './pages/landing/index';
import ForgotPassword from './pages/auth/forgotPass';
import DashboardLayout from './layouts/dashboardLayout';
import Overview from './pages/dashboard/components/overview';
import Profile from './pages/dashboard/components/profile';
import EnrolledCourses from './pages/dashboard/components/enrolledCourses';
import Settings from './pages/dashboard/components/settings/components/settings';
import SignUp from './pages/auth/signup';
import IntermediateIndex from './pages/courses/intermediate';
import CourseLayout from './layouts/courseLayout';
import BeginnerOverview from './pages/courses/beginner/beginnerOverview';
import BegLesson1 from './pages/courses/beginner/module1/begLesson1';
import BegLesson2 from './pages/courses/beginner/module1/begLesson2';
import BegLesson3 from './pages/courses/beginner/module1/begLesson3';
import AdvancedIndex from './pages/courses/advanced/index';
// import Module1 from './pages/courses/beginner/module1';
// import Module2 from './pages/courses/beginner/module2';
import Module3 from './pages/courses/intermediate/module3';
import Module4 from './pages/courses/intermediate/module4';
import Module5 from './pages/courses/advanced/module5';
import Module6 from './pages/courses/advanced/module6';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  // Dashboard Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Overview /> },
      { path: "profile", element: <Profile /> },
      { path: "enrolled-courses", element: <EnrolledCourses /> },
      { path: "settings", element: <Settings /> },
      {
        path: "enrolled-courses/:level",
        element: <CourseLayout />,
        children: [
          { path: "", element: <BeginnerOverview /> },
          { path: "module1/begLesson1", element: <BegLesson1 /> },
          { path: "module1/begLesson2", element: <BegLesson2 /> },
          { path: "module1/begLesson3", element: <BegLesson3 /> },
          
          {
            path: "intermediate",
            element: <IntermediateIndex />,
            children: [
              { path: "module3", element: <Module3 /> },
              { path: "module4", element: <Module4 /> },
            ],
          },
          {
            path: "advanced",
            element: <AdvancedIndex />,
            children: [
              { path: "module5", element: <Module5 /> },
              { path: "module6", element: <Module6 /> },
            ],
          },
        ],
      },
    ],
  },
  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
