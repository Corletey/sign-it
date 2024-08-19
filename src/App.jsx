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
// import DashboardPage from './pages/courses/index';
// import BeginnerIndex from './pages/courses/beginner';
import IntermediateIndex from './pages/courses/intermediate';
import CourseLayout from './layouts/courseLayout';
import BeginnerOverview from './pages/courses/beginner/beginnerOverview';
import Module1 from './pages/courses/beginner/module1';
import Module2 from './pages/courses/beginner/module2';

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
      { path: "profile", element: <Profile /> },
      { path: "enrolled-courses", element: <EnrolledCourses /> },
      { path: "settings", element: <Settings /> },
      {
        path: "enrolled-courses",
        element: <CourseLayout />,
        children: [
          {
            path: "beginner",
            element: <BeginnerOverview />,
          },
          {
            path: "intermediate",
            element: <IntermediateIndex />,
          },
          {
            path: ":level/module1",
            element: <Module1 />,
          },
          {
            path: ":level/module2",
            element: <Module2 />,
          },
        ],
      },
    ],
  },
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

