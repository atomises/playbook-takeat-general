
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

interface ComingSoonProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description = 'Estamos trabalhando para disponibilizar esta seção em breve. Volte em alguns dias para conferir as novidades!',
  icon 
}) => {
  return (
    <motion.div 
      className="coming-soon"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="coming-soon-icon">
        {icon || <Clock size={36} />}
      </div>
      <h2 className="coming-soon-title">{title}</h2>
      <p className="coming-soon-description">{description}</p>
      <Link to="/" className="coming-soon-action">
        <ArrowLeft size={16} />
        <span>Voltar para página inicial</span>
      </Link>
    </motion.div>
  );
};

export default ComingSoon;
