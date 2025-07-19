import  { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              <span className="link-text">Home</span>
              <span className="link-underline"></span>
            </Link>
            <Link to="/about" className="nav-link">
              <span className="link-text">About Me</span>
              <span className="link-underline"></span>
            </Link>
            <Link to="/contact" className="nav-link">
              <span className="link-text">Contact Me</span>
              <span className="link-underline"></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className="mobile-link"
          onClick={() => setIsOpen(false)}
        >
          <span>Home</span>
          <div className="link-decoration"></div>
        </Link>
        <Link
          to="/about" 
          className="mobile-link"
          onClick={() => setIsOpen(false)}
        >
          <span>About Me</span>
          <div className="link-decoration"></div>
        </Link>
        <Link 
          to="/contact" 
          className="mobile-link"
          onClick={() => setIsOpen(false)}
        >
          <span>Contact Me</span>
          <div className="link-decoration"></div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;