// src/constants/index.jsx
import { Home, User, Mail, Shield, Star, BookOpen, ClipboardCheck, MessageCircle, Book } from 'lucide-react';

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
    { name: 'Messages', icon: Mail, path: '/dashboard/messages' },
  ],

  SETTINGS: [
    { name: 'Settings', path: '/dashboard/settings', icon: Shield },
  ],

  COURSE_MODULES: [
    { name: 'Module 1', path: '/dashboard/enrolled-courses/courses/module-1', icon: Book },
    { name: 'Module 2', path: '/dashboard/enrolled-courses/courses/module-2', icon: Book },
    { name: 'Module 3', path: '/dashboard/enrolled-courses/courses/module-3', icon: Book },
  ],
};

export default K;

