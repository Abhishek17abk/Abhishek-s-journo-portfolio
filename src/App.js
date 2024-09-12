import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import AboutContact from './pages/AboutContact';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app min-h-screen flex flex-col">
      {!isHomePage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-work/*" element={<MyWork />} />
          <Route path="/about-me" element={<AboutContact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;