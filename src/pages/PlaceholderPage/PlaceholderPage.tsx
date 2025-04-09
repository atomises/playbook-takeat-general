
import React from 'react';
import './PlaceholderPage.css';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1 className="placeholder-title">{title}</h1>
        <p className="placeholder-description">
          Esta página está em desenvolvimento. Em breve, você encontrará aqui informações sobre {title.toLowerCase()}.
        </p>
        <div className="placeholder-image">
          <div className="placeholder-icon">📝</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
