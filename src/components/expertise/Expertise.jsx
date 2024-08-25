import React from "react";
import Footer from '../footer/Footer';
import {
  FaBootstrap,
  FaBug,
  FaCheck,
  FaCog,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { SiExpress, SiFramer, SiNetlify, SiTailwindcss } from "react-icons/si";
import { IoLogoNetlify, IoPlay, IoRefresh } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdApi, MdHttp } from "react-icons/md";
import { HiOutlineCloud } from "react-icons/hi";
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from "../Animation/motion";

const Expertise = () => {
  return (
    <motion.section className="bg-gray-900 text-white py-10"
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(0.3, 0.1)}
        viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto">
        <motion.div className=""
          variants={fadeIn("right", "tween", 0.1, 0.6)}
        >
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white xs:text-center sm:text-start">
            Expertise
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.2, 0.7)}
          >
            <FaReact size={40} />
            <p className="text-lg font-semibold mt-4">React.js</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
            variants={fadeIn("right", "tween", 0.3, 0.8)}
          >
            <FaBootstrap size={40} />
            <p className="text-lg font-semibold mt-4">Bootstrap</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
            variants={fadeIn("right", "tween", 0.4, 0.9)}
          >
            <RiTailwindCssFill size={40} />
            <p className="text-lg font-semibold mt-4">Tailwind CSS</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.5, 1.0)}
          >
            <FaHtml5 size={40} />
            <p className="text-lg font-semibold mt-4">HTML</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.6, 1.1)}

          >
            <FaCss3 size={40} />
            <p className="text-lg font-semibold mt-4">CSS</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.7, 1.2)}
          >
            <FaCog size={40} />
            <p className="text-lg font-semibold mt-4">Frammer Motion</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.8, 1.3)}
          >
            <FaCheck size={40} />
            <p className="text-lg font-semibold mt-4">Jest</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 0.9, 1.4)}
          >
            <FaNodeJs size={40} />
            <p className="text-lg font-semibold mt-4">Node.JS</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 1.0, 1.5)}
          >
            <MdApi size={40} />
            <p className="text-lg font-semibold mt-4">Express.JS</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 1.1, 1.6)}
          >
            <FaDatabase size={40} />
            <p className="text-lg font-semibold mt-4">MongoDB</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 1.2, 1.7)}
          >
            <MdHttp size={40} />
            <p className="text-lg font-semibold mt-4">Postman</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 1.3, 1.8)}
          >
            <FaGithub size={40} />
            <p className="text-lg font-semibold mt-4">GitHub</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
          variants={fadeIn("right", "tween", 1.4, 1.9)}
          >
            <SiNetlify size={40} />
            <p className="text-lg font-semibold mt-4">Netlify</p>
          </motion.div>
        </div>
      </div>
        <div className="mt-10">
          <Footer />
        </div>
      
    </motion.section>
  );
};

export default Expertise;
