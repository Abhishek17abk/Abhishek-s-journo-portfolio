import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2024 Abhishek Muralidharan. All rights reserved.</p>
        <p className="mb-4 md:mb-0 text-sm">Bridging the gap between data and storytelling in the world of print and packaging.</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-muralidharan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;