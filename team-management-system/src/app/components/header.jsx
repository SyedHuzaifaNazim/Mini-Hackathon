import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './footer';
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
    <>
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
            <h1 className="text-2xl font-semibold">TMS</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="#" className="block hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="block hover:text-indigo-400">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="block hover:text-indigo-400">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/login" className="block hover:text-indigo-400">
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="block hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <h1 className="text-xl font-semibold">
                  <Link href="#" className="hover:text-indigo-400">TMS</Link>
                </h1>

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
            <h1 className="text-5xl font-bold flex justify-center gap-4">Welcome to Team Management System</h1>
            <br/>
            {/* <p className='text-2xl'>Team Management System is a web application designed to streamline the organization and management of teams. Built with modern technologies like Next.js, it allows users to efficiently manage different teams across various departments, track their activities, and ensure smooth collaboration. With intuitive interfaces and a responsive design, users can effortlessly add members, assign tasks, monitor progress, and enhance productivity. Whether it’s for development, design, or other team functionalities, this system provides a unified platform for team management, making it easier to oversee projects and foster teamwork.</p> */}
            {/* <br/> */}
            {/* <div className="flex justify-center gap-4">
              <button onClick={Login} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get Started
              </button>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#3b82f6,55%,#1e3a8a)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Create Account
              </button>
            </div> */}
               <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                We make team work <br className="hidden lg:block" />
                better for our users ...
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                From here you can create tasks as a leader &amp; check tasks as a member ...
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Get Started
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          </div>
        </div>
      </div>
    </div>


   
    <Footer/>
    </>
  );
};

export default LandingPage;
