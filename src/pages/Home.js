import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

function Home() {
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Packaging: Sustainability Trends",
      excerpt: "Dive into the latest sustainability trends transforming the packaging industry.",
      imageUrl: "/path-to-packaging-image.jpg"
    },
    {
      id: 2,
      title: "Print's Digital Revolution",
      excerpt: "Explore how technology is reshaping traditional media.",
      imageUrl: "/path-to-print-tech-image.jpg"
    },
    {
      id: 3,
      title: "Data Visualization in Journalism",
      excerpt: "See how data visualization enhances storytelling in the packaging sector.",
      imageUrl: "/path-to-data-viz-image.jpg"
    },
  ];

  return (
    <div className="home min-h-screen flex items-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hero-content md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Data-Driven Stories in Print and Digital Media</h1>
            <p className="text-xl md:text-2xl mb-8">Abhishek Muralidharan: Data Journalist & Editorial Specialist</p>
            <div className="cta-buttons flex space-x-4">
              <CTAButton as={Link} to="/my-work">View My Work</CTAButton>
              <CTAButton as={Link} to="/about-me" variant="secondary">Learn More About Me</CTAButton>
            </div>
          </div>
          <div className="featured-articles md:w-1/2 space-y-4">
            {featuredArticles.map(article => (
              <div key={article.id} className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-200">{article.excerpt}</p>
                <Link to={`/article/${article.id}`} className="text-sm text-white hover:underline mt-2 inline-block">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;