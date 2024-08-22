import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, ChevronRight } from 'lucide-react';
import K from '../constants';
import { apiLogout } from '../services/auth';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      setIsLoggingOut(true);
      try {
        await apiLogout();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('userName');
        navigate('/login');
      } catch (error) {
        console.error('Logout failed:', error);
      } finally {
        setIsLoggingOut(false);
      }
    }
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-20 w-72 bg-gradient-to-b from-green-700 to-green-900 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-lg`}>
        <div className="h-20 flex items-center justify-center border-b border-green-600">
          <h2 className="text-2xl font-bold">VisualVoices</h2>
        </div>
        <nav className="mt-6 space-y-1 px-3">
          {K.DASHBOARD_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-base font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 ${location.pathname === item.path ? 'bg-green-600' : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-6 h-6 mr-4" />
              <span>{item.name}</span>
              {location.pathname === item.path && (
                <ChevronRight className="w-5 h-5 ml-auto" />
              )}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-green-600">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Account Settings
          </h3>
          {K.SETTINGS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center mb-3 py-2 text-base font-medium hover:text-green-300 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-6 h-6 mr-4" />
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`flex items-center justify-center w-full mt-6 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <LogOut className="w-6 h-6 mr-3" />
            <span className="text-base font-medium">
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </span>
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 p-2 rounded-full bg-green-700 text-white z-30 lg:hidden shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </>
  );
};

export default Sidebar;