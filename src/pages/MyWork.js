import React from 'react';
import { Link } from 'react-router-dom';

function MyWork() {
  const categories = [
    { id: 'data-journalism', name: 'Data Journalism' },
    { id: 'print-digital', name: 'Print & Digital Media' },
    { id: 'packaging-industry', name: 'Packaging Industry Insights' },
  ];

  const projects = [
    {
      id: 1,
      title: "The Future of Packaging: Sustainability Trends Reshaping the Industry",
      excerpt: "An in-depth analysis of sustainability trends in the packaging industry, featuring interactive data visualizations and expert interviews.",
      category: "packaging-industry",
      imageUrl: "/path-to-packaging-image.jpg"
    },
    {
      id: 2,
      title: "Print's Digital Revolution: How Technology is Transforming Traditional Media",
      excerpt: "A comprehensive look at the intersection of print and digital technologies, showcasing innovative case studies from leading publications.",
      category: "print-digital",
      imageUrl: "/path-to-print-tech-image.jpg"
    },
    {
      id: 3,
      title: "Data Visualization in Journalism: A Case Study in the Packaging Sector",
      excerpt: "Explore how data visualization techniques can effectively communicate complex industry data, featuring an interactive dashboard of packaging trends.",
      category: "data-journalism",
      imageUrl: "/path-to-data-viz-image.jpg"
    },
    {
      id: 4,
      title: "The Impact of AI on Editorial Workflows",
      excerpt: "An examination of how artificial intelligence is reshaping content creation and editorial processes in modern newsrooms.",
      category: "print-digital",
      imageUrl: "/path-to-ai-editorial-image.jpg"
    },
    {
      id: 5,
      title: "Circular Economy in Packaging: Data-Driven Insights",
      excerpt: "A deep dive into the circular economy concept in the packaging industry, featuring data analysis and predictive models.",
      category: "packaging-industry",
      imageUrl: "/path-to-circular-economy-image.jpg"
    },
    {
      id: 6,
      title: "Visualizing News Consumption Patterns",
      excerpt: "An interactive project showcasing how data visualization can reveal insights about news consumption habits across different demographics.",
      category: "data-journalism",
      imageUrl: "/path-to-news-consumption-image.jpg"
    }
  ];

  return (
    <div className="my-work container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Work</h1>
      
      <div className="category-filter mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map(category => (
            <button 
              key={category.id}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="project-card bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.excerpt}</p>
              <Link to={`/article/${project.id}`} className="text-primary hover:underline">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;