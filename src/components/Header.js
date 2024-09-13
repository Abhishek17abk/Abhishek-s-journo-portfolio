import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-blue-100 shadow-md sticky top-0 z-10 text-black">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif hover:text-cyan-500 transition-colors duration-200">
          <Link to="/">Abhishek Muralidharan</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/my-work"
                className={`hover:text-cyan-500 transition-colors duration-200 ${location.pathname.includes('/my-work') ? 'border-b-2 border-current' : ''
                  }`}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
                className={`hover:text-cyan-500 transition-colors duration-200 ${location.pathname === '/about-me' ? 'border-b-2 border-current' : ''
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