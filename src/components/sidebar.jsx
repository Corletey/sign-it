import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, ChevronRight } from 'lucide-react';
import K from '../constants';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    // Clear user session data from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userName');

    // Optionally, you might want to clear other session data or make an API call to logout

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-gradient-to-b from-green-700 to-green-900 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-lg`}>
        <div className="h-16 flex items-center justify-center lg:hidden">
          <h2 className="text-2xl font-bold">Sign It</h2>
        </div>
        <nav className="mt-5 space-y-2">
          {K.DASHBOARD_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-white rounded-md hover:bg-green-600 transition-colors duration-200 ${location.pathname === item.path ? 'bg-green-600' : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
              {location.pathname === item.path && (
                <ChevronRight className="w-5 h-5 ml-auto" />
              )}
            </Link>
          ))}
        </nav>
        <div className="p-6 mt-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Account Settings
          </h3>
          {K.SETTINGS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center mb-3 text-white hover:text-green-300 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center w-full mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
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
