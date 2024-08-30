import React, { useState } from 'react';
import { FaPen, FaChartBar, FaUsers, FaLaptopCode, FaNewspaper, FaIndustry } from 'react-icons/fa';

function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: "Transforming Complex Data into Engaging Narratives", icon: <FaChartBar /> },
    { name: "Crafting Compelling Content Across Multiple Platforms", icon: <FaPen /> },
    { name: "Leading Editorial Teams to Produce High-Quality Publications", icon: <FaUsers /> },
    { name: "Leveraging Programming Skills for Interactive Storytelling", icon: <FaLaptopCode /> },
    { name: "Expert in Print and Digital Media", icon: <FaNewspaper /> },
    { name: "Specialist in Printing and Packaging Industry", icon: <FaIndustry /> },
  ];

  return (
    <div className="about-contact container mx-auto px-4 py-16">
      <section className="about mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="about-content flex flex-col md:flex-row items-center md:items-start">
          <img src="/path-to-your-professional-image.jpg" alt="Abhishek Muralidharan" className="w-64 h-64 object-cover rounded-lg shadow-md mb-8 md:mb-0 md:mr-8" />
          <div className="about-text">
            <p className="mb-6 text-lg">
              With a keen eye for data and a passion for storytelling, I've spent the last four years navigating the intricate world of B2B trade publications, specializing in the printing and packaging industry. My journey from editorial assistant to associate editor at Haymarket SAC has been marked by a commitment to finding the stories hidden in data and bringing them to life through compelling narratives and visualizations.
            </p>
            <p className="mb-6 text-lg">
              Armed with a Master's degree in Computational and Data Journalism from Cardiff University, I combine programming prowess with editorial finesse to uncover and communicate complex stories effectively.
            </p>
            <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="text-3xl font-bold mb-8 text-center">Let's Collaborate on Data-Driven Stories</h2>
        <p className="text-center mb-8">Have a complex dataset that needs unraveling? Looking for insights on the printing and packaging industry? Let's connect.</p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300">Start the Conversation</button>
        </form>
      </section>
    </div>
  );
}

export default AboutContact;
