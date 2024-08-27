import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Animation/motion";

const Contact = () => {
  return (
    <motion.section
      className=" min-h-screen bg-gray-900 text-white"
      initial="hidden"
      whileInView="show"
      variants={staggerContainer(0.3, 0.1)}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="pt-10"
          variants={fadeIn("right", "tween", 0.1, 0.6)}
        >
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white text-center md:text-left">
            Contact
          </h1>
        </motion.div>
        <div className="flex flex-col my-10">
          <div className="mx-auto border-2 border-gray-500 w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Contact Information and Form Section */}
            <div className="flex flex-col md:flex-row">
              {/* Contact Information Section */}
              <motion.div
                className="w-full md:w-1/3 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
                variants={fadeIn("right", "tween", 0.2, 0.6)}
              >
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-6">Get In Touch.</p>
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="mr-2" />
                  <span>Phone: +923450583043</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaWhatsapp className="mr-2" />
                  <span>Whatsapp: +923450583043</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaWhatsapp className="mr-2" />
                  <a
                    href="https://wa.me/+923450583043"
                    target="_blank"
                    className="hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="mr-2" />
                  <span>Email: shujabinrehmat@gmail.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaGlobe className="mr-2" />
                  <span>shuja-web-developer.netlify.app</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <FaFacebookF className="cursor-pointer" />
                  <FaTwitter className="cursor-pointer" />
                  <FaLinkedinIn className="cursor-pointer" />
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <motion.div
                className="w-full md:w-2/3 p-6 bg-gray-900 text-white"
                variants={fadeIn("right", "tween", 0.2, 0.8)}
              >
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                <form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="flex-1 p-3 rounded-lg bg-gray-700 text-white w-full md:w-5/6"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="flex-1 p-3 rounded-lg bg-gray-700 text-white w-full md:w-5/6 mt-4 md:mt-0"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                      type="email"
                      placeholder="Mail"
                      className="flex-1 p-3 rounded-lg bg-gray-700 text-white w-full md:w-5/6"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="flex-1 p-3 rounded-lg bg-gray-700 text-white w-full md:w-5/6 mt-4 md:mt-0"
                    />
                  </div>
                  <textarea
                    placeholder="Write your message"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white h-32"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full p-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </motion.section>
  );
};

export default Contact;
