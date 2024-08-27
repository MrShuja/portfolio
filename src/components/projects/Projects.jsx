import React from 'react';
import BlogApp from '../files/blogApp.png'
import PortfolioProject from '../files/portfolio.png'
import CountryInfo from '../files/countryInfo.png'
import BookStore from '../files/bookStore.png'
import BookLibrary from '../files/bookLibrary.jpeg'
import CosmaticStore from '../files/cosmaticStore.png'
import {useNavigate} from 'react-router-dom';
import Footer from '../footer/Footer';
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../Animation/motion';

const ProjectBox = ({ title, imageUrl, liveDemoUrl, codeUrl }) => {
  return (
    <div className=''>
      <div className="bg-gray-800 text-white p-6 xs:mx-10 md:mx-2 rounded-lg shadow-lg border border-gray-700">
      {/* Heading */}
      <h1 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white text-center md:text-left">{title}</h1>
      
      {/* Image */}
      <img 
        src={imageUrl} 
        alt="Project Thumbnail" 
        className="w-full rounded mb-4 h-56"
      />
      
      {/* Buttons Container */}
      <div className="flex justify-around mt-4">
        {/* Live Demo Button */}
        <a href={liveDemoUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Live Demo
        </a>
        
        {/* Code Button */}
        <a href={codeUrl} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          GitHub Code
        </a>
      </div>
    </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const ComingSoon =()=>{
    navigate('/comingSoon')
  }
  const projects = [
    {
      title: 'Blog App',
      imageUrl: BlogApp,
      liveDemoUrl: 'ComingSoon',
      codeUrl: 'https://github.com/MrShuja/BlogApp.git'
    },
    {
      title: 'Portfolio',
      imageUrl: PortfolioProject,
      liveDemoUrl: 'https://react-demo-project-portfolio.netlify.app/',
      codeUrl: 'https://github.com/MrShuja/react-portfolio2.git'
    },
    {
      title: 'Book Store',
      imageUrl: BookStore,
      liveDemoUrl: 'ComingSoon',
      codeUrl: 'ComingSoon'
    },
    {
      title: 'Book Library',
      imageUrl: BookLibrary,
      liveDemoUrl: 'ComingSoon',
      codeUrl: 'ComingSoon'
    },
    {
      title: 'Country Info',
      imageUrl: CountryInfo,
      liveDemoUrl: 'https://cheerful-travesseiro-808f3a.netlify.app/',
      codeUrl: 'https://github.com/MrShuja/country-info.git'
    },
    {
      title: 'Cosmatic Store',
      imageUrl: CosmaticStore,
      liveDemoUrl: 'ComingSoon',
      codeUrl: 'ComingSoon'
    }
  ];

  return (
    <motion.div className='bg-gray-900'
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(0.3, 0.1)}
        viewport={{ once: false, amount: 0.025 }}
    >
       <motion.div className='py-10'
       variants={fadeIn("right", "tween", 0.1, 0.6)}
       >
      <h1 className="text-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white xs:text-center sm:text-start sm:ml-4">
            Projects
          </h1>
      </motion.div>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {projects.map((project, index) => (
          <motion.div
          key={index}
          variants={fadeIn("right", "tween", index * 0.6 + 0.3, index * 0.005 + 0.6)}
          >
          <ProjectBox
            title={project.title}
            imageUrl={project.imageUrl}
            liveDemoUrl={project.liveDemoUrl}
            codeUrl={project.codeUrl}
          />
          </motion.div>
        ))}
      </motion.div>
    </div>
    <div className="mt-10">
          <Footer />
        </div>
    </motion.div>
  );
};

export default Projects;
