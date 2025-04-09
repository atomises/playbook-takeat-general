
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SearchBar.css';
import { getIconByName } from '../../utils/iconUtils';

interface SearchItem {
  id: string;
  title: string;
  path: string;
  description: string;
  icon?: string;
  category: string;
}

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
  items: SearchItem[];
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Buscar...", 
  onSearch,
  items 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
  };
  
  const filteredItems = searchTerm.trim() 
    ? items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  const handleSelectResult = (path: string) => {
    setSearchTerm('');
    navigate(path);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        {searchTerm && (
          <button className="search-clear-button" onClick={clearSearch}>
            <X size={18} />
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isFocused && searchTerm.trim() && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filteredItems.length > 0 ? (
              <>
                <div className="search-results-header">
                  <p>{filteredItems.length} resultado(s) encontrado(s)</p>
                </div>
                <div className="search-results-list">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="search-result-item"
                      onClick={() => handleSelectResult(item.path)}
                    >
                      {item.icon && (
                        <div className="search-result-icon">
                          {React.createElement(getIconByName(item.icon), { size: 16 })}
                        </div>
                      )}
                      <div className="search-result-content">
                        <div className="search-result-title">{item.title}</div>
                        <div className="search-result-category">{item.category}</div>
                        <div className="search-result-description">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="search-no-results">
                <p>Nenhum resultado encontrado para "{searchTerm}"</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
