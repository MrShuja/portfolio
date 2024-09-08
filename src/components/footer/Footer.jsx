// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="text-2xl font-bold text-blue-100">Web Dev</div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <NavLink to="/" className="hover:text-yellow-400 transition">Home</NavLink>
            <NavLink to="/about" className="hover:text-yellow-400 transition">About</NavLink>
            <NavLink to="/expertise" className="hover:text-yellow-400 transition">Expertise</NavLink>
            <NavLink to="/projects" className="hover:text-yellow-400 transition">Projects</NavLink>
            <NavLink href="/contact" className="hover:text-yellow-400 transition">Contact</NavLink>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
            <FaFacebookF size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
            <FaTwitter size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
            <FaLinkedinIn size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
            <FaInstagram size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300"/>
          </a>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <MdPhone size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300" />
            <span>+923450583043</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300" />
            <span>shujabinrehmat@gmail.com</span>
          </div>
          <a
            href="https://wa.me/+923450583043"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-400 hover:text-yellow-400 transition"
          >
            <FaWhatsapp size={20} className="text-gray-100 hover:text-blue-600 text-2xl sm:text-3xl transition duration-300" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
