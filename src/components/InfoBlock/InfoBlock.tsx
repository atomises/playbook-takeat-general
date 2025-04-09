
import React from 'react';
import './InfoBlock.css';

interface InfoBlockProps {
  title: string;
  content: string | React.ReactNode;
  variant?: 'default' | 'highlighted' | 'warning' | 'success';
  icon?: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ 
  title, 
  content, 
  variant = 'default',
  icon
}) => {
  return (
    <div className={`info-block info-block-${variant}`}>
      {icon && <div className="info-block-icon">{icon}</div>}
      <div className="info-block-content">
        <h3 className="info-block-title">{title}</h3>
        <div className="info-block-text">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
