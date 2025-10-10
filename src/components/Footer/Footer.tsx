import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SpamGuard</h3>
            <p className="footer-description">
              Protecting your inbox with advanced AI-powered spam detection.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>💻</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SpamGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
