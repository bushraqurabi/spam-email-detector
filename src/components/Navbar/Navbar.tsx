import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">SpamGuard</span>
        </Link>
        
        <button 
          className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
