
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { getIconByName } from '../../utils/iconUtils';

interface SearchResult {
  id: string;
  title: string;
  path: string;
  icon?: string;
  description?: string;
}

interface SearchBarProps {
  placeholder?: string;
  items: SearchResult[];
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Buscar...', 
  items,
  onSearch
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = items.filter(item => 
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      (item.description && item.description.toLowerCase().includes(lowerCaseQuery))
    );
    
    setResults(filteredResults);
    
    if (onSearch) {
      onSearch(query);
    }
  }, [query, items, onSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current && 
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (path: string) => {
    navigate(path);
    setIsExpanded(false);
    setQuery('');
  };

  return (
    <div className="searchbar-container" ref={searchContainerRef}>
      <div 
        className={`searchbar ${isExpanded ? 'expanded' : ''}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <div className="searchbar-input-container">
          <Search size={18} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="searchbar-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {isExpanded && query && (
            <button 
              className="clear-button"
              onClick={() => setQuery('')}
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        <AnimatePresence>
          {isExpanded && results.length > 0 && (
            <motion.div 
              className="search-results"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="results-header">
                <span>Resultados</span>
                <span className="result-count">{results.length}</span>
              </div>
              <div className="results-list">
                {results.map((result) => (
                  <div 
                    key={result.id}
                    className="result-item"
                    onClick={() => handleItemClick(result.path)}
                  >
                    <div className="result-icon">
                      {result.icon ? getIconByName(result.icon) : <Search size={18} />}
                    </div>
                    <div className="result-content">
                      <div className="result-title">{result.title}</div>
                      {result.description && (
                        <div className="result-description">{result.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
