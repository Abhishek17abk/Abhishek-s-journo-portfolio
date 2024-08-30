import React from 'react';
import { Link } from 'react-router-dom';

function ArticlePreview({ id, title, excerpt, imageUrl }) {
  return (
    <article className="article-preview bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/article/${id}`} className="text-primary hover:underline">Read more</Link>
    </article>
  );
}

export default ArticlePreview;
