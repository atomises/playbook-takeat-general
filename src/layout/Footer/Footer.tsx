
import React from 'react';
import { GitHub } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
  githubLink?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  className = '', 
  githubLink = 'https://github.com/your-company/your-repo' 
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`app-footer ${className}`}>
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Empresa. Todos os direitos reservados.
        </p>
        
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          title="Visite nosso GitHub"
        >
          <GitHub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
