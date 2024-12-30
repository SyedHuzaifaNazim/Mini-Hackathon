import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">&copy; {new Date().getFullYear()} Team Management System. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter">
            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram">
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn">
            <FaLinkedinIn className="hover:text-blue-700 transition-colors duration-300" />
          </a>
        </div>
        <div>
      <h1> Contact Us </h1>
      <p> Phone: 123-456-7890 </p>
      <p> Email: [info@company.com](mailto:info@company.com) </p>
      <p> Address: 123 Main St, Anytown, USA </p>
      
    </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;