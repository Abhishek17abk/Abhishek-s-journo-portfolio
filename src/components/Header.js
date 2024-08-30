import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif text-primary">
          <Link to="/">Abhishek Muralidharan</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/my-work" 
                className={`hover:text-primary transition-colors duration-200 ${
                  location.pathname.includes('/my-work') ? 'text-primary font-semibold' : ''
                }`}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link 
                to="/about-me" 
                className={`hover:text-primary transition-colors duration-200 ${
                  location.pathname === '/about-me' ? 'text-primary font-semibold' : ''
                }`}
              >
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;