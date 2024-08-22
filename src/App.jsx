// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
import Login from './pages/auth/login';
import Landing from './pages/landing/index';
import ForgotPassword from './pages/auth/forgotPass';
import QuizAttempts from './pages/dashboard/components/quizAttempts';
import DashboardLayout from './layouts/dashboardLayout';
import Overview from './pages/dashboard/components/overview';
import Profile from './pages/dashboard/components/profile';
import EnrolledCourses from './pages/dashboard/components/enrolledCourses';
import Settings from './pages/dashboard/components/settings/components/settings';
import SignUp from './pages/auth/signup';
import BeginnerOverview from './pages/courses/beginner/beginnerOverview';
import BegLesson1 from './pages/courses/beginner/module1/begLesson1';
import BegLesson2 from './pages/courses/beginner/module1/begLesson2';
import BegLesson3 from './pages/courses/beginner/module1/begLesson3';
import BegLesson4 from './pages/courses/beginner/module2/begLesson4';
import BegLesson5 from './pages/courses/beginner/module2/begLesson5';
import BegLesson6 from './pages/courses/beginner/module2/begLesson6';
import IntermediateOverview from './pages/courses/intermediate';
import IntLesson1 from './pages/courses/intermediate/module3/intLesson1';
import IntLesson2 from './pages/courses/intermediate/module3/intLesson2';
import IntLesson3 from './pages/courses/intermediate/module3/intLesson3';
import IntLesson4 from './pages/courses/intermediate/module4/intLesson4';
import AdvancedOverview from './pages/courses/advanced';
import AdvLesson1 from './pages/courses/advanced/module5/advLesson1';
import AdvLesson2 from './pages/courses/advanced/module5/advLesson2';
import AdvLesson3 from './pages/courses/advanced/module5/advLesson3';
import AdvLesson4 from './pages/courses/advanced/module6/advLesson4';
import CourseLayout from './layouts/courseLayout';

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
      { path: "quiz-attempts", element: <QuizAttempts /> },
      { path: "settings", element: <Settings /> },
      {
        path: "enrolled-courses/:level",
        element: <CourseLayout />,
        children: [
          { path: "", element: <BeginnerOverview /> },
          { path: "module1/begLesson1", element: <BegLesson1 /> },
          { path: "module1/begLesson2", element: <BegLesson2 /> },
          { path: "module1/begLesson3", element: <BegLesson3 /> },
          { path: "module2/begLesson4", element: <BegLesson4 /> },
          { path: "module2/begLesson5", element: <BegLesson5 /> },
          { path: "module2/begLesson6", element: <BegLesson6 /> },

          {
            path: "intermediate",
            element: <CourseLayout />,
            children: [
              { path: "", element: <IntermediateOverview /> },
              { path: "module3/intLesson1", element: <IntLesson1 /> },
              { path: "module3/intLesson2", element: <IntLesson2 /> },
              { path: "module3/intLesson3", element: <IntLesson3 /> },
              { path: "module4/intLesson4", element: <IntLesson4 /> },
            ],
          },
          {
            path: "advanced",
            element: <CourseLayout />,
            children: [
              { path: "", element: <AdvancedOverview /> },
              { path: "module5/advLesson1", element: <AdvLesson1 /> },
              { path: "module5/advLesson2", element: <AdvLesson2 /> },
              { path: "module5/advLesson3", element: <AdvLesson3 /> },
              { path: "module6/advLesson4", element: <AdvLesson4 /> },
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
