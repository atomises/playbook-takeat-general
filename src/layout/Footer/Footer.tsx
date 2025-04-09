
import React from 'react';
import { Github, Heart } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
  githubLink?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '', githubLink = "https://github.com/companygithub" }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {currentYear} Compass Guide | Todos os direitos reservados
        </p>
        
        <div className="footer-links">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link github-link"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          
          <span className="footer-made-with">
            Feito com <Heart size={14} className="heart-icon" /> pela equipe
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
