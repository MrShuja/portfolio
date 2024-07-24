import React, { useState } from 'react'
import './index.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-xl font-bold">
        My Portfolio
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#expertise" className="hover:text-gray-400">Expertise</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Download CV
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
    </div>
    <div className={`fixed inset-0 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4 p-4">
        <a href="#home" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>About</a>
        <a href="#expertise" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Expertise</a>
        <a href="#projects" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4" onClick={() => setIsOpen(false)}>
          Download CV
        </button>
      </div>
    </div>
  </header>
);
}

export default Header
