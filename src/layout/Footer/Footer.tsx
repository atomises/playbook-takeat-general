
import React from 'react';
import { Github } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
  githubLink?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  className = '',
  githubLink = 'https://github.com/company/onboarding-guide'
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <div className="footer-copyright">
          © {currentYear} Compass Guide. Todos os direitos reservados.
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Política de Privacidade</a>
          <a href="#" className="footer-link">Termos de Uso</a>
          <a
            href={githubLink}
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
