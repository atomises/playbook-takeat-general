
import React from 'react';
import { motion } from 'framer-motion';
import './Highlight.css';

interface HighlightProps {
  text: string;
  author?: string;
  image?: string;
  variant?: 'primary' | 'secondary' | 'gradient';
}

const Highlight: React.FC<HighlightProps> = ({ 
  text, 
  author, 
  image,
  variant = 'primary' 
}) => {
  return (
    <motion.div 
      className={`highlight highlight-${variant}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="highlight-image-container">
          <img src={image} alt={author || 'Citação'} className="highlight-image" />
        </div>
      )}
      <div className="highlight-content">
        <p className="highlight-text">{text}</p>
        {author && <p className="highlight-author">— {author}</p>}
      </div>
    </motion.div>
  );
};

export default Highlight;
