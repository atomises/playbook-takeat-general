
import React from 'react';
import { motion } from 'framer-motion';
import { Award, MessageSquare, ThumbsUp } from 'lucide-react';
import './EmployeeSpotlight.css';

interface EmployeeSpotlightProps {
  name: string;
  role: string;
  department: string;
  image: string;
  achievement: string;
  quote?: string;
  stats?: {
    projectsCompleted?: number;
    yearsAtCompany?: number;
    recommendations?: number;
  };
}

const EmployeeSpotlight: React.FC<EmployeeSpotlightProps> = ({
  name,
  role,
  department,
  image,
  achievement,
  quote,
  stats
}) => {
  return (
    <motion.div 
      className="employee-spotlight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="employee-spotlight-header">
        <Award size={24} className="employee-spotlight-icon" />
        <h3 className="employee-spotlight-title">Destaque do Mês</h3>
      </div>
      
      <div className="employee-spotlight-content">
        <div className="employee-spotlight-image-container">
          <img 
            src={image} 
            alt={name} 
            className="employee-spotlight-image" 
          />
        </div>
        
        <div className="employee-spotlight-info">
          <h4 className="employee-spotlight-name">{name}</h4>
          <p className="employee-spotlight-role">{role}</p>
          <p className="employee-spotlight-department">{department}</p>
          
          <div className="employee-spotlight-achievement">
            <ThumbsUp size={16} />
            <p>{achievement}</p>
          </div>
          
          {quote && (
            <div className="employee-spotlight-quote">
              <MessageSquare size={16} />
              <p>"{quote}"</p>
            </div>
          )}
        </div>
      </div>
      
      {stats && (
        <div className="employee-spotlight-stats">
          {stats.projectsCompleted !== undefined && (
            <div className="employee-spotlight-stat">
              <span className="employee-spotlight-stat-value">{stats.projectsCompleted}</span>
              <span className="employee-spotlight-stat-label">Projetos</span>
            </div>
          )}
          
          {stats.yearsAtCompany !== undefined && (
            <div className="employee-spotlight-stat">
              <span className="employee-spotlight-stat-value">{stats.yearsAtCompany}</span>
              <span className="employee-spotlight-stat-label">Anos na empresa</span>
            </div>
          )}
          
          {stats.recommendations !== undefined && (
            <div className="employee-spotlight-stat">
              <span className="employee-spotlight-stat-value">{stats.recommendations}</span>
              <span className="employee-spotlight-stat-label">Recomendações</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default EmployeeSpotlight;
