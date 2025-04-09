
import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  icon,
  centered = false 
}) => {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      {icon && <div className="section-header-icon">{icon}</div>}
      <div className="section-header-content">
        <h2 className="section-header-title">{title}</h2>
        {description && <p className="section-header-description">{description}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;
