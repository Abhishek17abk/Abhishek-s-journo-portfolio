import React from 'react';
import { NavLink } from 'react-router-dom';

function ArticlesLayout({ children, currentPath }) {
  return (
    <div className="articles-layout container mx-auto px-4 py-8">
      <nav className="articles-nav bg-gray-200 p-4 rounded-lg mb-8">
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/articles" 
              end 
              className={({ isActive }) => 
                isActive || currentPath === '/articles' ? 'font-bold' : ''
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/articles/features" 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/articles/data-stories" 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              Data Stories
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/articles/news" 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="articles-content">
        {children}
      </main>
    </div>
  );
}

export default ArticlesLayout;