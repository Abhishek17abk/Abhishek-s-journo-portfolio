import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function AboutContact() {
  const skills = [
    { name: "Data Visualization", level: "Expert" },
    { name: "Editorial", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Tableau", level: "Advanced" },
    { name: "Datawrapper", level: "Advanced" },
  ];

  const education = [
    {
      degree: "Master's in Computational and Data Journalism",
      institution: "Cardiff University",
      year: "2021 - 2023",
    },
    {
      degree: "Bachelor of Engineering in Printing and Packaging",
      institution: "SIES Graduate School of Technology",
      year: "2012 - 2018",
    },
  ];

  const experience = [
    {
      title: "Consulting Editor",
      company: "Haymarket SAC Publishing (India) Private Limited",
      period: "September 2021 - December 2021",
      description: "Contributed to editorial strategy and content planning.",
    },
    {
      title: "Associate Editor",
      company: "Haymarket SAC Publishing (India) Private Limited",
      period: "March 2020 - September 2021",
      description: "Managed editorial content and assisted with marketing initiatives.",
    },
    {
      title: "Editorial Assistant",
      company: "Haymarket SAC Publishing (India) Private Limited",
      period: "July 2018 - February 2020",
      description: "Supported content creation and management for print and digital platforms.",
    },
    {
      title: "Junior Editor",
      company: "Modern Plastics India Magazine",
      period: "January 2018 - June 2018",
      description: "Contributed to editorial content focusing on the plastics industry.",
    },
  ];

  return (
    <div className="about-contact container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center mb-16">
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <header className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <img
                src={process.env.PUBLIC_URL + '/images/1578748370061.jpeg'}
                alt="Abhishek Muralidharan"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2">Abhishek Muralidharan</h1>
            <p className="text-xl text-gray-600">Data Journalist & Editorial Specialist</p>
          </header>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-center md:text-right">
            <a href="../pdfs/resume/Abhishek Muralidharan CV new.pdf" download className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300 mb-4 inline-block">
              Download Full Resume
            </a>
            <div className="social-links flex justify-center space-x-6 mt-4">
              <a href="https://www.linkedin.com/in/abhishek-muralidharan" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors duration-200">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors duration-200">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors duration-200">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="introduction mb-16">
        <p className="text-lg leading-relaxed">
          I am a data journalist with a background in editorial work, specializing in the printing and packaging industry.
          My journey through journalism has been enriched by a Master's degree in Computational and
          Data Journalism from Cardiff University, which has equipped me with skills to blend
          data analysis with storytelling.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          My experience includes working with editorial teams, contributing to
          content strategy, and utilizing data visualization tools to enhance narrative impact.
          I am passionate about transforming complex datasets into accessible,
          engaging stories that resonate with both industry professionals and general audiences.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Whether it's exploring sustainability trends in packaging or analyzing the
          intersection of print and digital media, I aim to bring clarity and insight
          to each topic I cover. I'm continuously developing my skills in data analysis and
          visualization, always seeking to improve the quality and impact of my work.
        </p>
      </section>

      {/* You can add the Timeline and SkillRadarChart components here if needed */}
    </div>
  );
}

export default AboutContact;