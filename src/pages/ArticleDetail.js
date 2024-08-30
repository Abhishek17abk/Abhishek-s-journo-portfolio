import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { id } = useParams();

  // This is a placeholder. In a real application, you'd fetch the article based on the id.
  const article = {
    title: `Article ${id}`,
    content: `This is the full content of article ${id}.`,
    date: "2024-03-15"
  };

  return (
    <article className="article-detail container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-6">Published on {article.date}</p>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
    </article>
  );
}

export default ArticleDetail;