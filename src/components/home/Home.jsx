import React from "react";
import "../index.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import PortfolioPic from "../files/portfolioPic.png";
import { motion } from "framer-motion";
import "./Home.css";
import { fadeIn, staggerContainer } from "../Animation/motion";
const Home = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white"
      initial="hidden"
      whileInView="show"
      variants={staggerContainer(0.3, 0.1)}
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Right Side (Image) for Mobile First */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:py-0 md:px-8 order-1 md:order-2">
        <motion.div className="relative">
          <motion.div variants={fadeIn("down", "tween", 0.2, 0.8)}>
            <img
              src={PortfolioPic}
              alt="Shuja"
              className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-132 lg:h-132 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Social Media Icons */}
          <motion.div className="flex space-x-4 mt-4 items-center justify-center">
            <motion.div
              className="flex space-x-4 mt-4 items-center justify-center"
              variants={fadeIn("right", "tween", 0.2, 0.8)}
            >
              <a
                href="https://www.linkedin.com/in/shuja-web-developer-369b992a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 hover:text-blue-700 text-2xl sm:text-3xl transition duration-300" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089746535329"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 hover:text-blue-700 text-2xl sm:text-3xl transition duration-300" />
              </a>
            </motion.div>
            <motion.div
              className="flex space-x-4 mt-4 items-center justify-center"
              variants={fadeIn("left", "tween", 0.2, 0.8)}
            >
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-600 hover:text-pink-700 text-2xl sm:text-3xl transition duration-300" />
              </a>
              <a
                href="https://wa.me/+923450583043"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-600 hover:text-green-700 text-2xl sm:text-3xl transition duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Left Side (Text and Button) */}
      <motion.div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:py-0 md:px-8 text-center md:text-left order-2 md:order-1">
        <motion.div variants={fadeIn("down", "tween", 0.2, 0.8)}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hello, I am Shuja
          </h1>
        </motion.div>

        <motion.p
        variants={fadeIn("right", "tween", 0.3, 0.9)}>MERN Full Stack Engineer</motion.p>
        <br />
        <motion.p
        variants={fadeIn("right", "tween", 0.5, 1.1)}>I am using different powerfull Tools Like</motion.p>
        <br />
        <motion.div className="text-lg md:text-xl lg:text-2xl mb-8"
        variants={fadeIn("right", "tween", 0.7, 1.3)}
        >
          <TypewriterComponent
            options={{
              strings: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "CSS Frameworks",
                "Frammer Motion",
              ],
              autoStart: true,
              loop: true,
              cursor: "_",
              backspace: true,
              backspaceDelay: 1000, // adjust the delay to your liking
            }}
          />
        </motion.div>
        <motion.p className="text-base md:text-lg lg:text-xl mb-8 max-w-md"
        variants={fadeIn("right", "tween", 0.9, 1.5)}>
          I am passionate about building scalable web applications With a strong
          foundation in both front-end and back-end technologies.
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-transparent text-blue-600 border border-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          variants={fadeIn("right", "tween", 0.9, 1.5)}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
