import React from 'react';
import HeroSection from '../components/HeroSection';
import ArticlePreview from '../components/ArticlePreview';

function Home() {
  const featuredArticles = [
    { 
      id: 1, 
      title: "The Future of Packaging: Sustainability Trends Reshaping the Industry", 
      excerpt: "Dive into the latest sustainability trends that are transforming the packaging industry, backed by data and expert insights.", 
      imageUrl: "/path-to-packaging-image.jpg" 
    },
    { 
      id: 2, 
      title: "Print's Digital Revolution: How Technology is Transforming Traditional Media", 
      excerpt: "Explore the intersection of print and digital technologies, and how they're reshaping the media landscape.", 
      imageUrl: "/path-to-print-tech-image.jpg" 
    },
    { 
      id: 3, 
      title: "Data Visualization in Journalism: A Case Study in the Packaging Sector", 
      excerpt: "See how data visualization techniques can bring complex industry data to life, enhancing storytelling and reader engagement.", 
      imageUrl: "/path-to-data-viz-image.jpg" 
    },
  ];

  return (
    <div className="home">
      <HeroSection />
      <section className="featured-articles py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map(article => (
              <ArticlePreview key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;