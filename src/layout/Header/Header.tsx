
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, HelpCircle } from 'lucide-react';
import './Header.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  
  // Obter o título da página atual a partir da rota
  const getPageTitle = () => {
    if (location.pathname === '/') return 'Página Inicial';
    
    const currentPage = searchData.searchItems.find(
      item => item.path === location.pathname
    );
    
    // Se não encontrar na lista de busca, tenta extrair da URL
    if (!currentPage) {
      const path = location.pathname.substring(1); // Remove a barra inicial
      if (path) {
        // Converte primeiro caractere para maiúsculo e substitui hífens por espaços
        return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      }
    }
    
    return currentPage ? currentPage.title : 'Compass Guide';
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
        </div>
      </div>
    </header>
  );
};

export default Header;
