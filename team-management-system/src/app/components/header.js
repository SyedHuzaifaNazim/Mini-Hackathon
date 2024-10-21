import { useState, useEffect } from 'react';
import Login from '../pages/login';

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById('sidebar');
      const openSidebarButton = document.getElementById('open-sidebar');

      if (sidebar && !sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden bg-gray-200">
        <div
          id="sidebar"
          className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ease-in-out duration-300`}
        >
          {/* Sidebar Content */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Sidebar</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a  className="block hover:text-indigo-400">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <h1 className="text-xl font-semibold">Team Management System</h1>

                <button
                  className="text-gray-500 hover:text-gray-600"
                  id="open-sidebar"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4">
            <h1 className="text-2xl font-semibold">Welcome to Team Management System</h1>
            <p>Team Management System is a web application designed to streamline the organization and management of teams. Built with modern technologies like Next.js, it allows users to efficiently manage different teams across various departments, track their activities, and ensure smooth collaboration. With intuitive interfaces and a responsive design, users can effortlessly add members, assign tasks, monitor progress, and enhance productivity. Whether it’s for development, design, or other team functionalities, this system provides a unified platform for team management, making it easier to oversee projects and foster teamwork.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
