
import React from 'react';
import { Github } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  githubLink?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  githubLink = 'https://github.com/yourcompany/yourrepo',
  className = '' 
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`app-footer ${className}`}>
      <div className="footer-content">
        <p className="copyright">© {currentYear} MyCompany. All rights reserved.</p>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
          aria-label="GitHub Repository"
        >
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
