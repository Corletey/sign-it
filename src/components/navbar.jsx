import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/dashboard/enrolled-courses' },
    { name: 'Community', path: '/dashboard/messages' },
    { name: 'Resources', path: '/resources' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white text-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/path-to-your-logo.png" alt="Sign It Logo" />
              <span className="ml-2 text-xl font-bold text-[#065535]">Sign It</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="border-transparent text-gray-500 hover:text-[#065535] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div>
                <button className="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#065535]">
                  <img className="h-8 w-8 rounded-full" src="/path-to-user-avatar.jpg" alt="" />
                </button>
              </div>
            </div>
            <Link
              to="/dashboard"
              className="ml-3 px-3 py-2 rounded-md text-sm font-medium bg-[#065535] text-white hover:bg-[#054425]"
            >
              Dashboard
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#065535]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white text-gray-900">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-[#065535] text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="/path-to-user-avatar.jpg" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Rolands Richard</div>
                <div className="text-sm font-medium text-gray-500">student@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <LogOut className="h-6 w-6 mr-3" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
