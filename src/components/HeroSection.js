import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

function HeroSection() {
  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-10 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="hero-content md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Crafting Data-Driven Stories in Print and Pixels</h1>
        <p className="text-xl md:text-2xl mb-8">Abhishek Muralidharan:Noob Computational Journalist & Editorial Specialist</p>
        <div className="cta-buttons flex space-x-4">
          <CTAButton as={Link} to="/my-work">Explore My Work</CTAButton>
          <CTAButton as={Link} to="/about-me" variant="secondary">About Me</CTAButton>
        </div>
      </div>
      <div className="hero-image md:w-1/2">
        <img src="/path-to-your-professional-image.jpg" alt="Abhishek Muralidharan" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
      </div>
    </section>
  );
}

export default HeroSection;
