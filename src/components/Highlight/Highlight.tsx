
import React from 'react';
import { motion } from 'framer-motion';
import './Highlight.css';

interface HighlightProps {
  text?: string;
  content?: string;
  title?: string;
  author?: string;
  image?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient';
}

const Highlight: React.FC<HighlightProps> = ({ 
  text, 
  content,
  title,
  author, 
  image,
  icon,
  variant = 'primary' 
}) => {
  // Use content if provided, otherwise use text
  const displayText = content || text || '';

  return (
    <motion.div 
      className={`highlight highlight-${variant}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="highlight-image-container">
          <img src={image} alt={author || title || 'Citação'} className="highlight-image" />
        </div>
      )}
      {icon && (
        <div className="highlight-icon-container">
          {icon}
        </div>
      )}
      <div className="highlight-content">
        {title && <h3 className="highlight-title">{title}</h3>}
        <p className="highlight-text">{displayText}</p>
        {author && <p className="highlight-author">— {author}</p>}
      </div>
    </motion.div>
  );
};

export default Highlight;
