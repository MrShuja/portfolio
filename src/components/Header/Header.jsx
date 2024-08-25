import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4 h-16">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg shadow-blue-800/50 drop-shadow-md text-shadow-sm animate-pulse">
            <span className="text-4xl">W</span>EB
            <span className="text-3xl font-extrabold">D</span>EV
            <span className="text-2xl">E</span>LOPER
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex-grow flex justify-center">
            <nav className="flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "hover:text-yellow-400"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "hover:text-yellow-400"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/expertise"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "hover:text-yellow-400"
                }
              >
                Expertise
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "hover:text-yellow-400"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "hover:text-yellow-400"
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
          <div>
            <a href={`${process.env.PUBLIC_URL}/MyCvPNew.pdf`} download="MyCvPNew.pdf">
              <button className="border border-gray-600 text-gray-300 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 underline"
                : "text-lg hover:text-gray-400 hover:underline"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 underline"
                : "text-lg hover:text-gray-400 hover:underline"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/expertise"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 underline"
                : "text-lg hover:text-gray-400 hover:underline"
            }
            onClick={() => setIsOpen(false)}
          >
            Expertise
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 underline"
                : "text-lg hover:text-gray-400 hover:underline"
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 underline"
                : "text-lg hover:text-gray-400 hover:underline"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <button
            className="border border-gray-600 text-gray-300 py-2 px-4 rounded-full mt-4 hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
