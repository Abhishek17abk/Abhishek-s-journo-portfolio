import React from 'react';
import ArticlePreview from './ArticlePreview';

function SubSection({ title }) {
  // This is a placeholder. In a real application, you'd fetch articles based on the subsection.
  const articles = [
    { id: 1, title: `${title} Article 1`, excerpt: `This is a preview of ${title.toLowerCase()} article 1` },
    { id: 2, title: `${title} Article 2`, excerpt: `This is a preview of ${title.toLowerCase()} article 2` },
    { id: 3, title: `${title} Article 3`, excerpt: `This is a preview of ${title.toLowerCase()} article 3` },
  ];

  return (
    <section className="sub-section">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="article-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <ArticlePreview key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}

export default SubSection;
