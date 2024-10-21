import React from 'react';
import Login from '../pages/login';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Team Management System</h2>
            <p className="text-sm text-gray-400">© 2024 Team Management System. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition">About Us</a>
            <a href="/services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.411.59 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.098 2.795.142v3.24H18.68c-1.688 0-2.016.802-2.016 1.977v2.59h4.032l-.527 3.622h-3.505V24h6.868c.734 0 1.325-.591 1.325-1.324V1.325C24 .59 23.41 0 22.675 0z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.162C6.513 2.162 2.163 6.513 2.163 12S6.513 21.838 12 21.838 21.838 17.487 21.838 12 17.487 2.162 12 2.162zm0 17.375c-3.013 0-5.462-2.448-5.462-5.462S8.987 8.613 12 8.613s5.462 2.448 5.462 5.462-2.449 5.462-5.462 5.462zm0-9.237a3.781 3.781 0 1 0 0 7.563 3.781 3.781 0 0 0 0-7.563zM18.796 6.014a.88.88 0 1 0 0-1.759.88.88 0 1 0 0 1.759z" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.46C0 23.208.792 24 1.77 24h20.46c.978 0 1.77-.792 1.77-1.77V1.77C24 .792 23.208 0 22.23 0zM7.073 20.155H3.846V9h3.227v11.155zM5.459 7.592a1.872 1.872 0 1 1 0-3.743 1.872 1.872 0 0 1 0 3.743zm14.696 12.563h-3.227v-5.503c0-1.312-.026-3.003-1.83-3.003-1.832 0-2.113 1.43-2.113 2.906v5.6H9.755V9h3.1v1.525h.043c.432-.819 1.487-1.683 3.062-1.683 3.277 0 3.883 2.157 3.883 4.96v6.353z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
