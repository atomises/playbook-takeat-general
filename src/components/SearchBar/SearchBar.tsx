
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SearchResult } from '../../types/SearchResult';
import './SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  items: SearchResult[];
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Pesquisar...', items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredResults([]);
      return;
    }
    
    // Filtrar resultados com base na consulta
    const results = items.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(query.toLowerCase())
      );
      
      return titleMatch || keywordMatch;
    });
    
    setFilteredResults(results);
  };
  
  const handleResultClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setFilteredResults([]);
    setIsSearchActive(false);
  };
  
  const handleFocus = () => {
    setIsSearchActive(true);
  };
  
  const handleBlur = () => {
    // Delay to allow click on results
    setTimeout(() => {
      setIsSearchActive(false);
    }, 200);
  };
  
  return (
    <div className="search-bar-container">
      <div className={`search-input-wrapper ${isSearchActive ? 'active' : ''}`}>
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      
      {isSearchActive && filteredResults.length > 0 && (
        <div className="search-results">
          {filteredResults.map((result) => (
            <div 
              key={result.id}
              className="search-result-item"
              onClick={() => handleResultClick(result.path)}
            >
              <div className="result-title">{result.title}</div>
              <div className="result-path">{result.path}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
