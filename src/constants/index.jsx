//src/constants/index.jsx
import { Home, User, Shield, Star, BookOpen, ClipboardCheck, Book } from 'lucide-react';

const K = {
  NAVLINKS: [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Login', path: '/login', icon: User },
    { name: 'Sign Up', path: '/signup', icon: User },
  ],

  DASHBOARD_LINKS: [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'My Profile', icon: User, path: '/dashboard/profile' },
    { name: 'Enrolled Courses', icon: BookOpen, path: '/dashboard/enrolled-courses' },
    { name: 'My Quiz Attempts', icon: ClipboardCheck, path: '/dashboard/quiz-attempts' },
  ],

  SETTINGS: [
    { name: 'Settings', path: '/dashboard/settings', icon: Shield },
  ],

  COURSE_LEVELS: [
    { name: 'beginner', path: '/dashboard/enrolled-courses/beginner', icon: Star },
    { name: 'intermediate', path: '/dashboard/enrolled-courses/intermediate', icon: Star },
    { name: 'advanced', path: '/dashboard/enrolled-courses/advanced', icon: Star },
  ],

  COURSE_MODULES: [
    { name: 'Module 1', path: (level) => `/dashboard/enrolled-courses/${level}/module1`, icon: Book },
    { name: 'Module 2', path: (level) => `/dashboard/enrolled-courses/${level}/module2`, icon: Book },
  ],
};

export default K;
