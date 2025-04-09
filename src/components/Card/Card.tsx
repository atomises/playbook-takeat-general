
import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  className = '',
  children
}) => {
  return (
    <motion.div 
      className={`card ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {icon && <div className="card-icon">{icon}</div>}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
