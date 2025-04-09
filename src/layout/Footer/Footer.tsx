
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  className?: string;
  githubLink?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  className = '',
  githubLink = 'https://github.com'
}) => {
  return (
    <motion.footer 
      className={`footer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="footer-content">
        <div className="footer-copyright">
          © {new Date().getFullYear()} MyCompany. Todos os direitos reservados.
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
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
