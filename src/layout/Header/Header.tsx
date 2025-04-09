
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  // Function to get page title based on current route
  const getPageTitle = (): string => {
    const path = location.pathname;
    
    // Remove leading slash and split by additional slashes
    const segments = path.substring(1).split('/');
    if (segments[0] === '') return 'Home';
    
    // Capitalize first letter and replace hyphens with spaces
    return segments[0].charAt(0).toUpperCase() + 
           segments[0].slice(1).replace(/-/g, ' ');
  };

  return (
    <header className={`app-header ${className}`}>
      <div className="header-content">
        <h1 className="page-title">{getPageTitle()}</h1>
      </div>
    </header>
  );
};

export default Header;
