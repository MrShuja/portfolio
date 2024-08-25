import React from "react";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import aboutImage from "../files/aboutImage.jpg";
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from "../Animation/motion";
import Footer from '../footer/Footer';

// counter ststbox
const StatBox = ({ number, description }) => {
  return (
    <div className="flex flex-col items-center text-center m-4">
      <span
        className="text-3xl font-bold text-white text-gradient bg-gradient-to-r from-indigo-500 via-purple-700 to-indigo-600
                    mb-2 md:p-3 xs:p-20">
        {number}
      </span>
      <span className="text-white">{description}</span>
    </div>
  );
};

const About = () => {
  return (
    // Main container with dark background
    <motion.div className="bg-gray-900"
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(0.3, 0.1)}
        viewport={{ once: false, amount: 0.25 }}
    >
      {/* Centered container for the content */}
      <div className="container mx-auto p-6">
        {/* About me section header */}
        <motion.div className=""
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        >
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white xs:text-center sm:text-start">
            About Me
          </h1>
        </motion.div>

        {/* Main content section with two columns on larger screens */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
          {/* Left side - image, hidden on small devices */}
          <motion.div className="hidden md:flex justify-center md:justify-start"
          variants={fadeIn("right", "tween", 0.4, 0.9)}
          >
            <img
              src={aboutImage}
              alt="Placeholder"
              className="w-72 h-[300px] border-8 border-gradient-to-r from-blue-500 via-green-500 to-purple-500 shadow-2xl rounded-lg"
            />
          </motion.div>

          {/* Right side - description */}
          <div className="md:ml-6">
            <motion.h1 className="text-white  md:mt-0 md:py-0"
            variants={fadeIn("left", "tween", 0.6, 1.1)}
            >
              MERN Full Stack Developer
            </motion.h1>
            <motion.p className="text-lg text-white py-4"
            variants={fadeIn("left", "tween", 0.8, 1.3)}
            >
              I am a MERN developer with a passion for building web applications
              using MongoDB, Express.js, React.js, and Node.js. I enjoy creating
              user-friendly, efficient, and scalable solutions.
            </motion.p>
          </div>
        </div>

        {/* Placeholder for additional content in the second row */}
        <div className="mt-6">
          {/* 2nd Row */}
          {/* Experience and Stats */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <motion.span variants={fadeIn("up", "tween", 0.8, 1.3)}>
              <StatBox number="4+" description="YEARS OF EXPERIENCE" />
            </motion.span>

            <motion.span variants={fadeIn("up", "tween", 0.9, 1.4)}>
              <StatBox number="90+" description="PROJECTS COMPLETED" />
            </motion.span>

            <motion.span variants={fadeIn("up", "tween", 1.1, 1.5)}>
              <StatBox number="85+" description="HAPPY CLIENTS" />
            </motion.span>

            <motion.span variants={fadeIn("up", "tween", 1.2, 1.6)}>
              <StatBox number="1K+" description="CUPS OF COFFEE" />
            </motion.span>
          </div>
        </div>
      </div>
      <div className="mt-10">
          <Footer />
        </div>
    </motion.div>
  );
};

export default About;
