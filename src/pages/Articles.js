import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ArticlesLayout from '../components/ArticlesLayout';
import SubSection from '../components/SubSection';

function Articles() {
  const location = useLocation();

  return (
    <ArticlesLayout currentPath={location.pathname}>
      <Routes>
        <Route index element={<SubSection title="All Articles" />} />
        <Route path="features" element={<SubSection title="Features" />} />
        <Route path="data-stories" element={<SubSection title="Data Stories" />} />
        <Route path="news" element={<SubSection title="News" />} />
      </Routes>
    </ArticlesLayout>
  );
}

export default Articles;