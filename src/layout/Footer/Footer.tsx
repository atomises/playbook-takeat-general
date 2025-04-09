
import React from 'react';
import { GitHub } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
  githubLink: string;
}

const Footer: React.FC<FooterProps> = ({ className = '', githubLink }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <p className="copyright">
          &copy; {year} MyCompany. Todos os direitos reservados.
        </p>
        
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          title="Acesse nosso GitHub"
        >
          <GitHub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
