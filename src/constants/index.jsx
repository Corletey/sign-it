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

  COURSE_STRUCTURE: {
    beginner: [
      {
        id: 1,
        title: 'Getting Started',
        lessons: [
          { id: 1, title: 'Introduction to Ghanaian Sign Language'},
          { id: 2, title: 'Basic Handshapes and Finger Spelling'},
          { id: 3, title: 'Greetings and Simple Phrases'},
        ],
      },
      {
        id: 2,
        title: 'Everyday Communication',
        lessons: [
          { id: 1, title: 'Common Objects'},
          { id: 2, title: 'Family Members'},
          { id: 3, title: 'Days of the Week'},
        ],
      },
    ],
    intermediate: [
      {
        id: 1,
        title: 'Expanding Vocabulary',
        lessons: [
          { id: 1, title: 'Weather Terms'},
          { id: 2, title: 'Food Items'},
          { id: 3, title: 'Clothing'},
        ],
      },
      {
        id: 2,
        title: 'Basic Sentences',
        lessons: [
          { id: 1, title: 'Simple Sentence Structures'},
          { id: 2, title: 'Asking Simple Questions'},
        ],
      },
    ],
    advanced: [
      {
        id: 1,
        title: 'Advanced Communication',
        lessons: [
          { id: 1, title: 'Common Idioms'},
          { id: 2, title: 'Describing Emotions'},
        ],
      },
      {
        id: 2,
        title: 'Cultural Insights',
        lessons: [
          { id: 1, title: 'Deaf Culture Basics'},
          { id: 2, title: 'Important GSL Etiquette'},
        ],
      },
    ],
  },
};

export default K;
