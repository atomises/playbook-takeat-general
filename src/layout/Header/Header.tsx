
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, HelpCircle, User } from 'lucide-react';
import './Header.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  // Obter o título da página atual a partir dos dados de busca
  const getPageTitle = () => {
    if (location.pathname === '/') return 'Página Inicial';
    
    const currentPage = searchData.searchItems.find(
      item => item.path === location.pathname
    );
    
    return currentPage ? currentPage.title : 'Página não encontrada';
  };
  
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">{getPageTitle()}</h1>
        </div>
        
        <div className="header-actions">
          <button className="header-action" aria-label="Notificações">
            <Bell size={20} />
          </button>
          <button className="header-action" aria-label="Ajuda">
            <HelpCircle size={20} />
          </button>
          
          <div className="header-user">
            <div className="header-user-avatar">
              <User size={18} />
            </div>
            <span className="header-user-name">Usuário</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
