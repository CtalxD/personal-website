import React, { useState, useEffect } from 'react';
import '../styles/homePage.css';
import sitalsResume from '../assets/sitalsResume.pdf';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleDownloadCV = () => {
    // Use the imported PDF
    const link = document.createElement('a');
    link.href = sitalsResume;
    link.download = 'sitalsResume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Download Icon SVG Component
  const DownloadIcon = () => (
    <svg 
      className="download-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z"
        fill="currentColor"
      />
      <path 
        d="M5 20V18H19V20H5Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Enhanced Brand */}
          <a href="/" className="navbar-brand">
            Sital Aryal
          </a>

          {/* Navigation Links - Centered */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.name)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download CV Button */}
          <button 
            className="download-cv-btn"
            onClick={handleDownloadCV}
            aria-label="Download CV"
          >
            <DownloadIcon />
            Download CV
          </button>
        </div>
      </header>

      {/* Main Content Area - Add padding-top to account for fixed navbar */}
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        {/* Your main content goes here */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          color: 'var(--text-primary)',
          fontSize: '2rem',
          textAlign: 'center'
        }}>
          Welcome to Sital Aryal's Portfolio
        </div>
      </main>
    </div>
  );
}

export default HomePage;