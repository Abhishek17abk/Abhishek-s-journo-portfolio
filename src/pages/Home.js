import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

function Home() {
  const featuredArticles = [
    {
      id: 1,
      title: "Orbango's edgy bottle",
      excerpt: "When Orbango, a Mumbai-based juice bar, decided to sell its product in customised packaging, designer Jigna Shah Oza...",
      imageUrl: '../images/2-7f2dd5cb.jpg',
      link: "https://www.printweek.in/features/orbangos-edgy-bottle-41184"
    },
    {
      id: 2,
      title: "Football's popularity, cardiac safety awareness opportunity",
      excerpt: "Medics see football's heart problem as chance to educate",
      imageUrl: '../images/Gemini_Generated_Image_yezhluyezhluyezh.jpeg',
      link: `${process.env.PUBLIC_URL}../pdfs/Features/Football’s popularity, cardiac safety awareness opportunity.pdf`
    },
    {
      id: 3,
      title: "Reusing nature's own packaging",
      excerpt: "I write this from Chennai. Every day, I have been following the news. How the sunken ship XPressPearl that caught fire and spilled its oil cargo...",
      imageUrl: '../images/Screenshot 2024-09-13 at 01-40-17 Writing Sample 1.pdf.png',
      link: `${process.env.PUBLIC_URL}../pdfs/Magazines/Writing sample 2.pdf`
    },
  ];

  return (
    <div className="home min-h-screen flex flex-col justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Stories in Print and Digital Media</h1>
        </header>
        <div className="mb-12">
          <div className="featured-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-blue-100 rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-64 object-cover object-center"
                  onError={(e) => e.target.src = "/api/placeholder/400/320"}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <CTAButton as={Link} to="/my-work" icon="arrow" width="normal" className="hover:scale-105 transition-transform duration-300">
            View My Work
          </CTAButton>
          <CTAButton as={Link} to="/about-me" variant="secondary" icon="user" width="narrow" className="hover:scale-105 transition-transform duration-300">
            Learn More About Me
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
