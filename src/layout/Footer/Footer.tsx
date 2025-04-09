
import React from 'react';
import { Github, Heart } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  const githubUrl = "https://github.com/companygithub";
  
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {currentYear} Compass Guide | Todos os direitos reservados
        </p>
        
        <div className="footer-links">
          <a 
            href={githubUrl} 
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
