
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './Header.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  // Get the current page title from the search data
  const getPageTitle = () => {
    if (location.pathname === '/') return 'Home';
    
    const currentPage = searchData.searchItems.find(
      item => item.path === location.pathname
    );
    
    return currentPage ? currentPage.title : 'Página não encontrada';
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
