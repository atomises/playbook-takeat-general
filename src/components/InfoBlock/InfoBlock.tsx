
import React from 'react';
import './InfoBlock.css';

interface InfoBlockProps {
  title: string;
  content: string;
  variant?: 'default' | 'highlighted' | 'warning' | 'success' | 'info';
  icon?: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ 
  title,
  content,
  variant = 'default',
  icon
}) => {
  return (
    <div className={`info-block ${variant}`}>
      {icon && (
        <div className="info-block-icon">
          {icon}
        </div>
      )}
      <div className="info-block-content">
        <h3 className="info-block-title">{title}</h3>
        <p className="info-block-text">{content}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
